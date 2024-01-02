import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import Link from '@tiptap/extension-link'
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Youtube from '@tiptap/extension-youtube'
import { createLowlight, common } from "lowlight";


export const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle,
    StarterKit,
    Link.configure({
        openOnClick: true,
    }),
    CodeBlockLowlight.configure({
        lowlight: createLowlight(common)
    }),
    Dropcursor,
    Image,
    Youtube.configure({
        controls: false,
    }),
];