"use client"

import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from '@/components/Header/ThemeToggle'
import { links } from '@/lib/Links'
import SigninButton from '../Auth/SignInButton'
import { useSession } from 'next-auth/react';
import MobileNav from './MobileNav'


const Navbar = () => {

    const { data: session } = useSession();
    const userIsAdmin = session?.user?.role === 'admin';

    return (
        <div className='flex justify-between w-full items-center h-24 '>
            <div className='flex flex-1 text-xl font-bold md:text-3xl lg:text-5xl lg:font-bold tracking-wide'>
                <Link href='/'>
                    Code<span className='text-purple-500'>Sequence</span>
                </Link>
            </div>
            <div className='flex items-center justify-end text-sm gap-4 flex-1 font-medium lg:text-lg sm:gap-4'>
                {links.map((link) => (
                    <Link
                        href={link.hash}
                        key={link.name}
                        className='hidden lg:flex capitalize cursor-pointer' >
                        <span className='navUnderlineHover'>
                            {link.name}
                        </span>
                    </Link>
                ))}
                {userIsAdmin && (
                    <Link href='/admin' className='hidden md:flex cursor-pointer'>
                        <span className='navUnderlineHover'>
                            Write
                        </span>
                    </Link>
                )}
                <Link href='https://sushil-personal-portfolio.vercel.app/' className='hidden lg:flex cursor-pointer' target='blank'>
                    <span className='navUnderlineHover'>
                        Portfolio
                    </span>
                </Link>
                <span className='hidden lg:flex'>
                    <SigninButton />
                </span>
                <MobileNav />
                <ThemeToggle />
            </div>
        </div>
    )
}

export default Navbar