import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { MdNavigateNext } from 'react-icons/md';


const menu = () => {
  return (
    <div className='flex  flex-col  justify-center gap-10  items-center  bg-[#6A4028E5] h-screen max-sm:h-full' >
        <h1 className='font-[400] text-[64px] leading-[83.39px] text-[#FFF8E1]'>Our Menu</h1>
        <div className='flex items-center max-sm:flex-col md:flex-initial md:items-center gap-9 md:gap-10 '>
        <div className='flex flex-col items-center justify-center bg-[#FFF8E1] w-[355px] gap-5 h-[350px] shadow-lg shadow-[#FFF8E1] rounded-[41px]'>
<div>
    <Image src="/menu1.png" alt='' width={100} height={100} className='w-[163px] h-[163px] '/>
</div>
<div>
  <h1 className='text-[#1D2729] text-[25px] font-[700] leading-[32.57px] '>Blueberry Cheesecake</h1>
  <p className='font-[400] leading-[15.6px] text-[13px] text-[#555555] '>
  Blueberry love, cheesecake delight!
  </p>
</div>
<div className='flex justify-between items-center space-x-10'>
<p><span className='text-[#53A623]'>$</span>9.00</p>
<span className='flex'><FaStar color='#6A4028' />
<FaStar color='#6A4028' />
<FaStar color='#6A4028' />
<FaStar color='#6A4028' /></span>
</div>
</div>
<div className='flex justify-center flex-col items-center bg-[#FFF8E1] w-[355px] gap-5 h-[350px] shadow-lg shadow-[#FFF8E1] rounded-[41px]'>
<div>
    <Image src="/menu2.png" alt='' width={100} height={100} className='w-[163px] h-[163px] '/>
</div>
<div>
  <h1 className='text-[#1D2729] text-[25px] font-[700] leading-[32.57px] '>Biscoff Cheesecake</h1>
  <p className='font-[400] leading-[15.6px] text-[13px] text-[#555555] '>
  Biscoff adores cheesecake magic
  </p>
</div>
<div className='flex justify-between items-center space-x-10'>
<p><span className='text-[#53A623]'>$</span>11.00</p>
<span className='flex'><FaStar color='#6A4028' />
<FaStar color='#6A4028' />
<FaStar color='#6A4028' />
<FaStar color='#6A4028' /></span>
</div>
</div>
<div className='flex justify-center flex-col items-center bg-[#FFF8E1] w-[355px] gap-5 h-[350px] shadow-lg shadow-[#FFF8E1] rounded-[41px]'>
<div>
    <Image src="/fruitk.png" alt='' width={100} height={100} className='w-[163px] h-[163px] '/>
</div>
<div>
  <h1 className='text-[#1D2729] text-[25px] font-[700] leading-[32.57px] '>Chocolate Cheesecake</h1>
  <p className='font-[400] leading-[15.6px] text-[13px] text-[#555555] '>
  Cherish Chocolate, relish cheesecake magic!
  </p>
</div>
<div className='flex justify-between items-center space-x-10'>
<p><span className='text-[#53A623]'>$</span>10.00</p>
<span className='flex'><FaStar color='#6A4028' />
<FaStar color='#6A4028' />
<FaStar color='#6A4028' />
<FaStar color='#6A4028' /></span>
</div>
</div>


        </div>
     <div className=' flex content-end  justify-end'>
      <button className='text-[#FFF8E1] font-[500] text-[24px] leading-[29.05px] flex  items-center justify-end'> view more <span><MdNavigateNext size={30}/></span></button>
     </div>
    </div>
  )
}

export default menu