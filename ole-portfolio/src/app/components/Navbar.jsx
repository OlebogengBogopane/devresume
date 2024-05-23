"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'

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
    const [navbarOpen,setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#6aab7e] bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
            <Link href={"/"} className=''>
                 
                    <img className='sm:h-20 ' src="/images/logo.png" alt="logo"
                    width={200}
                    height={200}
                     />
                 </Link>
                 <div className='mobile-menu block md:hidden'>
                    {!navbarOpen ? (
                    <button 
                    onClick={()=> setNavbarOpen(true)}
                    className='text-slate-200 flex items-center px-2 py-2 border rounded border-slate-200 hover:bg-slate-500'>
                        <img src='/images/burger-men.png' alt='menu' className='w-5 h-5' />
                        </button>
                    ):(
                        <button 
                        onClick={()=> setNavbarOpen(false)}
                        className='text-slate-200 flex items-center px-2 py-2 border rounded border-slate-200 hover:bg-slate-800'>
                        <img src='/images/close-men.png' alt='menu' className='w-5 h-5' />
                        </button>
                    )
                    }
                 </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
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
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  );
};

export default Navbar;