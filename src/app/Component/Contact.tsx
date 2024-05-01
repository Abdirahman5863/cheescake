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
        <div className="mt-8 mb-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <form

        className="mb-0 space-y-6" method="post"
        action="#"
      >
        <div className="flex gap-5 flex-col">
          <div className="flex flex-col gap-5">
          <label htmlFor="owner" className="block text-sm font-medium text-gray-700 " >Name</label>
            <input
              id="owner"
              required
              type="text"
              name="owner"
              placeholder="Address"
            
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>

          <div className="flex gap-3 flex-col" >
            <label htmlFor="owner" className="block text-sm font-medium text-gray-700 " >EmaiL</label>
            <input
              id="title"
              required
              placeholder="Email"
              type="Email"
              name="Email"
            
       className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>

        

          <div className="flex gap-3 flex-col">
          <label htmlFor="owner" className="block text-sm font-medium text-gray-700 " >Message</label>
        
            <textarea
              id="description"
              placeholder="Description"
              name="description"
            
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="flex gap-3 flex-col">
          <label htmlFor="owner" className="block text-sm font-medium text-gray-700 " >Submit Date</label>
            <input
              id="date"
              placeholder="Date"
              type="date"
              name="date"
            
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>
<div className="flex justify-center items-center mb-2">
<button
            className="rounded-sm  bg-blue-500 px-6 py-2 block text-white"
          >
            Submit
          </button>
</div>
        
        </div>
      </form>

      </div>
      </div>
  
        </article>
    </main>
  )
}

export default Contact