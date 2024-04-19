import React from 'react'
import Crd from './Crd';
import { FaArrowRightLong } from "react-icons/fa6";
 const  Intro= () => {
  const IntroSection=[
    {
      title:"Electric Motor Repair", word: `Our electric motor repair services are here to get your motor up and running again, whatever the size, power or application.\nAt Aalam Engineering and workshop, our expert team provides electric motor repairs, maintenance and overhauls for all types of motors in a wide range of sectors and industries, on a contracted or emergency response basis.`},
      {title:"Electric Motor Overhaul", word: "A standard electric motor overhaul includes an initial equipment inspection and diagnosis, bearings replacement, a test run and report.\nwe offer 24/7 emergency repair to help minimise downtime and have your motor back in service in as short a timescale as possible. Where required, our site team can also carry out decommissioning, removal and transportation to our workshop, as well as installation and recommissioning following repair."},
      {title:"Electric Motor Rewind", word: "We specialise in complete electric motor rewinding and our engineers are capable of re-engineering and upgrading electric motors efficiency and reliability.\nAll motors are wound to Class F or higher thermal class, upgrading the insulation quality where beneficial to our HiFLEX coil design."},
  ]
  return (
    
    <section>
  <div className="grid items-center place-items-center justify-center lg:flex lg:justify-evenly lg:mb-10">
  <div className="mt-5 lg:mt-8 flex justify-center">
  <h1 className="text-2xl flex md:flex-col md:justify-center">
    What We Serve ? 
<span className='lg:flex lg:justify-center'><FaArrowRightLong className='hidden lg:inline-block'  /></span>
  </h1>
</div>
    {IntroSection.map((item, idx) => {
      return (
        <Crd key={idx} title={item.title} words={item.word} />
      );
    })}
  </div>
    </section>
  )
}
export default Intro;
