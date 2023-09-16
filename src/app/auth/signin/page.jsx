'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

function signin() {
  
  const router = useRouter()

  const {data:session,status} = useSession()

  const [data,setData] = useState({
    email:'',
    password:''
  })

  const loginUser = (e) => {
    e.preventDefault()
    signIn('credentials',{
        ...data,
        redirect:false,
    });
    
  }

  if(status == "authenticated"){
    router.push("/browse")
  }
  
  return (
    <div>
        <div className="h-[1110px] bg-[url('../../public/bannernet.jpg')] " >
            <div className='h-[841.5px] bg-black bg-opacity-50'>
                <nav>
                    <img className='w-60 lg:w-56 p-8' src="https://raw.githubusercontent.com/AntonioErdeljac/next-netflix-tutorial/master/public/images/logo.png" alt="" />                    
                </nav>

                <div className=' w-full h-[730px]'>

                    <div className='h-[600px] flex justify-center'>
                        <div className='bg-black bg-opacity-75 lg:w-1/4 md:w-2/4 sm:w-3/4 w-11/12  h-[650px] p-16'>
                            
                            <div className='w-full mb-6'>
                                <div className='text-3xl font-bold'>
                                    Sign In    
                                </div>
                            </div>


                            <form onSubmit={loginUser}>
                                <div className='w-full mb-5'>
                                        <input onChange={(e)=>setData({...data,email:e.target.value})} value={data.email} className='w-full h-12 p-5 rounded bg-neutral-700' placeholder='Email' type="text" />    
                                </div>       
                            
                                <div className='w-full mb-10'>
                                        <input onChange={(e)=>setData({...data,password:e.target.value})} value={data.password} className='w-full h-12 p-5 rounded bg-neutral-700' type="password" placeholder='Password' />    
                                </div>  

                                <div className='w-full '>
                                    <button className='w-full hover:cursor-pointer h-12 p-5 bg-red-600 rounded text-center grid  content-center '>
                                            Sign In    
                                    </button>        
                                </div>   
                            </form>
                            
                              

                            <div className='w-full text-xs flex place-content-between my-4 text-stone-300'>
                                <div>
                                    <input type="checkbox" className='bg-stone-400 mr-1 rounded' />
                                    Remember me
                                </div>
                                <div>
                                    <div className='hover:underline hover:cursor-pointer text-stone-400'>
                                        Need help?
                                    </div>
                                </div>
                            </div>


                            <div className='w-full mt-16 mb-3 text-base  text-stone-400'>
                                New to Netflix? <Link href={"/auth/signup"} className='hover:underline hover:cursor-pointer text-white'> Sign up now.</Link>
                            </div>

                            <div className='w-full text-xs text-stone-400'>
                                This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className='text-blue-700 hover:underline hover:cursor-pointer'>Learn more.</a> 
                            </div>

                        </div>

                    </div>



                    

                </div>
            


                <div className='bg-black bg-opacity-90 h-[280px] text-stone-400 '>
                    <div className='py-7 pl-10'>
                        Questions? Call <a href="" className='hover:underline'>0-800-52351</a> 
                    </div>


                    <div className='flex  w-full px-10 text-sm grid justify-items-center'>

                        <div className='flex w-full'>
                        <div className='w-1/4 space-y-5'>
                            <div className='hover:underline hover:cursor-pointer'>
                                FAQ
                            </div>
                            <div className='hover:underline hover:cursor-pointer'>
                                Cookie Preferences
                            </div>
                        </div>
                            
                        <div className='w-1/4 space-y-5'>
                            <div className='hover:underline hover:cursor-pointer'>
                                Help Center
                            </div>
                            <div className='hover:underline hover:cursor-pointer'>
                                Corporate Information
                            </div>
                        </div>
                            
                        <div className='w-1/4 space-y-5'>
                            <div className='hover:underline hover:cursor-pointer'>
                                Terms of Use
                            </div>
                        </div>

                        <div className='w-1/4 space-y-5'>
                            <div className='hover:underline hover:cursor-pointer'>
                                Privacy
                            </div>
                        </div>
                        </div>

                    </div>


                    <div className='mt-10 ml-10 text-stone-400'>
                        <select style={{borderColor:"rgb(133, 133, 133)"}}  className='text-stone-400 font-bold bg-opacity-75 rounded outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:dark:ring-offset-black/90  border appearance-none py-1 bg-black text-white w-28 text-center flex items-center justify-center' name="" id="">
                            <option className='bg-black text-center flex items-center justify-center text-stone-400' selected value="english">English</option>
                            <option className='bg-black text-center flex items-center justify-center text-stone-400' value="spanish">Spanish</option>
                        </select>
                    </div>

                </div>


            </div>




           


        </div>
    </div>
  )
}

export default signin