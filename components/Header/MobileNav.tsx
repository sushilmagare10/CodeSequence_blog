"use client"

import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { links } from '@/lib/Links'
import SigninButton from '../Auth/SignInButton'
import { useSession } from 'next-auth/react';
import Link from "next/link";

const MobileNav = () => {

    const [open, setOpen] = useState(false);
    const { data: session } = useSession();
    const userIsAdmin = session?.user?.role === 'admin';

    return (
        <>
            <div className='lg:hidden' onClick={() => setOpen(!open)}>
                <HiMenu className='text-2xl' />
            </div>
            <div
                className={`absolute top-24 left-0 bg-background h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center gap-12 text-2xl z-[999]  ${open ? 'transition-all ease-in-out duration-500 pointer-events-auto' : 'transition-all ease-in-out duration-500 opacity-0 pointer-events-none'}`}
            >
                {links.map((link) => (
                    <Link href={link.hash} key={link.name} className='capitalize'>
                        <span className='navUnderlineHover'>{link.name}</span>
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
                <SigninButton/>
            </div>
        </>
    );
};

export default MobileNav;
