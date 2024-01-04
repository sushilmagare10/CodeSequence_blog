import Link from 'next/link'
import React from 'react'
import { Instagram, Twitter, Linkedin } from 'lucide-react';


const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center mt-8 gap-3 md:gap-10 md:mt-16 bg-card w-full shadow-2xl rounded-lg py-10 md:px-[5rem] lg:px-[18rem]'>
            <div className='text-2xl md:text-4xl font-bold tracking-wide '>
                Code<span className='text-purple-500'>Seqeunce</span>
            </div>
            <div className='flex gap-y-6 gap-x-16 mt-2 '>
                <div className='flex flex-col justify-between items-start gap-2 text-md '>
                    <Link href='/' className='font-semibold tracking-wide '>
                        Home
                    </Link>
                    <Link href='/categories' className='font-semibold tracking-wide '>
                        Categories
                    </Link>
                    <Link href='/contact' className='font-semibold tracking-wide '>
                        Contact
                    </Link>
                    <Link href={`${process.env.BASE_URL}/sitemap.xml`} className='font-semibold tracking-wide '>
                        SiteMap.xml
                    </Link>
                </div>
                <div className='flex flex-col justify-start items-start gap-2 '>
                    <Link href='https://www.instagram.com/code_sequence_/' className=' flex gap-3 text-md justify-between items-center'>
                        <Instagram className=' bg-gradient-to-tr from-[#FFB600] via-[#FA3037] to-[#B504ED] rounded-md' size={26} strokeWidth={1} stroke='#FFF' />
                        <span className='font-semibold tracking-wide'>
                            Instagram
                        </span>
                    </Link>
                    <Link href='https://www.linkedin.com/in/sushil-magare/' className=' flex gap-3 text-md justify-center items-center'>
                        <Linkedin className='fill-blue-600' size={26} strokeWidth={0} />
                        <span className='font-semibold tracking-wide'>
                            Linkedin
                        </span>
                    </Link>
                    <Link href='https://twitter.com/Zeref_28' className=' flex gap-3 text-md justify-center items-center'>
                        <Twitter className='fill-blue-600' size={26} strokeWidth={0} />
                        <span className='font-semibold tracking-wide'>
                            Twitter
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer