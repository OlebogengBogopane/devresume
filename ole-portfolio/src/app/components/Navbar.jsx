import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const navLinks = [
    {
     title: "About",
     path:"#about"   
    },
    {
      title:"Projects",
      path:"#projects"
    },
    {
        title:"Contact",
        path:"#contact"
    }
]

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#6aab7e4f] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
            <Link href={"/"} className=''>
                 
                    <img className='sm:h-20 ' src="/images/logo.png" alt="logo"
                    width={200}
                    height={200}
                     />
                 </Link>
            <div className='menu  md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {
                    navLinks.map((link, index) => (
                        <li ke={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar