import Image from 'next/image';
import Link from 'next/link';

const PostList = async ({ post }: any) => {
    const cloudinaryURL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_100/${post.img}`;
    return (

        <div className="group gap-4 bg-card shadow-2xl max-w-sm h-max hover:shadow-md transition-shadow-lg duration-500 rounded-lg  col-span-12 md:col-span-6 lg:col-span-4 ">
            <Link href={`/blogs/${post.slug}`}>
                <div className='max-w-sm p-4 flex flex-col justify-center  items-baseline gap-3 cursor-pointer'>
                    <div className='relative w-full h-[280px]'>
                        <Image src={cloudinaryURL} alt={post.title} fill className=' rounded-lg  ' />
                    </div>
                    <div className='flex justify-start items-baseline '>
                        <span className='flex justify-start items-center text-xs font-semibold px-4 py-1 mt-1 border-2 bgCategory'>
                            {post.catSlug}
                        </span>
                    </div>
                    <h2 className='text-lg md:text-xl font-semibold tracking-wide'>
                        <span className='bg-gradient-to-r from-purple-600 to-blue-600 bg-[length:0px_3px] group-hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 mt-1'>
                            {post.title}
                        </span>
                    </h2>
                </div>
            </Link>
        </div>
    );
};

export default PostList;
