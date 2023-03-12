import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ComputerCanvas from "./Computers" 
import { useInView } from "react-intersection-observer";

function Land() {
  const { ref, inView } = useInView();
  const variantimage1 = {
      hidden: {
          
          scale: 1,
          x: 0,
        y: 0,
      },
      visible: {
         
          scale: 1,
          x: 0,
          y: 0,
        transition: {
          type: "spring",
          stiffness: 30,
          duration: 3,
        },
      },
      exit: {
          rotate: 90,
          scale: 1,
          x: "22vw",
          y: "120vh",
          transition: {
            type: "spring",
            stiffness: 30,
            duration: 1,
          },
        },
    };
  return (
    <div>
    <div className='bg-black text-white h-screen flex flex-row' style={{ position: 'relative' }}>
  <div className='w-1/2 p-6' style={{ position: 'absolute', top: '50%', left: 0 }}>
    <div className='ml-20 space-y-4 px-5' style={{ position: 'absolute', top: '30%', left: 0, transform: 'translateY(-50%)', zIndex: 1 }}>
      <h1 className='text-5xl font-serif font-bold' style={{ fontFamily: 'cursive' }}>Elevate Your Brand</h1>
      <p className='pr-10 text-zinc-400 font-serif font-light' style={{ fontFamily: 'cursive' }} >
        Our design agency specializes in creating visually stunning designs that captivate your audience and elevate your brand.
      </p>
      <button className='bg-zinc-100 text-black px-6 py-2 rounded-sm font-serif font-extralight hover:bg-zinc-900 hover:text-white transition-colors duration-300' style={{ fontFamily: 'cursive' }}>Buy Products</button>
    </div>
  </div>
  <div style={{ flex: 1 }}>
    <ComputerCanvas />
  </div>
  <div className='w-1/2 p-6' style={{ position: 'absolute', top: '50%', right: 0 }}>
    <div className='mr-4 space-y-4 px-5' style={{ position: 'absolute', top: '30%', right: 0, transform: 'translateY(-50%)', zIndex: 1 }}>
      <motion.div 
      initial="hidden" // use variants to define initial and animate properties
      animate={inView ? "exit": "visible"}
      variants={variantimage1}>                
      <h1 className='text-4xl font-serif font-bold' style={{ fontFamily: 'cursive' }}>Award-Winning Design Agency</h1>
     </motion.div>
     <p className='pr-10 text-zinc-400 font-serif font-light' style={{ fontFamily: 'cursive' }} >
     At our design agency, we understand that your brand is the heart of your business.     </p>
      <button className='bg-zinc-100 text-black px-6 py-2 rounded-sm font-serif font-extralight hover:bg-zinc-900 hover:text-white transition-colors duration-300' style={{ fontFamily: 'cursive' }}>About Us</button>
    </div>
  </div>
</div>
<div className='h-screen w-full bg-black my-10' style={{ display: 'flex' }}>
<div className='h-sceen w-1/2 flex flex-col justify-center items-center'>
  <div className='-ml-48 ' >
    <p className='text-white text-8xl transform  font-serif font-light' style={{ fontFamily: 'cursive' }} > About </p>
    <p className='text-white text-9xl transform -rotate-90  ml-20  font-serif font-light' style={{ fontFamily: 'cursive' }} >Us</p>
  </div>
  <div className='pl-20 z-10 flex flex-row items-center -mt-40'>
  <img className="z-20" width={400} height={300} src='./wide.webp' alt='Huge and Long' />
  <img src='./long.jpg' width={300} height={600} alt='Small and Wide' className='-ml-20' />
</div>
</div>
  <div className='flex-1 pr-64 flex-row items-center mt-20' ref={ref}>

    <p className='text-white text-zinc-400 font-serif font-light' style={{ fontFamily: 'cursive' }} >At our design agency, we understand that your brand is the heart of your business. That is why we prioritize getting to know you and your unique vision, goals, and values to create designs that truly reflect your brand and resonate with your target audience. Our team of talented designers, developers, and marketers work collaboratively with you to bring your brand to life through thoughtful and engaging designs that tell your story and connect with your customers.

We take pride in our ability to create designs that not only look great but also drive results. Whether you are looking to increase your online presence, improve your brand awareness, or boost your sales, our team has the experience and expertise to deliver exceptional designs that meet your specific needs and goals.

In addition to our design services, we are dedicated to providing exceptional customer service and support throughout the entire design process and beyond. We understand that communication and transparency are key to building strong, lasting relationships with our clients, and we work hard to keep you informed and involved every step of the way.
</p>
  </div>
</div>


</div>
  )
}

export default Land