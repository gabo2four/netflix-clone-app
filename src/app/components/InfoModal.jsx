import React, { useContext } from 'react'
import {UserContext} from '../context/UserProvider';
import { BsFillPlayFill } from 'react-icons/bs';
import {AiOutlinePlusCircle,AiOutlineClose} from 'react-icons/ai'
import openModal from '../hooks/openModal';
import { useRouter } from 'next/navigation';


function InfoModal() {

    const router = useRouter()
    const {
        movieModal,
        setCurrentWatchMovie
    } = useContext(UserContext)

  return (
    <div className='z-20 ' >
        <div id='infoModal' className='fixed invisible z-50 h-full w-full grid place-content-center top-0 bg-black bg-opacity-70' 
        onClick={(e)=>{
            openModal()
        }}>
        </div>
        <div id='infoModalContent'  className='fixed invisible z-50 top-1/2 translate-y-[-50%]  left-1/2 translate-x-[-50%]  w-2/4  bg-black rounded-lg '>
            <div className='bg-black  w-full h-1/2  relative'>
                <video src={movieModal.videoUrl} muted loop autoPlay className='rounded-t-lg'></video>
                <AiOutlineClose size={45} className='hover:cursor-pointer hover:opacity-80  absolute top-3 right-3 p-2 rounded-full bg-stone-800 ' onClick={()=>{
                    openModal()
                }}></AiOutlineClose>
                <div className='absolute bottom-[10%] left-10 space-y-5'>
                    <div className='text-6xl'>
                        {movieModal.title}
                    </div>
                    <div className='flex space-x-3'>
                        <div>
                            <div className='h-[45px] bg-white text-black rounded-md'>
                                <button className='h-full px-3 flex font-bold' onClick={()=>{setCurrentWatchMovie(movieModal),router.push("/watch")}}>
                                    <div className='grid content-center h-full'>
                                        <BsFillPlayFill size={40} />
                                    </div>
                                    <div className='grid text-xl content-center h-full'>
                                        Play
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='h-[45px] grid content-center'>
                            <AiOutlinePlusCircle size={50} className='hover:cursor-pointer'></AiOutlinePlusCircle>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-stone-800 w-full h-1/2 rounded-b-lg space-y-5 py-10 px-10'>
                <div className='flex space-x-5 text-xl'>
                    <div className=''>
                        {movieModal.duration}
                    </div>
                    <div>
                        {movieModal.genre}
                    </div>
                </div>
                <div className='text-xl'>
                    {movieModal.description}
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoModal