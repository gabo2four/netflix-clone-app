import React from 'react'

function FAQcards({tittle,heightFAQ,content}) {

    function activeAcord(e){
        const coso = e.target.nextElementSibling.classList
    
        if(coso.value.split(" ").includes("false")){
          e.target.nextElementSibling.classList.remove("max-h-0","overflow-hidden","false")
          e.target.classList.remove("after:rotate-0")
          e.target.className += " after:-rotate-45"
          e.target.nextElementSibling.className += " max-h-fit true"
        } else{
          e.target.nextElementSibling.classList.remove("max-h-fit","true")
          e.target.classList.remove("after:-rotate-45")
          e.target.className += " after:rotate-0"
          e.target.nextElementSibling.className += " max-h-0 overflow-hidden false"  
          
        }
        console.log('this is:',e.target.nextElementSibling)
    }
  return (
    <div>
          <div className='relative lg:mx-56  mx-16 mt-2' >
            <div onClick={(e)=>activeAcord(e)} className="py-8 px-8 font-bold text-2xl cursor-pointer bg-neutral-800 hover:bg-neutral-700 text-white after:rotate-0 after:duration-100  after:content-['+'] after:absolute after:text-3xl after:text-white after:right-7 after:top-7 ">{tittle}</div>
            <div className='false max-h-0 overflow-hidden duration-500 ' >
                    {content}
            </div>
          </div>

          

    </div>
  )
}

export default FAQcards