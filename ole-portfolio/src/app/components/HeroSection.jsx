"use client";
import React from 'react';
import Image from 'next/image';
import {TypeAnimation} from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className=' mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-green-300'>Hi,I'm{""} 
                    </span>
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
         ' Olebogeng Bogopane',
        5000, 
        ' a Software Developer',
        5000,
        ' a Creative',
        5000,
        ' a UI/UX Designer',
        5000
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
                    </h1>
                <p className='text-base  sm:text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut nulla consequatur numquam odit, quia quibusdam. Harum culpa, debitis, quis autem, voluptates necessitatibus nostrum minus soluta a fugiat dicta et.
                </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#35945c]  hover:bg-slate-700 text-black'>Hire me</button>
                       
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:text-green-300 border border-green-300 mt-3'>Download CV</button>
                    </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
               <div className='rounded-full bg-[#316c513e] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>

                <Image
               src="/images/hero.png"
               alt='hero'
             className='absolute transform -translate-x-1\2 -translate-y-2'
               width={300}
               height={300}
                />
               </div>
            </div>
        </div>
    </section>

    
  )
}

export default HeroSection