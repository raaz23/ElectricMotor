"use client"
import React, { useRef, useState, useEffect } from 'react';
import DarkModeSwitcher from './DarkModeSwitcher';
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const navSelect = useRef<HTMLDivElement>(null);
  const hamSelect = useRef<HTMLDivElement>(null);
  const opacityLayerSelect = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navSelect.current?.classList.add('bg-blue-800','dark:bg-coke', 'h-16');
        navSelect.current?.classList.remove('h-24');
        hamSelect.current?.classList.remove('top-24');
        hamSelect.current?.classList.add('top-16');
        opacityLayerSelect.current?.classList.remove('top-24', 'bg-transparent');
        opacityLayerSelect.current?.classList.add('top-16', 'bg-coke');
      } else {
        navSelect.current?.classList.remove('bg-blue-800','dark:bg-coke', 'h-16');
        navSelect.current?.classList.add('h-24');
        hamSelect.current?.classList.add('top-24');
        hamSelect.current?.classList.remove('top-16');
        opacityLayerSelect.current?.classList.add('top-24', 'bg-transparent');
        opacityLayerSelect.current?.classList.remove('top-16', 'bg-coke');
      }
    };

   window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [hamMenu, setHamMenu] = useState<boolean>(false);


  return (
    <nav className='fixed top-0 left-0 right-0 h-24 z-10 bg-[#4a75da]' ref={navSelect} >
      <div className='max-w-7xl mx-auto px-5 md:px-10 lg:px-20 flex justify-between items-center h-full'>
        <div className='text-4xl md:text-5xl font-rowdies text-orange'>
          <Link href='/'>
            <Image
            alt="logo"
            width={64}
            height={64}
            src="/logo.png"
            className='rounded-3xl'
            />
          </Link>
        </div>
        <ul className='text-coke dark:text-white font-urbanist font-semibold tracking-wider text-lg hidden md:flex gap-6 lg:gap-10'>
          <li>
            <Link href='#' className='hover:text-orange duration-200 hover:underline'>
              Home
            </Link>
          </li>
          <li>
            <Link href='#about' className='hover:text-orange duration-200 hover:underline'>
              About
            </Link>
          </li>
          <li>
            <Link href='/goals&mission' className='hover:text-orange duration-200 hover:underline'>
              Goals & Mission
            </Link>
          </li>
          <li>
            <Link href='#projects' className='hover:text-orange duration-200 hover:underline'>
              Motive
            </Link>
          </li>
          <li>
            <Link href='#contact' className='hover:text-orange duration-200 hover:underline'>
              Contact US
            </Link>
          </li>
        </ul>
        <div className='flex gap-5 justify-center items-center'>
          <DarkModeSwitcher />
          <div className='md:hidden' onClick={() => setHamMenu(!hamMenu)}>
            <div
              className={`${
                hamMenu ? '-rotate-45 translate-y-[1px]' : 'rotate-0'
              } h-[2px] w-6 bg-gray-950 dark:bg-white rounded-full duration-200`}
            ></div>
            <div
              className={`${
                hamMenu ? 'hidden' : 'block'
              } my-1.5 h-[2px] w-6 bg-gray-950 dark:bg-white rounded-full duration-200`}
            ></div>
            <div
              className={`${
                hamMenu ? 'rotate-45 -translate-y-[1px]' : 'rotate-0'
              } h-[2px] w-6 bg-gray-950 dark:bg-white rounded-full duration-200`}
            ></div>
          </div>
          {hamMenu && (
            <div
              className={`fixed bottom-0 left-0 sm:left-auto right-0 text-center pt-2 px-5 md:px-10 lg:px-20 top-${
                window.scrollY > 100 ? '16' : '24'
              }`}
              ref={hamSelect}
            >
              <div
                className={`fixed left-0 right-0 bottom-0 top-${
                  window.scrollY > 100 ? '16' : '24'
                } ${
                  window.scrollY > 100 ? 'bg-coke' : 'bg-transparent'
                } bg-opacity-20 dark:bg-opacity-50 -z-10`}
                ref={opacityLayerSelect}
                onClick={() => setHamMenu(false)}
              ></div>
              <ul className='text-coke dark:text-white font-urbanist font-semibold tracking-wider text-lg flex flex-col gap-5 backdrop-blur-xl rounded-xl p-5 min-w-60 border border-coke dark:border-white animate-zoom'>
                <li onClick={() => setHamMenu(false)}>
                  <Link href='#' className='hover:text-orange duration-200'>
                    Home
                  </Link>
                </li>
                <li onClick={() => setHamMenu(false)}>
                  <Link href='#about' className='hover:text-orange duration-200'>
                    About

                  </Link>
                  
                </li>
                <li onClick={() => setHamMenu(false)}>
                  <Link href='#skills' className='hover:text-orange duration-200'>
                    Goals & Mission
                  </Link>
                </li>
                <li onClick={() => setHamMenu(false)}>
                  <Link
                    href='#projects'
                    className='hover:text-orange duration-200'
                  >
                    Motive
                  </Link>
                </li>
                <li onClick={() => setHamMenu(false)}>
                  <Link href='#contact' className='hover:text-orange duration-200'>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
