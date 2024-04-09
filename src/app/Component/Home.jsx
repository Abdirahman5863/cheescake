import React from "react";
import { ImPlay2 } from "react-icons/im";
import Image from "next/image";

const Home = () => {
  return (
    <main className="flex  m-auto  p-10  justify-center  items-center">
      <article className="flex-1  justify-center items-center space-y-10 ">
        <h1 className="md:text-[69px] md:font-[400] md:leading-[82.8px] text-[#523728] text-[30px] font-[400] leading-[35px] md:w-[864px] w-[250px]">
          Bite The World of Cheesecake Wonders
        </h1>
        <p className="text-[18px] font-[400] leading-[28.8px] text-[#523728] md:w-[437px] w-[150px]">
          We always make our customer happy by providing as many choices as
          possible{" "}
        </p>
        <div className="flex  space-x-6">
          <button className="rounded-[100px] bg-[#523728] md:p-2  p-1   text-white md:font-bold md:w-[147px]">
            Get Started
          </button>
          <button className="flex md:tracking-[4px] items-center gap-2 font-medium  border-[1px] rounded-[100px] md:p-1 border-[#523728] md:w-[187px]">
            <ImPlay2 color="#523728" />
            Wactch Demo
          </button>
        </div>
      </article>
      <article className="flex-1">
        <Image
          src="/cake.png"
          alt=""
          width={300}
          height={300}
          className="md:w-[600px] md:h-[500px] w-auto h-auto"
        />
      </article>
    </main>
  );
};

export default Home;
