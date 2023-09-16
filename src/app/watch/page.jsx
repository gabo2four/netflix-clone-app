'use client'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

function page() {

  const {currentWatchMovie} = useContext(UserContext)

  return (
    <div>
        <video src={currentWatchMovie.videoUrl} controls autoPlay className='bg-black w-screen h-screen'></video>
    </div>
  )

  }
export default page