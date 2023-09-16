import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import { BellIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import {UserContext} from '../context/UserProvider';

function Navbar() {
  const [showNavbarBackground,setShowNavbarBackground] = useState(false)

  const {currentProfile} = useContext(UserContext)

  useEffect(()=>{
    const handleScroll = () => {
        if(window.scrollY >= 66){
            setShowNavbarBackground(true)
        }else{
            setShowNavbarBackground(false)
        }
    }

    window.addEventListener('scroll',handleScroll)

    return () => {
        window.removeEventListener('scroll',handleScroll)
    }
  },[])

  return (
    <div className='relative'>
      <nav className={`lg:fixed md:fixed transition duration-500 z-10 w-full h-[100px] grid content-center bg-black ${showNavbarBackground ? 'bg-opacity-70' : 'bg-opacity-0'}`}>
                <div className='flex justify-between '>
                  <div className='flex md:space-x-[15px] lg:space-x-[25px] md:ml-[20px] lg:ml-[80px] '>
                      <div className='grid content-center'> 
                        <img className='h-[40px]' src="https://raw.githubusercontent.com/AntonioErdeljac/next-netflix-tutorial/master/public/images/logo.png" alt="" />                    
                      </div>
                      <div className='grid content-center'>
                        Home
                      </div>
                      <div className='grid content-center'>
                        Series
                      </div>
                      <div className='grid content-center'>
                        Films
                      </div>
                      <div className='grid content-center'>
                        New & Popular
                      </div>
                      <div className='grid content-center'>
                        My List
                      </div>
                      <div className='grid content-center'>
                        Browse by Languages
                      </div>
                  </div>

                  <div className='flex md:space-x-[10px] lg:space-x-[25px] md:mr-[20px] lg:mr-[80px]'>
                    <div className='grid content-center'>
                      <MagnifyingGlassIcon className="w-6"/>
                    </div>
                    <div className='grid content-center'>
                      <BellIcon className="w-6" />
                    </div>
                    <div className='flex lg:space-x-[8px]'>
                      <div className='grid content-center'>
                        <img className='h-[50px] rounded' src={currentProfile.img} alt="" />
                      </div>
                      <div className='grid content-center'>
                        <ChevronDownIcon className="w-6" />
                      </div>
                    </div>
                  </div>  
                </div>
              </nav>
    </div>
        
  )
}

export default Navbar