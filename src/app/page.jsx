'use client'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import FAQcards from './components/FAQcards'
import { useState } from 'react'
import Link from 'next/link'


function page() {


  const options = [
    {value:"english",text:"English"},
    {value:"spanish",text:"Spanish"}
  ]

  const [selected,setSelected] = useState(options[0].value)

  const handleChange = event => {
    console.log(event.target.value)
    setSelected(event.target.value)
  }

  const {data:session,status} = useSession()
  console.log(session,status)

  return (
    <div>
      <div style={{boxShadow:" inset 0px 55px 100px -10px black,inset 0px -55px 100px -10px black;"}} className="w-full h-fit bg-[url('../../public/bannernet.jpg')] ">
          <div  className='lg:h-[700px] h-[510px] bg-black bg-opacity-50'>
            <nav className='flex justify-between'>
              <img className='w-40 lg:w-56 p-8' src="https://raw.githubusercontent.com/AntonioErdeljac/next-netflix-tutorial/master/public/images/logo.png" alt="" />
              <div className='flex justify-between px-10 py-5' >
                <div>
                  <div 
                    className='
                      text-white 
                      flex items-center 
                      justify-center
                      mx-2
                      '>
                    <select style={{borderColor:"rgb(133, 133, 133)"}} defaultValue={selected} onChange={handleChange}  className='font-bold bg-opacity-75 rounded outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:dark:ring-offset-black/90  border appearance-none py-1 bg-black text-white w-28 text-center flex items-center justify-center' name="" id="">
                      {options.map(option => (
                        <option key={option.value} className='bg-black text-center flex items-center justify-center ' value={option.value}>{option.text}</option>
                      ))}  
                    
                    </select>
                  </div>
                </div>
                <div>
                  {
                    session ? (
                      <button onClick={()=>{signOut()}}  className='font-bold mx-2 bg-red-700 w-fit px-5 py-1 rounded text-white'>
                        Sign Out
                      </button>
                    ) : (
                      <Link href={'/auth/signin'} className='font-bold mx-2 bg-red-700 w-fit px-5 py-1 rounded text-white'>
                      Sign In
                    </Link>

                    )
                  }
                  
                </div>
                  
              </div>
            </nav>
            <div className='mt-20'>
              <div className='w-full text-center flex flex-col  space-y-6'>
                <h1 className='lg:text-5xl sm:text-4xl font-bold'>Unlimited movies, TV shows, and more</h1>
                <h2 className='lg:text-2xl sm:text-1x sm:font-bold'>Watch anywhere. Cancel anytime.</h2>
                <h2 className='lg:text-2xl sm:text-1x sm:font-bold'>Ready to watch? Enter your email to create or restart your membership.</h2>

              </div>
              <div className='flex justify-center my-6 w-full'>
                <div className='flex justify-center lg:w-1/2 md:w-3/4 sm:w-full'> 
                  <input style={{borderColor:"rgb(133, 133, 133)"}} className='rounded w-1/2 py-4 px-4 border text-white bg-black bg-opacity-60' type="email" placeholder='Email Address'/>
                  <div className='font-bold mx-2  bg-red-700 w-fit px-5 py-4 rounded text-white text-center ' >
                    Get Started
                  </div>
                </div>
              </div>
              
            </div>
          </div>
       
      </div>

      <div className='py-1 bg-zinc-800 '></div>

      <div className='bg-black mb-24 mt-16  lg:flex  justify-center'>
        <div className='grid place-items-center'>
          <div className='lg:w-3/4  flex flex-col space-y-4 text-center lg:text-justify'>
            <div className='lg:text-5xl md:text-3xl sm:text-2xl font-bold'>Enjoy on your TV</div>
            <div className='lg:text-2xl md:text-1xl sm:text-1xl'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</div>
          </div>
        </div>
        <div className='relative lg:pr-20 grid place-items-center  '>
          <div className='z-10'>
            <img className='' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
          </div>

          <div className='absolute lg:pr-20 pb-4 z-0'>
            <video className='' autoPlay muted loop>
              <source className='' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type='video/mp4'/>
            </video>
          </div>
          
        </div>
      </div>

      <div className='py-1 bg-zinc-800 '></div>

      <div className='flex lg:flex-nowrap justify-center items-center flex-wrap-reverse pb-20 pt-10  '>
        <div className=' relative grid justify-items-center '>
          <div className='mt-10'>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
          </div>

          <div className='absolute fixed lg:mt-96 md:mt-96 sm:mt-96 mt-80'>
            <div style={{borderColor:"rgb(133, 133, 133)"}} className=' flex items-center w-96 bg-black py-2 border-2 rounded-2xl'>
              <div className='w-1/4 pl-3'>
                <img className='lg:h-20 md:h-16 sm:h-14 h-14' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
              </div>
              <div className='w-2/4 h-full'>
                <div className=''>
                  <div className='font-bold '>
                    Stranger Things
                  </div>
                  <div className='text-blue-500'>
                    Downloading...
                  </div>
                </div>
                
              </div>
              <div className='w-1/4 grid justify-items-center'>
                <img  className='h-14' src="https://us.123rf.com/450wm/honzahruby/honzahruby1404/honzahruby140400072/27595697-icono-de-descarga-cloud-computing-elemento-de-diseño-plano-blanco-sobre-fondo-negro.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=' text-center lg:text-justify flex flex-col justify-center space-y-4 '>
          <div className='lg:w-10/12 '>
            <h1 className='font-bold lg:text-5xl sm:text-4xl'>Download your shows to watch offline</h1>
          </div>
          <div>
            <h1 className='lg:text-2xl sm:text-xl'>Save your favorites easily and always have something to watch.</h1>
          </div>
         
        </div>
      </div>

      <div className='py-1 bg-zinc-800 '></div>

      <div className='lg:flex justify-center items-center mt-16 mb-24 grid place-items-center space-y-4 '>
        
        <div className=' flex flex-col  justify-center items-center space-y-4 lg:text-justify  text-center '>
          <div className='lg:w-4/5 flex flex-col space-y-4 text-center lg:text-justify'>
            <div className='lg:text-5xl md:text-3xl sm:text-2xl font-bold'>Watch everywhere</div>
            <div className=' lg:text-2xl md:text-1xl sm:text-1xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
          </div>
          
        </div>

        <div className='flex justify-center relative '>
          <img className=' z-50 scale-110 ' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="" />
          <div className='absolute z-10 bg-black w-2/12 -ml-2 left-0 h-full'></div>
          <div className='absolute z-20 bg-black w-2/12  right-0 h-full'></div>
          <div className='absolute z-30 bg-black w-full mb-20  bottom-0 h-10'></div>

          <div className='absolute z-0 scale-90 '>
            <video muted autoPlay loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"></video>
          </div>
        </div>

      </div>

      <div className='py-1 bg-zinc-800 '></div>


      <div className='flex lg:flex-nowrap flex-wrap-reverse justify-center mt-20 mb-16'>

        <div className='mt-16'>
          <img src="https://occ-0-6205-2430.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" alt="" />
        </div>


        <div className='lg:w-5/12 lg:text-justify text-center space-y-4 lg:mt-36'>
          <div className='font-bold lg:text-5xl sm:text-4xl'>
              Create profiles for kids
          </div>
          <div className='lg:text-2xl sm:text-1xl flex justify-center'>
            <div className='w-11/12'>
              Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
            </div>
          </div>
        </div>

      </div>

      <div className='py-1 bg-zinc-800 '></div>

      <div>
        <div className='mt-16 mb-10 text-center text-4xl font-bold'>
          Frequently Asked Questions
        </div>
        <div>
          <FAQcards tittle={"What is Netfilx?"} heightFAQ={"h-32"} 
            content={"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"}></FAQcards>
          <FAQcards tittle={"How much does Netflix cost?"} heightFAQ={"h-20"} 
            content={"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from PEN24.90 to PEN44.90 a month. No extra costs, no contracts."}></FAQcards>
          <FAQcards tittle={"Where can I watch?"} heightFAQ={"h-40"} 
            content={"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."}></FAQcards>
          <FAQcards tittle={"How do I cancel?"} heightFAQ={"h-20"} 
            content={"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."}></FAQcards>
          <FAQcards tittle={"What can I watch on Netflix?"} heightFAQ={"h-20"} 
            content={"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."}></FAQcards>
          <FAQcards tittle={"Is Netflix good for kids?"} heightFAQ={"h-36"} 
            content={"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}></FAQcards>
        
        </div>
      </div>
      
      <div className='mt-14 mb-14 my-6 w-full flex justify-center content-center '>
        <div className='flex flex-col  space-y-3 bg-black'>
            <div className='text-center text-xl'>
              Ready to watch? Enter your email to create or restart your membership.
            </div>
            <div className='flex justify-center h-14 px-2'>
              <input style={{borderColor:"rgb(133, 133, 133)"}} className='rounded w-3/4 py-4 px-4 border text-white bg-black bg-opacity-60' type="email" placeholder='Email address'/>
              <div className='w-1/4 font-bold mx-2 bg-red-700 w-fit px-5 grid place-items-center rounded text-white text-center' >
                <div>
                  Get Started
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className='py-1 bg-zinc-800 '></div>

      <div className='text-neutral-400 flex w-full flex-col  grid justify-items-center mb-5 mt-5'>
        <div className='w-full lg:w-3/4 bg-black space-y-7'>
          <div className='ml-10'>
            Questions? Call <a className='underline' href="">0-800-52351</a>
          </div>

          <div className='flex w-full '>
            <div className='w-1/4 space-y-3 px-10'>
              <div><a href="" className='underline'>FAQ</a></div>
              <div><a href="" className='underline'>Investor Relations</a></div>
              <div><a href="" className='underline'>Ways to Watch</a></div>
              <div><a href="" className='underline'>Corporate Information</a></div>
              <div><a href="" className='underline'>Only on Netflix</a></div>
            </div>
            <div className='w-1/4 space-y-3 px-7'>
              <div><a href="" className='underline'>Help Center</a></div>
              <div><a href="" className='underline'>Jobs</a></div>
              <div><a href="" className='underline'>Terms of Use</a></div>
              <div><a href="" className='underline'>Contact Us</a></div>

            </div>
            <div className='w-1/4 space-y-3 px-7'>
              <div><a href="" className='underline'>Account</a></div>
              <div><a href="" className='underline'>Redeem Gift Cards</a></div>
              <div><a href="" className='underline'>Privacy</a></div>
              <div><a href="" className='underline'>Speed Test</a></div>

            </div>
            <div className='w-1/4 space-y-3 px-7'>
              <div><a href="" className='underline'>Media Center</a></div>
              <div><a href="" className='underline'>Buy Gift Cards</a></div>
              <div><a href="" className='underline'>Cookie Preferences</a></div>
              <div><a href="" className='underline'>Legal Notices</a></div>

            </div>
          </div>

          <div className='pl-10'>
            <select style={{borderColor:"rgb(133, 133, 133)"}}  className='font-bold bg-opacity-75 rounded outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:dark:ring-offset-black/90  border appearance-none py-1 bg-black text-white w-28 text-center flex items-center justify-center' name="" id="">
              <option className='bg-black text-center flex items-center justify-center' selected value="english">English</option>
              <option className='bg-black text-center flex items-center justify-center' value="spanish">Spanish</option>
            </select>
          </div>

          <div className='pl-10'>
            Netflix Peru
          </div>
          


        </div>
        
        


      </div>

    </div>
  )
}

export default page