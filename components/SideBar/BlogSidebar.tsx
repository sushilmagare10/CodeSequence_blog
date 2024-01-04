
import SidebarCard from '../ui/card/SidebarCard'
import ShareBlog from '../Social/ShareBlog'
import axios from 'axios'
import { Post } from '@/utils/types'

type SideBarProps = {
    category: string,
    postId: any
}

const getData = async (category: string) => {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/posts?cat=${category}`);
        return response.json();

    } catch (error) {
        console.log(error)
        return { posts: [] };
    }
}

const BlogSideBar = async ({ category, postId }: SideBarProps) => {
    let posts = [].slice(0, 3);
    try {
        const { posts: relatedPosts } = await getData(category);

        if (relatedPosts.length > 0) {
            // Filter out the current post from related posts
            posts = relatedPosts.filter((post: Post) => post.id !== postId);
        }
    } catch (error) {
        console.error(error);
    }
    // Fetch all posts if no related posts found
    if (posts.length === 0) {
        try {
            const allPostsResponse = await axios.get(`${process.env.BASE_URL}/api/posts`);
            posts = allPostsResponse.data.posts.slice(0, 4);
            posts = posts.filter((post: Post) => post.id !== postId);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <section className=' sticky top-32 z-40'>
            <div className='flex flex-col flex-[2] lg:mt-[50px] mb-6 py-3 h-max w-full items-center justify-center rounded-md shadow-2xl bg-card '>
                <div className='flex items-center  justify-start '>
                    <h2 className='text-lg text-primary uppercase font-semibold tracking-wide'>
                        Related Posts
                    </h2>
                    <span className='ml-2 h-1 w-8 bg-primary'></span>
                </div>
                <div className='flex-col w-[95%] items-center justify-center '>
                    {
                        posts.slice(0, 3).map((post: Post) => (
                            <SidebarCard post={post} key={post.id} />
                        ))
                    }
                </div>
            </div>
            <ShareBlog />

        </section>
    )
}

export default BlogSideBar