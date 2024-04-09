import Image from "next/image";
import React from "react";
const About = () => {
  return (
    <main className="
    flex  m-auto  p-10  justify-center  items-center space-x-10"
    >
    <article className="flex-1">
      <Image src="/fruitk.png" alt="" width={300} height={300} className="md:w-[500px] md:h-[500px] w-auto h-auto" />
    </article>
    <article className="flex-1 flex  flex-col space-y-6">
      <h1 className="md:text-[60px] md:font-[400] md:leading-[78.18px] text-[#523728] text-[30px] font-[400] leading-[35px]">We Love Cheesecake</h1>
      <span className="text-[24px] font-[400] leading-[36px] text-[#523728]">Discover Our Cheesecake Story</span>
      <div className="text-[20px] font-[400] leading-[24.4px] text-[#523728] md:w-[558px] w-[200px] gap-2 flex flex-col">
        <span>
        At Cheesecake Love, quality is our cornerstone. Each cheesecake is
        crafted with the finest ingredients, meticulous attention to detail,
        and a dash of creativity.</span><br/>

         <span>
         We believe in delivering not just desserts
        but moments of sheer indulgence.
        </span>
      </div>
      <div>
      <button className="rounded-[100px] bg-[#523728] md:p-2  md:w-[170px] p-1   text-white md:font-bold">
      Read More
        </button>
      </div>
   
    </article>
  </main>
  )
}

export default About