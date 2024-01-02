import React, { useCallback, useEffect } from 'react'
import {
    Bold,
    X,
    Italic,
    ListOrdered,
    List,
    Undo2,
    Strikethrough,
    Redo2,
    Link2,
    PaintBucket,
    Pilcrow,
    Code,
    ChevronRightSquare,
    MessageSquareQuote,
    Image as ImageIcon,
    AlignVerticalSpaceAround,
    LogIn,
    Youtube
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const EditorMenuBar = ({ editor }: any) => {
    //Set Colors to text
    const setColor = useCallback((color: string) => {
        if (color) {
            editor.chain().focus().setColor(color).run();
        } else {
            editor.chain().focus().unsetColor().run();
        }
    }, [editor]);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedColor = event.target.value;
        setColor(selectedColor);
    };

    const colorOptions = [
        { label: 'Purple', value: '#958DF1' },
        { label: 'Red', value: '#F98181' },
        { label: 'Orange', value: '#FBBC88' },
        { label: 'Yellow', value: '#FAF594' },
        { label: 'Blue', value: '#70CFF8' },
        { label: 'Teal', value: '#94FADB' },
        { label: 'Green', value: '#B9F18D' },
    ];


    //Link
    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)
        // cancelled
        if (url === null) {
            return
        }
        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink()
                .run()
            return
        }
        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url })
            .run()
    }, [editor])


    // Image
    const addImage = useCallback(() => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])

    //videp
    const widthRef = React.useRef<HTMLInputElement | null>(null);
    const heightRef = React.useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (widthRef.current && heightRef.current) {
            widthRef.current.value = '640'
            heightRef.current.value = '480'
        }
    }, [])

    if (!editor) {
        return null
    }

    const addYoutubeVideo = () => {
        const url = prompt('Enter YouTube URL');
        if (url && widthRef.current && heightRef.current) {
            const width = Math.max(320, parseInt(widthRef.current.value, 10)) || 640;
            const height = Math.max(180, parseInt(heightRef.current.value, 10)) || 480;
            editor.commands.setYoutubeVideo({ src: url, width, height });
        }
    };


    if (!editor) {
        return null;
    }

    return (
        <div className="border border-purple-500 rounded-lg p-5 sticky top-3 left-0 right-0 bg-card z-10 flex justify-between gap-0.5 flex-wrap">
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`editor-btn font-black ${editor.isActive("heading", { level: 1 }) && "active-editor-btn"
                    }`}
            >
                H1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`editor-btn font-extrabold ${editor.isActive("heading", { level: 2 }) && "active-editor-btn"
                    }`}
            >
                H2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`editor-btn font-semibold ${editor.isActive("heading", { level: 3 }) && "active-editor-btn"
                    }`}
            >
                H3
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={`editor-btn font-medium ${editor.isActive("heading", { level: 4 }) && "active-editor-btn"
                    }`}
            >
                H4
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={`editor-btn font-normal ${editor.isActive("heading", { level: 5 }) && "active-editor-btn"
                    }`}
            >
                H5
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={`editor-btn font-normal ${editor.isActive("heading", { level: 6 }) && "active-editor-btn"
                    }`}
            >
                H6
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`editor-btn ${editor.isActive("bold") && "active-editor-btn"
                    }`}
            >
                <Bold />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`editor-btn ${editor.isActive("italic") && "active-editor-btn"
                    }`}
            >
                <Italic />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={`editor-btn ${editor.isActive("strike") && "active-editor-btn"
                    }`}
            >
                <Strikethrough />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={`editor-btn ${editor.isActive("code") && "active-editor-btn"
                    }`}
            >
                <Code />
            </button>
            <button
                onClick={setLink}
                className={`editor-btn ${editor.isActive('link') && "active-editor-btn"}`}>
                <Link2 />
            </button>
            <button
                onClick={() => editor.chain().focus().unsetAllMarks().run()}
                className={`editor-btn`}
            >
                <X />
            </button>
            <button
                onClick={() => editor.chain().focus().clearNodes().run()}
                className={`editor-btn`}
            >
                <X />
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`editor-btn ${editor.isActive("paragraph") && "active-editor-btn"
                    }`}
            >
                <Pilcrow />
            </button>

            <button onClick={addImage} className='editor-btn'><ImageIcon /></button>

            <button id="add" onClick={addYoutubeVideo}><Youtube /></button>

            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`editor-btn ${editor.isActive("bulletList") && "active-editor-btn"
                    }`}
            >
                <List />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`editor-btn ${editor.isActive("orderedList") && "active-editor-btn"
                    }`}
            >
                <ListOrdered />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={`editor-btn ${editor.isActive("codeBlock") && "active-editor-btn"
                    }`}
            >
                <ChevronRightSquare />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`editor-btn ${editor.isActive("blockquote") && "active-editor-btn"
                    }`}
            >
                <MessageSquareQuote />
            </button>
            <button
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className={`editor-btn`}
            >
                <AlignVerticalSpaceAround />
            </button>
            <button
                onClick={() => editor.chain().focus().setHardBreak().run()}
                className={`editor-btn`}
            >
                <LogIn />
            </button>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
                className={`editor-btn`}
            >
                <Undo2 />
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
                className={`editor-btn`}
            >
                <Redo2 />
            </button>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <PaintBucket />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='grid grid-cols-4 col-span-4 w-[250px] h-max p-4 gap-3 '>
                    {colorOptions.map((option, index) =>
                        <button
                            className='flex justify-between items-center rounded-md gap-5 border w-[90%] h-10'
                            key={index}
                            value={option.value}
                            style={{
                                backgroundColor: option.value,
                            }}
                            onClick={() => handleColorChange({ target: { value: option.value } } as React.ChangeEvent<HTMLInputElement>)}
                        />
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default EditorMenuBar;