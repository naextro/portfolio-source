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
                <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
                    <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>Hi, I’m Ibne Reham — a passionate web developer focused on delivering seamless and scalable digital experiences. I combine modern web technologies with clean design to build performant, accessible, and user-friendly websites & apps.

                        Whether you're building from scratch or scaling an existing product, I can help bring your vision to life.

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
                            src='images/logo.svg'
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