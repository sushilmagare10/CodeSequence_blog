import AboutCover from '@/components/About/AboutCover'
import Skills from '@/components/About/Skills'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'About'
}

const About = () => {
    return (
        <div className='flex flex-col justify-center items-center px-10'>
            <AboutCover />
            <Skills />
        </div>
    )
}

export default About