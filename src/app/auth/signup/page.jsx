'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

function page() {

  const router = useRouter()

  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const registerUser = async (e) => {
    e.preventDefault()
    
    const response = await fetch('/api/signup',{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify({data})
    })
    console.log("caca",response)
    const userInfo = await response.json()
    console.log("COSO",userInfo)
    router.push('/browse')
  }

  return (
    <div>
        REGISTER
        <form onSubmit={registerUser}  className='flex flex-col text-black'>
            <input onChange={(e)=>setData({...data,name:e.target.value})} value={data.username} type="text" placeholder='Username'/>
            <input onChange={(e)=>setData({...data,email:e.target.value})} value={data.email} type="email" placeholder='Email'/>
            <input onChange={(e)=>setData({...data,password:e.target.value})} value={data.password} type="password" />
            <button>Sign up</button>
        </form>
    </div>

  )
}

export default page