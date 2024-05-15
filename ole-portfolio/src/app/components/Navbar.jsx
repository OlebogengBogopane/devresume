import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link href={"/"} className=''>
                 
                    <img src="/images/logo.png" alt="logo"
                    width={200}
                    height={200}
                     />
                 
                 </Link>
            <div className='menu'></div>
        </div>
    </nav>
  )
}

export default Navbar