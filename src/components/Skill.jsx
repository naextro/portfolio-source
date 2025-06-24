import React from 'react'

import SkillCard from './SkillCard';
const Skill = () => {
    const skillItem = [
        {
            imgSrc: 'images/figma.svg',
            label: 'Figma',
            desc: 'Design tool'
        },
        {
            imgSrc: 'images/css3.svg',
            label: 'CSS',
            desc: 'User Interface'
        },
        {
            imgSrc: 'images/javascript.svg',
            label: 'JavaScript',
            desc: 'Interaction'
        },
        {
            imgSrc: 'images/nodejs.svg',
            label: 'NodeJS',
            desc: 'Web Server'
        },
        {
            imgSrc: 'images/expressjs.svg',
            label: 'ExpressJS',
            desc: 'Node Framework'
        },
        {
            imgSrc: 'images/mongodb.svg',
            label: 'MongoDB',
            desc: 'Database'
        },
        {
            imgSrc: 'images/react.svg',
            label: 'React',
            desc: 'Framework'
        },
        {
            imgSrc: 'images/tailwindcss.svg',
            label: 'TailwindCSS',
            desc: 'User Interface'
        },
    ];


    return (
        <section className='section'>
            <div className='container'>
                <h2 className='headline-2'>
                    Essential Tools I use

                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Here are the core technologies and tools I leverage to ship fast, responsive, and modern digital products.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] ">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard

                            imgSrc={imgSrc} label={label} desc={desc} key={key} />
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Skill