import React from 'react'

const About = () => {
    const aboutItems = [
        {
            label: 'Project done',
            number: 8
        },
        {
            label: 'Years of experience',
            number: 3
        }
    ];




    return (
        <section id='about' className='section'>
            <div className='container'>
                <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
                    <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>Hi, I’m Ibne Reham

                        I’m a full-stack developer and video editor. I build clean and responsive websites and web apps using tools like React, Tailwind, and Node.js. I also edit videos to tell clear and engaging stories through smooth cuts and visuals.

                        I enjoy solving problems with code and creating content that looks good and works well. Whether it's a product, a website, or a video, I focus on making it simple, effective, and user-friendly.

                    </p>
                    <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className='flex items-center md:mb-2'>
                                        <span className='text-2xl font-bold md:text-4xl'>{number}</span>
                                        <span className='text-sky-400 font-semibold md:text-3xl'>+</span>

                                    </div>
                                    <p className=' text-sm text-zinc-400'>{label} </p>
                                </div>
                            ))
                        }
                        <img
                            src='images/NAEXTRO.svg'
                            alt='logo'
                            className='ml-auto md:w-[40px] md:h-[40px]'
                            width={30}
                            height={30}


                        />


                    </div>

                </div>
            </div>
        </section>
    )
}

export default About