'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Logo from '../public/logo.png';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import {useState} from "react"; // Hook For hamburger menu Onclick handle 


  
const navbar = () => {

   const [menuOpen, setMenuOpen] = useState(false)



   const handleNav = () => {
        setMenuOpen(!menuOpen)
   }


    return (
        <>
        <nav className="sticky-navbar w-full h-24">
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
                <Link href='/'>
                <Image
                    src={Logo}
                    alt="logo"
                    width="100"
                    height="75"
                    className="cursor-pointer"
                    priority
                />
                </Link>
            <div className="hidden sm:flex">
                <ul className='hidden sm:flex'>
                <Link href='/about'>
                        <li className='ml-10 uppercase hover:border-b text-xl'>
                            About
                        </li>
                    </Link>
                    <Link href='/booking'>
                        <li className='ml-10 uppercase hover:border-b text-xl'>
                            Booking
                        </li>
                    </Link>
                </ul>
            </div>
            <div onClick = {handleNav} className="sm:hidden cursor-pointer pl-24">
                <AiOutlineMenu size={25} />
            </div>
            </div>
            <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-50"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
             <div className='flex w-full items-center justify-end'>
             <div onClick = {handleNav} className="cursor-pointer">
                <AiOutlineClose size={25} />
            </div>
            </div>
            <div className="flex-col px-4">
            <ul>
            <Link href="/about">
            <li
            onClick={() => setMenuOpen(false)}
            className='py-4 cursor-pointer'
            >
                About
            </li>
            </Link>
            <Link href="/booking">
            <li
            onClick={() => setMenuOpen(false)}
            className='py-4 cursor-pointer'
            >
                Booking
            </li>
            </Link>
                </ul>
            </div>

            </div>
        </nav>
        </>
    )
}

export default navbar