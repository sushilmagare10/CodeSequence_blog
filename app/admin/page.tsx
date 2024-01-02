"use client"

import React, { useState } from 'react'
import { useSession } from "next-auth/react";
import { FileCheck, Video } from 'lucide-react'
import { redirect, useRouter } from 'next/navigation';
import TipTapEditor from '@/components/TextEditor/TipTapEditor';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


const CreateBlog = () => {

    const { data: session, status } = useSession();
    const isAdmin = session?.user?.role === "admin";
    const router = useRouter();

    const [content, setContent] = useState('')
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('')
    const [excerpt, setExcerpt] = useState('')
    const [catSlug, setCatSlug] = useState('')
    const [media, setMedia] = useState("");

    if (status === 'loading') {
        return <div className='loader'></div>;
    }
    if (!isAdmin) {
        redirect("/")
    }


    const slugify = (str: string) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                excerpt,
                desc: content,
                img: media,
                slug: slugify(title),
                catSlug: catSlug,
            }),
        });

        if (res.status === 200) {
            const data = await res.json();
            router.push(`/blogs/${data.slug}`);
        }
    };

    return (
        <div className=' relative flex flex-col gap-5'>
            <Input
                type='text'
                placeholder='Title'
                onChange={(e) => setTitle(e.target.value)}
                className='p-8 text-2xl '
            />
            <textarea
                placeholder='Excerpt'
                onChange={(e) => setExcerpt(e.target.value)}
                className='p-8 text-lg mt-3 bg-card border rounded-lg'
            />
            <select
                className="block py-3 px-4 w-[25%] text-base bg-card rounded-md border"
                onChange={(e) => setCatSlug(e.target.value)}
            >
                <option selected>Category</option>
                <option value="react">React</option>
                <option value="code-quality">Code Quality</option>
                <option value="user-experience">User Experience</option>
                <option value="development-tools">Development Tools</option>
            </select>

            {/* Editor */}
            <div className='flex gap-5 h-full relative'>
                <Button
                    onClick={() => setOpen(!open)}
                    className='rounded-full w-10 h-10'
                >
                    add
                </Button>
                {open && (
                    <div className='flex gap-5 bg-background absolute z-[999] w-full left-14'>
                        <CldUploadButton
                            onUpload={(result: any) => {
                                setMedia(result.info.public_id)
                            }}
                            uploadPreset="CodeSequence" />
                        <button className='addButton'>
                            <FileCheck className='text-primary' />
                        </button>
                        <button className='addButton'>
                            <Video className='text-primary' />
                        </button>
                    </div>
                )}

            </div>
            <div className='flex gap-5 h-full relative'>
                {media && (
                    <div className='relative w-full h-[40vh]'>
                        <CldImage
                            fill
                            src={media}
                            alt={title}
                        />
                    </div>
                )}

            </div>
            <TipTapEditor
                content={content}
                setContent={setContent}
                editable={true}
            />
            <button
                onClick={handleSubmit}
                className=' absolute top-[10px] right-3 py-3 px-4 border-none bg-primary text-white dark:bg-card cursor-pointer rounded-3xl'>
                Publish
            </button>
        </div>
    )
}

export default CreateBlog