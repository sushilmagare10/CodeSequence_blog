import Image from 'next/image';
import Link from 'next/link'

const SidebarCard = ({ post }: any) => {
    const cloudinaryURL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_100/${post?.img}`;
    return (
        <>
            <div
                className='flex flex-col items-center gap-3 px-4 py-6 md:px-6 lg:py-3 lg:px-5 mt-5 cursor-pointer w-full  lg:w-full rounded-lg'>
                <Link href={`/blogs/${post?.slug}`} className='w-full' >
                    <div className='group flex flex-col lg:flex-row  gap-4  w-full justify-center items-center '>
                        <div className='flex relative h-[180px] w-full md:h-[280px] lg:h-[90px]  lg:w-[110px] items-center  drop-shadow-2xl rounded-lg overflow-hidden'>
                            <Image
                                fill
                                src={cloudinaryURL}
                                alt={post?.title}
                                className=' border-[1.5px] rounded-lg object-center'
                            />
                        </div>
                        <div className='flex-[2] w-full flex-col '>
                            <div className=' relative '>
                                <h2 className=' text-xs text-primary font-semibold md:font-bold'>
                                    <span
                                        className='bg-gradient-to-r from-purple-600 to-blue-400 
                                bg-[length:0px_3px]
                                group-hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 mt-1'>
                                        {post.title && post.title.length > 100 ? `${post.title.slice(0, 100)}...` : post.title}                                    </span>
                                </h2>
                                <div className='mt-4 w-full flex flex-wrap gap-y-2 justify-between items-center capitalize font-semibold'>
                                    <span className='text-[9px] bgCategory px-3 py-1'>{post?.catSlug}</span>
                                    <span className='text-[9px] bgCategory px-3 py-1'>Views {post?.views}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default SidebarCard