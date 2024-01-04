import React from 'react'
import SidebarCard from '../ui/card/SidebarCard'

const getData = async () => {
    const res = await fetch(
        `${process.env.BASE_URL}/api/posts`,
        {
            cache: "no-store",
        }
    );
    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

const HomeSidebar = async () => {

    const { posts } = await getData()
    const sortByViews = [...posts].sort((a, b) => b.views - a.views).slice(0, 3)

    return (
        <section className='flex flex-col flex-[2] mt-8 lg:mt-24 mb-6 h-max w-full py-3 rounded-md items-center justify-center sticky top-32 bg-card shadow-2xl'>
            <div className='flex items-center  justify-start '>
                <h2 className='text-lg text-primary dark:text-white uppercase font-semibold tracking-wide'>
                    Most Viewed Posts
                </h2>
                <span className='ml-2 h-1 w-3 bg-primary dark:bg-white'></span>
            </div>
            <div className='flex flex-col w-full items-center justify-center '>
                {
                    sortByViews.map((post) => (
                        <SidebarCard post={post} key={post.id} />
                    ))
                }
            </div>
        </section>
    )
}

export default HomeSidebar