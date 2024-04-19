
"use client"
import Image from "next/image";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import KnowUs from "@/components/KnowUs";
import SloganHero from "@/components/SlogonHero";
import { useEffect } from "react";

import 'aos/dist/aos.css';
import AOS from 'aos';

  

import 'aos/dist/aos.css';
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once:true
    });
  }, []);
  return (
  <>
  <Hero/>
  <Intro />
  <KnowUs />
  <SloganHero />
  </>
  );
}

