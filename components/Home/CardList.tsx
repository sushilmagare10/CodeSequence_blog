
import React from 'react'
import BlogCard from '../ui/card/BlogCard'
import Link from 'next/link'
import { Link as LucideLink } from 'lucide-react';
import { Post } from '@/utils/types';


const getData = async () => {
    try {
        const res = await fetch(
            `${process.env.BASE_URL}/api/posts`, {
            next: { revalidate: 60 }
        }
        );

        return res.json();
    } catch (err) {
        console.log(err)
    }
};


const CardList = async () => {

    const { posts } = await getData();

    const post = posts.slice(0, 2)

    return (
        <div className='flex-[5] '>
            <h1 className='text-4xl text-primary font-bold my-5 '>Recent Posts</h1>
            <div className=' flex flex-col gap-6 mt-10 '>
                {
                    post && post?.map((item: Post) =>
                        <BlogCard item={item} key={item.id} />
                    )
                }
            </div>
            <div className='flex mt-4 ml-6'>
                <Link href='/categories'>
                    <div className='flex items-center justify-center gap-2 cursor-pointer'>
                        <span className='navUnderlineHover flex font-bold mt-3'>
                            See All Articles
                        </span>
                        <LucideLink />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CardList
