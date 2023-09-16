import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import MovieCard from './MovieCard'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'


function RowListMovie({titleRow}) {
  
    const {movies} = useContext(UserContext)




    return (
    <div className='mt-5 relative'>
        <div className='pt-10 pl-10 '>
            <h1 className='text-5xl font-semibold'>{titleRow}</h1>
        </div>
        <div className='group/row'>
            <div id="scrollRow"className='flex scroll-smooth relative overflow-hidden px-10 h-[350px]  pt-16 '>
                {
                    movies.map((movie)=>(
                        <MovieCard movie={movie} listMovies={movies}></MovieCard>
                    ))
                }
            </div>
            <div className='absolute group-hover/row:scale-100 scale-0 top-[220px] left-5 '>
                <AiOutlineArrowLeft size={50} className='sticky z-50 hover:scale-150 hover:bg-black hover:bg-opacity-50 rounded-full  ' onClick={(e)=>{
                    const getRowId = document.getElementById("scrollRow")
                    getRowId.scrollLeft -= window.innerWidth-80
                }}></AiOutlineArrowLeft>
            </div>
            <div className='absolute group-hover/row:scale-100 scale-0 top-[220px] right-5 '>
                <AiOutlineArrowRight size={50} className=' hover:scale-150 hover:bg-black hover:bg-opacity-50 rounded-full' onClick={(e)=>{
                    const getRowId = document.getElementById("scrollRow")
                    getRowId.scrollLeft += window.innerWidth-80
                }}></AiOutlineArrowRight>
            </div>
        </div>
        
    </div>
  )
}

export default RowListMovie