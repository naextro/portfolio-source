import React from 'react'
import { useCMS } from '../cms/CMSContext'

const Contact = () => {
    const { content } = useCMS();
    const contact = content.contact;

    return (
        <section id='contact' className="section">
            <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
                <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
                    <h2 className="headline-2 lg:max-w-[12ch] reveal-up">{contact.heading}</h2>
                    <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">{contact.subtext}</p>

                    <div className="flex items-center gap-2 mt-auto my-5">
                        {contact.socials.map(({ href, label, icon }, key) => (
                            <a
                                href={href}
                                key={key}
                                target="_blank"
                                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                <form action="https://getform.io/f/axoylqpb" method='POST' className="xl:pl-10">
                    <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                        <div className="mb-4">
                            <label htmlFor="name" className="label reveal-up">
                                Name
                            </label>
                            <input type="text" name='name' id='name' autoComplete='name' required placeholder='Ibne Arif Al Riham' className="text-field reveal-up" />
                        </div>
                        <div className="mb-4 ">
                            <label htmlFor="email" className="label reveal-up">
                                Email
                            </label>
                            <input type="email" name='email' id='email' autoComplete='email' required placeholder='ibnereham@gmail.com' className="text-field reveal-up" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="label reveal-up">Message
                        </label>
                        <textarea name="message" className='text-field resize-y min-h-32 max-h-80 reveal-up' placeholder='Wassup' id="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary [&]:max-w-full w-full justify-center">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact