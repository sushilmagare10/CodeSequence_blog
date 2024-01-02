"use client"

import React from 'react';
import { EditorContent, useEditor } from "@tiptap/react";
import "highlight.js/styles/atom-one-dark.css";
import EditorMenuBar from "./EditorMenuBar";
import { extensions } from "@/components/TextEditor/Extensions";

type EditorType = {
    content: string,
    editable: boolean,
    setContent: (content: string) => void
}

const TipTapEditor: React.FC<EditorType> = React.memo(({ content, editable, setContent }) => {

    const editor = useEditor({
        editable,
        extensions: React.useMemo(() => extensions, []),
        editorProps: {
            attributes: {
                class: "prose  dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
            },
        },
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            setContent(html);
        },
        content: content,
    });

    return (
        <div className="w-full relative">
            {editable && <EditorMenuBar editor={editor} />}
            <EditorContent editor={editor} className="w-full h-full py-5" />
        </div>
    );
});

TipTapEditor.displayName = 'TipTapEditor';

export default TipTapEditor;
