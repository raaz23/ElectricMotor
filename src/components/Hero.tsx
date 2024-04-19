import React from 'react';
import Image from "next/image";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/AA.png')" }}>
      <div className="relative md:hidden  top-28">
        <Image 
          alt=''
          width={700}
          height={700}
          src="/workshop2.jpg"
          className='w-full h-full object-contain rounded-2xl'
        />
      </div>
      
      <div className="relative flex justify-end max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-20 shadow-md lg:mt-10" data-aos="zoom-in" data-aos-delay="400">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right bg-[#6c7c95] rounded-lg p-10 lg:mt-10">
          <h1 className="text-3xl font-extrabold sm:text-5x font-proza tracking-wider">
            Let us find your workshop at the best price and quality of service. <br />
            <strong className="block font-extrabold text-[#152039] mt-5">Electric Motor Repair</strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl">
            <strong className='underline font-bold'>24 * 7 Available </strong><br/>
            This essential guide covers what you should know when sending your motor to the shop and why you should care about service and quality.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="#" className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
              Get Started
            </a>

            <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
