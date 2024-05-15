import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center'>
                <h1 className='mb-4 text-4xl lg:text-6xl font-extrabold'>Osum portfolio</h1>
                <p className='text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut nulla consequatur numquam odit, quia quibusdam. Harum culpa, debitis, quis autem, voluptates necessitatibus nostrum minus soluta a fugiat dicta et.
                </p>
                    <div>
                        <button className='bg-[#35945c]'>Hire me</button>
                        <button className=''>Download CV</button>
                    </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
               <div className='rounded-full bg-[#212020] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>

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