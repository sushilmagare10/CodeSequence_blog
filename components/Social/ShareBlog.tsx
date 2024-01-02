"use client"

import React from 'react'
import {
    TwitterShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    XIcon,
    FacebookIcon,
    LinkedinIcon,
    WhatsappIcon
} from "react-share";

const ShareBlog = () => {

    // Get the URL and title of the current page dynamically
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const title =
        typeof document !== "undefined"
            ? document.title
            : "Check out this awesome content!";

    return (
        <div className=' sticky flex flex-col text-center  justify-center items-center gap-1 bg-card  mt-10 mb-10 px-3 py-4  rounded-lg shadow-2xl '>
            <h2 className='text-xl font-bold'>
                Share Blog
            </h2>
            <div className='flex  justify-center items-center gap-x-4 md:gap-x-10 text-4xl mt-5'>
                <FacebookShareButton url={shareUrl} >
                    <FacebookIcon size={40} className='shadow-md rounded-md  fill-blue-500 shadow-blue-800/40 hover:-translate-y-1 transition ease-linear duration-100' />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={title}>
                    <XIcon size={40} className='shadow-md rounded-md  fill-black/60 shadow-black/40 hover:-translate-y-1 transition ease-linear duration-100' />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl} title={title}>
                    <LinkedinIcon size={40} className='shadow-md rounded-md  fill-blue-500 shadow-blue-800/40 hover:-translate-y-1 transition ease-linear duration-100' />
                </LinkedinShareButton>
                <WhatsappShareButton url={shareUrl} title={title}>
                    <WhatsappIcon size={40} className='shadow-md rounded-md  fill-green-500 shadow-green-800/40 hover:-translate-y-1 transition ease-linear duration-100' />
                </WhatsappShareButton>
            </div>
        </div>
    )
}

export default ShareBlog