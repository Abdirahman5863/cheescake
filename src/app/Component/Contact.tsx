import React from 'react'
import Image from 'next/image'
import { SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";
import { TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialTumblerCircular } from 'react-icons/ti'
const Contact = () => {
  return (
    <main className='flex justify-center items-center  gap-2  h-screen  p-2 md:p-6  bg-[#6A4028F0]'>
        <article className='flex justify-center flex-col items-center gap-5 flex-1'>
          <div className='flex flex-col justify-center items-center gap-2 '>
<h1 className='font-[400] md:text-[64px] md:leading-[83.39px] text-[#FFF8E1]'>Contact Us</h1>
<p className='md:w-[479.92px] md:leading-[31px] md:text-[20px] text-[#FFF8E1] font-[400] '>Need to get in touch with us? Either fill out the form with your inquiry or find the department!</p>
          </div>
          <div>
            <Image src="/contact.png" alt='' width={100} height={100} className='md:w-[300px] md:h-[288px]'/>
          </div>
          <div className='flex  flex-col gap-4'>

<div className='flex gap-4'>
<TiSocialFacebookCircular size={30} className="bg-[#FF9900] rounded-full w-[45.54px] h-[43px]"/>
          <TiSocialInstagramCircular size={30} className="bg-white rounded-full w-[45.54px] h-[43px]"/>
          <SlSocialTwitter size={30} className="bg-white rounded-full w-[49px] h-[43px]"/>
          <SlSocialYoutube size={30} className="bg-white rounded-full w-[49px] h-[43px]"/>
</div>
         
           
          <p className='leading-[24.2px] font-[400] text-[24px] text-[#FFF8E1] w-[452px]'>Copyright       2024 Dscode | All rights reserved</p>
          </div>
         
        


        </article>
        <article className='flex-1 flex justify-center items-center '>
          <form  className='flex justify-center items-center gap-7 flex-col'>
            <input placeholder='name' type='text' className='md:w-[413px] h-[60px] rounded-[10px] p-4 border-blue-500 focus:border-red-500 shadow'/>
            <input placeholder='email' type='email' className='md:w-[413px]  md:h-[60px] rounded-[10px] p-4 border-blue-500 focus:border-red-500 shadow'/>
            <input placeholder='your message...' type='text' className='md:w-[413px] md:h-[161px] h-[100px] rounded-[10px] p-4 border-blue-500 focus:border-red-500 shadow'/>
<button className='rounded-full bg-[#FCAE36] p-2 md:w-[417px]'>contact us now</button>
          </form>
  
        </article>
    </main>
  )
}

export default Contact