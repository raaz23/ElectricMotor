"use client"
import { useEffect } from 'react';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUserFriends, FaMotorcycle } from 'react-icons/fa';
import { SiLinuxfoundation } from "react-icons/si";
import { TbCircuitMotor } from "react-icons/tb";

const KnowUs = () => {
  return (
    <section className='bg-blue-500 max-h-screen w-full flex items-center justify-center text-white'>
      <div className='container mx-auto flex flex-col justify-center p-5 md:p-10 '>
        <h1 className='text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8' data-aos='zoom-in-up'  data-aos-delay="300">
          KNOW US
        </h1>
        <p className='text-base md:text-lg text-center mb-8'>
          We started our journey in 2002 with a small team. Today we have expanded across the globe by providing quality and timely delivery to our clients. Although our services span across industry segments, we take pride in calling ourselves the experts of the electric motors and repairing segment through our exclusive association with the Aalam Group.
        </p>

        <div className='flex flex-col md:flex-row justify-center md:space-x-8' >
      <div className='text-center mb-4 md:mb-0 md:mr-8 flex flex-col items-center' >
       <span className="hover:ring-2 hover:ring-white p-3" data-aos='zoom-in'data-aos-delay="500" > <SiLinuxfoundation className='text-3xl md:text-4xl mb-2' /></span>
        <p className='text-base md:text-xl'>Founded 1994</p>
      </div>
      <div className='text-center mb-4 md:mb-0 md:mr-8 flex flex-col items-center'>
       <span className='hover:ring-2 hover:ring-white p-3' data-aos='zoom-in'data-aos-delay="500" ><FaUserFriends className='text-3xl md:text-4xl mb-2' /></span> 
        <p className='text-base md:text-xl' >Employees 12+</p>
      </div>
      <div className='text-center mb-4 md:mb-0 md:mr-8 flex flex-col items-center' >
        <span className='hover:ring-2 hover:ring-white p-3' data-aos='zoom-in'data-aos-delay="500" ><TbCircuitMotor className='text-3xl md:text-4xl mb-2' /></span>
        <p className='text-base md:text-xl'>Electric Motor Expertise</p>
      </div>
        </div>
      </div>
    </section>
  );
};

export default KnowUs;
