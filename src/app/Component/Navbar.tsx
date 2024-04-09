"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const NavigationMenu = () => setMenuIcon(!menuIcon);
  return (
    <nav className=" flex  justify-between mx-10 items-center ">
      <Image src="/logo.png" alt="" width={100} height={100} />
      <div className="hidden md:space-x-60  md:flex md:justify-center md:items-center ">
        <div className="sm:space-x-20 space-x-5 rounded-md  inline-block p-1 bg-[#6F4436CC] text-slate-200 ">
          <Link href="/">
            <button className="hover:bg-white p-2 rounded-md hover:text-[#6F4436CC] ">
              Home
            </button>
          </Link>
          <Link href="/about">
            <button className="hover:bg-white p-2 rounded-md hover:text-[#6F4436CC]">
              About us
            </button>
          </Link>
          <Link href="/menu">
            <button className="hover:bg-white p-2 rounded-md hover:text-[#6F4436CC]">
              Menu
            </button>
          </Link>
          <Link href="/contact">
            <button className="hover:bg-white p-2 rounded-md hover:text-[#6F4436CC]">
              Contact
            </button>
          </Link>
        </div>
        <button className="block border border-[#523728] text-[#523728] p-1 rounded-md">
          Sign Up
        </button>
      </div>
      <div onClick={NavigationMenu} className="flex md:hidden">
        {menuIcon ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div
        className={
          menuIcon
            ? "md:hidden absolute top-[90px] right-0 left-0 bottom-0 flex justify-center items-center w-full h-full bg-[#FFF8E1]"
            : "md:hidden absolute top-[90px] left-[-100%] right-0 flex justify-center items-center w-full h-full bg-[#FFF8E1]"
        }
      >
        <div className="flex flex-col justify-center items-center gap-4 text-[#523728]  ">
          <Link href="/">
            <button className="hover:bg-white p-2 rounded-md">Home</button>
          </Link>
          <Link href="/about">
            <button className="hover:bg-white p-2 rounded-md">About us</button>
          </Link>
          <Link href="/menu">
            <button className="hover:bg-white p-2 rounded-md">Menu</button>
          </Link>
          <Link href="/contact">
            <button className="hover:bg-white p-2 rounded-md">Contact</button>
          </Link>

          <button className="block border border-[#523728] text-[#523728] p-1 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
