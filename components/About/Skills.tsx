import React from 'react'

const Skills = () => {

    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Material UI',
        'Node.js',
        'Styled Components',
        'Git',
        'Tailwind CSS',
        'MongoDB',
        'Redux',
        'Express',
        'Framer Motion',
        'Prisma'
    ];

    return (
        <div className="w-full mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-6 tracking-widest">Skills</h2>
            <div className="flex flex-wrap gap-7">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-card w-full md:w-auto rounded-lg cursor-pointer border-purple-500 border border-opacity-60 shadow-2xl px-6 p-3 text-center overflow-hidden hover:shadow-lg  transform hover:scale-105 duration-200 ease-in-out"
                    >
                        <p className=" text-xl tracking-wider font-semibold ">{skill}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills