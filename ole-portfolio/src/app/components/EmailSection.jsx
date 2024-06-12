import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold my-2'>Let's Connect</h5>
            <p className='text-[#43eb78] mb-4 max-w-md'>{""}looking forward to networking and discussing further how we can connect
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/OlebogengBogopane">
                    <Image   className='w-10 h-10  text-[#54ac71]   cursor-pointer group-hover/link hover:text-white'
                                src="/images/github-icon.png"
                                alt='view'
                                width={40}
                                height={40}
                                />
                     </Link>
                   </div>

            <div className='mb-6 '>
              <Link href="www.linkedin.com/in/olebogengbogopane-649a63ab/">
                     <Image 
                        className='w-10 h-10  text-[#54ac71]   cursor-pointer group-hover/link hover:text-white'
                        src="/images/Linkedin.png"
                        alt='view'
                        width={40}
                        height={40}
                        />
               </Link>              
                      
            </div>
        </div>
        <div>
            <form className="text-green-600 flex flex-col gap-1  "> 
                <div className='mb-6'>
                    <label
                    htmlFor="email" className='font-bold block mb-2  text-sm '
                    >
                        Type email here
                        </label>
                        <input type="email" 
                        id='email'
                        required 
                        className='bg-[#68b06861] text-white border border-[#b4f3c911] text-sm rounded-lg block w-full p-2.5'
                        placeholder='BAHero@mail.com'
                        />

                        <label
                    htmlFor="subject" className='font-bold block mb-2 text-sm '
                    >
                        Subject
                        </label>
                        <input type="text" 
                        id='subject'
                        required 
                        className='bg-[#68b06861] text-white border border-[#b4f3c911] text-sm rounded-lg block w-full p-2.5'
                        placeholder='Input text here'
                        />
                </div>
                <div className='mb-6'>
                    <label
                     htmlFor="message"
                     className='block text-sm mb-2 font-bold'
                     >Message
                     </label>
                     <textarea
                      name="message"
                      id="message"
                      className='bg-[#68b06861] text-white border border-[#b4f3c911] text-sm rounded-lg block w-full p-2.5'
                     placeholder='Type your message here'
                      > </textarea>
                </div>
                <button
                ></button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection