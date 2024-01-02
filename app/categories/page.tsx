"use client"

import axios from 'axios';
import React, { Suspense, useMemo, useState } from 'react';
import useSWR from 'swr';
import CategorySkeleton from '@/components/Skeleton/CategorySkeleton';
import PostList from '@/components/ui/list/PostList';
import { Post, PostsResponse } from '@/utils/types';


const fetcher = async (url: string) => {
    const response = await axios.get<PostsResponse>(url);
    return response.data;
};

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const { data: postByCategory } = useSWR<PostsResponse>(
        selectedCategory ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?cat=${selectedCategory}` : null,
        fetcher
    );
    const { data: allPosts } = useSWR<PostsResponse>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, fetcher);

    const categories: string[] = [
        "react",
        "code-quality",
        "development-tools",
        "user-experience"
    ];

    const generatePostList = useMemo(() => {
        const postsToRender = selectedCategory ? postByCategory?.posts : allPosts?.posts;
        return postsToRender?.map((post: Post) => (
            <PostList key={post.id} post={post} />
        )) || Array.from({ length: 8 }, (_, index) => <CategorySkeleton key={index} />);
    }, [selectedCategory, postByCategory, allPosts]);

    const handleShowAll = () => {
        setSelectedCategory(null);
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div className='flex flex-col justify-center gap-10 mt-10 mx-auto '>
            <h2 className='text-3xl font-bold tracking-wider'>Categories</h2>
            <div className='flex flex-col md:flex-row gap-4 w-full'>
                <button
                    className={`flex justify-center items-center gap-4 border-2 text-xl font-medium shadow-xl bg-card py-3 px-6 rounded-lg cursor-pointer hover:shadow-sm hover:scale-105 transition-shadow duration-500 capitalize
            ${selectedCategory === null ? 'text-purple-500 boder-2 border-purple-500' : ''}`}
                    onClick={handleShowAll}>All</button>
                {categories.map((text, index) => (
                    <button
                        key={index}
                        className={`flex overflow-hidden justify-center items-center gap-4 border-2 text-xl font-medium shadow-xl bg-card py-3 px-6 rounded-lg cursor-pointer hover:shadow-sm hover:scale-105 transition-shadow duration-500 capitalize
              ${selectedCategory === text ? 'text-purple-500 boder-2 border-purple-500' : ''}`}
                        onClick={() => handleCategoryClick(text)}
                    >
                        {text}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-12 gap-y-6 gap-x-4 lg:gap-x-8 lg:gap-y-12'>
                {generatePostList}
            </div>
        </div>
    );
};

const CategoriesWithSuspense = () => (
    <Suspense fallback={<CategorySkeleton />}>
        <Categories />
    </Suspense>
);

export default CategoriesWithSuspense;