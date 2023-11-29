```tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import Logo from '../public/logo.png'

const navbar = () => {
    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
                <Link href='/'>
                <Image
                    src={Logo}
                    alt="logo"
                    width="105"
                    height="75"
                    className="cursor-pointer"
                    priority
                />
                </Link>
                    <div>right side</div>

            <div>
                <ul className='hidden sm:flex'>
                    <Link href='/pages/about'>
                        <li className='ml-10 uppercase hover:border-b text-xl'>
                            About
                        </li>
                    </Link>
                    <Link href='/pages/booking'>
                        <li className='ml-10 uppercase hover:border-b text-xl'>
                            Booking
                        </li>
                    </Link>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default navbar
    
    ```


                    <Image
                    src={Logo}
                    alt="logo"
                    width="105"
                    height="75"
                    className="cursor-pointer"
                    priority
                />