import React from 'react'
import Image from 'next/image'
import ReactIcon from './images/react.png'

const AboutCover = () => {
    return (
        <section className="flex rounded-md mt-16 gap-8">
            <div className='flex flex-col md:flex-row gap-5 justify-center items-center h-full w-full'>
                <div className="flex-1">
                    <h2 className="text-4xl font-semibold mb-4 tracking-widest">About Me</h2>
                    <p className="text-gray-500 tracking-wide mt-1">
                        As a recent <span className="font-bold">Information Technology</span> graduate, I am enthusiastic about stepping into the realm of web development. I am deeply intrigued by the problem-solving facets of programming, having completed an intensive bootcamp course and gained proficiency in full-stack web development.
                    </p>
                    <p className="text-gray-500 tracking-wide mt-2">
                        My expertise lies in crafting robust solutions using <span className="text-blue-600 font-bold">React</span>, <span className="text-blue-600 font-bold">Next.js</span>, <span className="text-blue-600 font-bold">Node.js</span>, and <span className="text-blue-600 font-bold">MongoDB</span>. Continual improvement is at the core of my learning ethos, with a current emphasis on mastering <span className="text-purple-600 font-bold">TypeScript</span>. My passion for technology propels me to explore and adeptly use cutting-edge tools and frameworks.
                    </p>
                    <p className="text-gray-500 tracking-wide mt-2">
                        I am actively seeking a full-time position as a software engineer. My extensive background in web programming is matched only by my unwavering dedication to continual learning and refinement.
                    </p>
                </div>
                <div className='flex-1 flex justify-center items-center '>
                    <div className='h-[360px] w-[360px] relative animate-spin-slow'>
                        <Image src={ReactIcon} alt='react-icon' className='absolute h-full w-full' fill />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutCover