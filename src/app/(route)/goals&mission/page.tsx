import React from 'react'

const page = () => {
  return (
    <section className= 'mt-24'>
   
    <div 
  className=" relative w-full py-36 bg-gradient-to-br from-red-300 via-transparent to-transparent"
  style={{
    backgroundImage: `linear-gradient(45deg, rgba(255, 50, 50, 0.8), transparent 40%), linear-gradient(-90deg, rgba(255, 50, 50, 0.8), transparent 20%)`,
    backgroundSize: `40px 40px`,
    backgroundRepeat: 'repeat'
  }}
><div className='relative inline-block h-2 w-full linear-gradient(45deg, rgba(255, 50, 50, 0.8), transparent 40%),'>
  <span className=" -mt-5 absolute flex justify-center text-7xl font-bold w-full shadow-orange-400  bg-[rgba(255, 50, 50, 0.8)]"><h1 className='tracking-widest'>Our Goals and Mission</h1></span>
  </div>
  </div>
   

    </section>
  )
}

export default page;