import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className=''>
        <div className=' md:grid  md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/matrix-log.gif' alt='about' width={500} height={500}/>
            <div>
                <h2 className='text-4xl font-bold mb-4 '>About Me</h2>
                <p className='md:text-lg'> I am a Software developer graduate from CodeSpace academy with 1year experience ,learning html,css and javascript alongside javscript frameworks(React & NextJs). throughout the program I learned how to work in an Agile environment and deliver seamingless and up to par web applications.I work very well in teams and always look forward to gaining new skills and creative innovative applications for my community and the world at large
                </p>
                <div className='flex flex-row mt-8 '>
                    <span className='mr-3 font-semibold mt-bold '>Skills</span>
                    <span className=''>Education</span>
                    <span className=''>Experience</span>
                </div>
            </div>
           
            
        </div>
    </section>
  )
}

export default AboutSection