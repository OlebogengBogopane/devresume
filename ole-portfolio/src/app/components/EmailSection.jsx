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

              <Link href="">
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
            <form className="text-green-700 flex flex-col gap-4 ">
              <label htmlFor="email" className='font-bold'>
                Type email here
                </label>
                <input type="email" 
                id='email'
                required 
                placeholder='BAHero@mail.com'/>
            </form>
        </div>
    </section>
  )
}

export default EmailSection