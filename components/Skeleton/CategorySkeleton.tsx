import React from 'react';

const CategorySkeleton = () => {
    return (
        <div className="group gap-4 bg-card border-2 shadow-xl max-w-sm rounded-lg col-span-12 md:col-span-6 lg:col-span-4 ">
            <div className='animate-pulse p-4 flex flex-col justify-center items-center gap-2'>
                <div className='w-full h-[280px] bg-gray-300 rounded-lg'></div>
                <div className='flex justify-start items-start'>
                    <span className='bg-gray-300 h-6 w-20 block rounded-md'></span>
                </div>
                <span className='w-1/2 h-1 bg-gray-300 mt-2 rounded-md'></span>
                <h2 className='w-3/4 h-6 bg-gray-300 rounded-md'></h2>
            </div>
        </div>
    );
};

export default CategorySkeleton;
