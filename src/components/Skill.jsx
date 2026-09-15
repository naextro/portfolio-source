import React from 'react'
import { useCMS } from '../cms/CMSContext'
import SkillCard from './SkillCard';
const Skill = () => {
    const { content } = useCMS();

    return (
        <section className='section'>
            <div className='container'>
                <h2 className='headline-2 reveal-up'>
                    Technologies & Tools
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Here are the core technologies and tools I leverage to ship fast, responsive, and modern digital products.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] ">
                    {content.skills.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard
                            imgSrc={imgSrc} label={label} desc={desc} key={key} classes="reveal-up" />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skill