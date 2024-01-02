import React from 'react'
import { InstagramIcon, GithubIcon } from 'lucide-react';
import {
    XIcon,
    LinkedinIcon,
} from "react-share";
import Link from 'next/link';

const Author = () => {
    return (
        <div className='flex flex-col text-center lg:flex-row justify-center items-center gap-4 bg-card  mt-10 px-16 py-8 rounded-lg shadow-xl '>
            <div className='flex-col justify-start items-center gap-6'>
                <div className='flex flex-col gap-2'>
                    <span className='text-sm tracking-wide font-light'>WRITEEN BY</span>
                    <span className='text-lg font-bold '>Sushil Magare</span>
                </div>
                <div className='text-sm md:text-base text-gray-500 tracking-wide mt-3 md:mt-5'>
                    Hey, I&apos;m Sushil, a passionate web developer hailing from India. I specialize in creating engaging online experiences, leveraging my skills to craft dynamic websites.</div>
                <div className='flex justify-center items-center text-7xl gap-x-6 mt-5'>
                    <Link href='https://www.instagram.com/code_sequence_/'>
                        <InstagramIcon size={38} strokeWidth={1} stroke='#FFF' className=' shadow-md bg-gradient-to-tr from-[#FFB600] via-[#FA3037] to-[#B504ED] rounded-md hover:-translate-y-1 transition ease-linear duration-100' />
                    </Link>
                    <Link href='https://www.linkedin.com/in/sushil-magare/'>
                        <LinkedinIcon size={35} strokeWidth={0} className='shadow-md rounded-md fill-blue-500 hover:-translate-y-1 transition ease-linear duration-100' />
                    </Link>
                    <Link href='https://github.com/sushilmagare10'>
                        <GithubIcon size={38} strokeWidth={1} className=' shadow-md shadow-black/30 rounded-md hover:-translate-y-1 transition ease-linear duration-100' />
                    </Link>
                    <Link href="https://twitter.com/Zeref_28">
                        <XIcon size={35} strokeWidth={0} className='shadow-md rounded-md fill-blue-500  hover:-translate-y-1 transition ease-linear duration-100' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Author