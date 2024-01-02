import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const BlogCard = ({ item }: any) => {

    const cloudinaryURL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_100/${item.img}`;

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dateObject = new Date(item.createdAt);
    const month = monthNames[dateObject.getMonth()];
    const date = dateObject.getDate();
    const year = dateObject.getFullYear();
    const formattedDate = `${month} ${date}, ${year}`;
    return (
        <div
            className='group flex flex-col lg:flex lg:flex-row p-4 gap-3 cursor-pointer bg-card rounded-lg shadow-2xl '>
            {item.img && (
                <div className='lg:flex-1 h-[200px] md:h-[270px] w-full relative rounded-lg  overflow-hidden'>
                    <Image
                        fill
                        src={cloudinaryURL}
                        alt={item?.title}
                        className='rounded-lg drop-shadow-md' />
                </div>
            )}
            <div className='lg:flex-1 flex-col '>
                <div className='flex items-center justify-start gap-3 p-4'>
                    <p className='text-sm font-semibold text-primary '>{formattedDate}</p>
                    <span className=' border h-3  border-primary'></span>
                    <p className='text-xs font-semibold px-3 py-1 sm:px-4 bgCategory'>{item?.catSlug}</p>
                </div>
                <Link href={`/blogs/${item?.slug}`}>
                    <div className=' p-4'>
                        <h2 className='text-lg md:text-2xl lg:text-2xl font-bold '>
                            <span
                                className='bg-gradient-to-r from-purple-600 to-blue-400 
                        bg-[length:0px_3px]
                        group-hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 mt-1'>
                                {item?.title}
                            </span>
                        </h2>
                        <p className='text-xs sm:text-sm tracking-wide text-gray-600 mt-6'>
                            {item.excerpt.slice(0, 130) + '...'}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BlogCard