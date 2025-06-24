import React from 'react'

import SkillCard from './SkillCard';
const Skill = () => {
    const skillItem = [
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
    {
        imgSrc: 'images/html.svg',
        label: 'HTML',
        desc: 'Markup Language'
    },
    {
        imgSrc: 'images/py.svg',
        label: 'Python',
        desc: 'Programming Language'
    },
    {
        imgSrc: 'images/ts.svg',
        label: 'TypeScript',
        desc: 'Typed JavaScript'
    },
    {
        imgSrc: 'images/ae.svg',
        label: 'After Effects',
        desc: 'Motion Graphics'
    },
    {
        imgSrc: 'images/pr.svg',
        label: 'Premiere Pro',
        desc: 'Video Editing'
    },
    {
        imgSrc: 'images/git.svg',
        label: 'Git',
        desc: 'Version Control'
    },
    {
        imgSrc: 'images/githubog.svg',
        label: 'GitHub',
        desc: 'Code Hosting'
    },
    {
        imgSrc: 'images/vscode.svg',
        label: 'VS Code',
        desc: 'Code Editor'
    }
];



    return (
        <section className='section'>
            <div className='container'>
                <h2 className='headline-2'>
                    Technologies & Tools

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