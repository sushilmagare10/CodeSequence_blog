import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { Post } from '@/utils/types';

const getData = async () => {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/posts`);
        return response.json();

    } catch (error) {
        console.log(error)
    }
}

const Hero = async () => {

    const data = await getData();
    const posts = data.posts;
    const randomPost: Post = posts[Math.floor(Math.random() * posts.length)];

    if (!randomPost) {
        return <div className='custom-loader' />;
    }

    const cloudinaryURL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_100/${randomPost.img}`;

    return (
        <div className='flex justify-center shadow-xl h-[50vh] lg:h-[65vh] w-full mt-10  rounded-md'>
            <div className='flex flex-col md:flex md:flex-row w-full justify-between items-center  gap-4 rounded-lg'>
                <div className=' w-full h-[75vh] md:h-full relative shadow-2xl rounded-lg '>
                    {randomPost?.img && (
                        <Image
                            fill
                            src={cloudinaryURL}
                            alt={randomPost?.title}
                            className='rounded-lg drop-shadow-md' />
                    )}
                    <div className='flex flex-col absolute z-40 justify-center items-center cursor-pointer px-8 py-6 md:px-16 md:py-12 bg-card rounded-md left-2 bottom-3 md:left-4 md:bottom-5 lg:left-10 lg:bottom-16 w-[95%] md:w-9/12 lg:w-[50%] shadow-2xl'>
                        <div className='group flex flex-col gap-3 lg:gap-6 transition duration-300 '>
                            <span className=' flex justify-center items-center py-1 text-sm px-4 rounded-sm shadow-xl bgCategory w-max  capitalize font-semibold'>
                                {randomPost?.catSlug}
                            </span>
                            <Link href={`/blogs/${randomPost?.slug}`}>
                                <h1
                                    className='text-base sm:text-2xl md:text-3xl lg:text-4xl text-primary tracking-wide leading-5 font-bold group-hover:text-gradient-to-r from-purple-500 to-pink-500 '>
                                    <span
                                        className='bg-gradient-to-r from-purple-600 to-blue-600 
                                    bg-[length:0px_6px]
                                    group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 mt-1'>
                                        {randomPost?.title}
                                    </span>
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hero