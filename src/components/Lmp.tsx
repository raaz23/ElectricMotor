"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";
import Image from "next/image";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent"
      >
        <Link 
      className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
      href="#"
     >
  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-black"
  >
    Contact US 
  </span>
</Link>
      </motion.h1>
      <span className="flex  gap-2 mt-3 mb-8"><strong>REACH US</strong><FaArrowUpLong  className="mt-1"/></span>
      
    <div className="flex flex-col justify-center items-center h-full">
  <div className="flex flex-col gap-6 text-center">
    <h1 className="my-6 text-3xl font-bold text-white tracking-widest">
      We believe the company grows with happy clients
    </h1>
    <p className="text-base text-white">
      Applauses come with enhanced, quality, and time-bound delivery. 
      <br />
      Want to know more?
    </p>
  </div>
  <div className="absolute mt-[36rem] ml-54 lg:md:mt-60 md:ml-52 flex bg-white py-10 px-8 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flex justify-between flex-col text-black">
            <div className='flex w-full flex-col'>
              <div className="flex justify-between w-full">
                <p className="font-bold text-gray-20">From</p>
           </div>
              <p className=" mt-2">Jeetpur Main market </p>
            </div>
              <p className=" text-black text-xl font-bold tracking-widest"> only 6 min way</p>
   
            <div className='flex w-full flex-col'>
              <p className="font-bold text-gray-20">To</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Alam Engineering workshop and suppliers </h4>
            </div>
          </div>
        </div>
</div>

    </LampContainer>
  );
}
