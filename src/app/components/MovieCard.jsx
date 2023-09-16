import React,{useContext, useState} from 'react'
import {BsPlayCircle} from "react-icons/bs"
import {AiOutlinePlusCircle,AiOutlineInfoCircle} from "react-icons/ai"
import openModal from '../hooks/openModal';
import { UserContext } from '../context/UserProvider';


function MovieCard({movie,listMovies}) {

  const {setMovieModal} = useContext(UserContext)

  const [moveActive,setMoveActive] = useState(false)

  return (
    <div id='coso' 
      onMouseEnter={(event)=>{
      const getIdThat = document.getElementById("coso")
      const cosaRara = document.getElementById("scrollRow")
      if(event.clientX+getIdThat.clientWidth > window.innerWidth ){
        if(movie == listMovies[listMovies.length-1]){
          setTimeout(()=>{
            console.log("si es")
            cosaRara.scrollLeft += getIdThat.clientWidth
            console.log("ACTIVE",moveActive)
          },700)
        }
        // else{
        //   setTimeout(()=>{
        //     cosaRara.scrollLeft += getIdThat.clientWidth
        //   },700)
        // } 
      }
      // console.log("client",event.clientX)
      // console.log("screen",window.innerWidth)
      // console.log("client-width",getIdThat.clientWidth)
    }} 
    
    // onMouseLeave={()=>{
    //   const getIdThat = document.getElementById("coso")
    //   const cosaRara = document.getElementById("scrollRow")
    //   cosaRara.scrollLeft -= getIdThat.clientWidth

    // }}

    className={`
    rounded-md
    group
    flex-none 
    object-cover 
    hover:mx-[20px]
    md:hover:mx-[115px]
    lg:hover:mx-[115px]
    hover:scale-110
    md:hover:scale-150
    lg:hover:scale-150
    mx-1
    ${listMovies[0] == movie ? "" : ""}
    transition-all
    duration
    delay-300
    h-[200px] 
    md:w-2/4 
    lg:w-1/4
    w-full`}>

        <img src={movie.thumbnailUrl} className='
        rounded-md
        object-cover 
        w-full 
        h-full
        group-hover:opacity-50

        ' alt="" />
        <div className='
        w-full
        group-hover:scale-100
        group-hover:opacity-100
        transition
        duration
        delay-300
        opacity-0
        scale-0
        absolute
        bottom-0
        flex
        place-content-between
        '>
          <div className='space-y-1 absolute left-5 bottom-5'>
            <div><BsPlayCircle size={40} className='hover:cursor-pointer text-red-500 hover:opacity-50'></BsPlayCircle></div>
            <div>{movie.title}</div>
            <div>{movie.duration}</div>
            <div>{movie.genre}</div>
          </div>
          <div className='space-y-1 absolute right-5 bottom-5'>
            <div><AiOutlinePlusCircle size={35} className='hover:cursor-pointer hover:opacity-70'></AiOutlinePlusCircle></div>
            <div><AiOutlineInfoCircle size={35} className='hover:cursor-pointer hover:opacity-70' onClick={()=>{
              openModal()
              setMovieModal(movie)
            }}></AiOutlineInfoCircle></div>
          </div>
          
        </div>
        
        
    </div>
  )
}

export default MovieCard