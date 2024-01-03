import BlogSideBar from '@/components/SideBar/BlogSidebar'
import { Eye } from 'lucide-react';
import Author from '@/components/Social/Author';
import Image from 'next/image';
import { Metadata } from 'next';
import { Post } from '@/utils/types';
import { notFound } from 'next/navigation';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import ReactHtmlParser from 'react-html-parser';


type Params = {
    slug: string;
}

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    try {
        const { slug } = params;
        const response = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`);
        const blog: Post = await response.json();

        const OgURL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_100/${blog.img}`

        return {
            title: blog.title,
            description: blog.excerpt,
            metadataBase: new URL(`${process.env.BASE_URL}`),
            alternates: {
                canonical: '/',
                languages: {
                    'en-US': '/en-US',
                    'de-DE': '/de-DE',
                },
            }, openGraph: {
                images: [{ url: OgURL }]
            }
        };
    } catch (error) {
        console.error("Error fetching metadata:", error);
        throw new Error("Error fetching metadata");
    }
}

const getData = async (slug: string) => {

    const res = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`,
        {
            next: { revalidate: 10 }
        });

    if (res.status === 404) {
        return notFound()
    }
    return res.json();
};

const renderHTMLWithCodeHighlighting = (content: string) => {
    const parsedContent = ReactHtmlParser(content, {
        transform: (node, index) => {
            if (node.type === 'tag' && node.name === 'code') {
                return (
                    <SyntaxHighlighter
                        key={index}
                        language="javascript"
                        style={atomOneDark}
                        wrapLines={true}
                        wrapLongLines={true}
                        useInlineStyles
                    >
                        {node.children[0]?.data}
                    </SyntaxHighlighter>
                );
            }
            return undefined;
        },
    });

    return parsedContent;
};


const SingleBlogPost = async ({ params }: any) => {

    const { slug } = params;
    const data: Post = await getData(slug);
    const cloudinaryURL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_100/${data.img}`;

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dateObject = new Date(data.createdAt);
    const month = monthNames[dateObject.getMonth()];
    const date = dateObject.getDate();
    const year = dateObject.getFullYear();
    const formattedDate = `${month} ${date}, ${year}`;

    return (
        <div className='flex flex-col justify-center md:items-center '>
            <div className=' flex flex-col justify-between items-center text-center mt-16 mb-10'>
                <title className='text-xl md:text-5xl lg:text-7xl font-bold tracking-wider '>
                    {data.title}
                </title>

            </div>
            {data?.img && (
                <div className='relative w-full h-[25vh] md:h-[60vh] px-2 md:px-10 shadow-2xl rounded-lg '>
                    <Image
                        fill
                        src={cloudinaryURL}
                        alt={data.title}
                        quality={100}
                        sizes='(max-width: 520px) 100vw,
                                (max-width: 768px) 85vw,
                                (max-width: 1060px) 75vw,
                                60vw'
                        className='w-full h-full rounded-lg object-cover'
                    />
                </div>
            )}
            <div className='relative w-full rounded-lg p-3 text-sm md:text-xl text-white font-bold my-8'>
                <div className='absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 filter blur-[2px] opacity-70'></div>
                <div className='relative z-10 flex justify-around items-center gap-10'>
                    <div className='flex justify-center items-center'>
                        {formattedDate}
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        {data.views}
                        <span><Eye className="text-xl md:text-4xl" /></span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row mt-2 md:mt-5 gap-8 bg-forebackground p-4 rounded-lg'>
                <div className='flex-[5] text-lg mt-10 tracking-wide '>
                    {data && (
                        <div className='w-full flex flex-col items-start customBlogDesc gap-3 overflow-x-hidden'>
                            {data.desc && renderHTMLWithCodeHighlighting(data.desc)}
                        </div>
                    )}
                    <Author />
                </div>
                <div className='flex-[2]'>
                    <BlogSideBar category={data.catSlug} postId={data.id} />
                </div>
            </div>
        </div>
    )
}

export default SingleBlogPost

