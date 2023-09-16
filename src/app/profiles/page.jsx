'use client'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import {UserContext} from '../context/UserProvider';

function profiles() {

  const router = useRouter()

  const {profiles,setProfiles,
        currentProfile,setCurrentProfile} = useContext(UserContext)

  const {data:session,status} = useSession()
  console.log("perfiles",profiles)

  useEffect(()=>{
    if(status !== "loading" && status !== "authenticated"){
      router.push('/')
    }

    const getProfiles = async () => {
      const response = await fetch('/api/profiles',{
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({session})
      })  
      const userInfo = await response.json()
      setProfiles(userInfo)
    }
    
    console.log(profiles)
    if(profiles.length == 0 && session){
      getProfiles()
    }  
    
  },[session])

  return (
    <div className='w-screen h-screen grid justify-items-center content-center'>
    
    {
      session && profiles !== [] ? (
        <div className='w-screen grid justify-items-center space-y-10' >
          <div className=' text-5xl text-center'>
            Who's watching?
          </div>
          <div className='flex space-x-5  '>
            {
              profiles.map((profile)=>(
                <div  key={profile.name} className=' space-y-5 grid justify-items-center'>
                  <div onClick={()=>{router.push("/browse"),setCurrentProfile(profile)}}>
                    <img className='h-[150px] rounded hover:cursor-pointer' src={profile.img} alt="" />
                  </div>
                  <div>
                    {profile.name}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      ) : (
        <div>
          CARGANDO
        </div>
      )
    }
        


    </div>
  )
}

export default profiles