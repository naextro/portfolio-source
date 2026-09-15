import React from 'react'
import { ButtonPrimary } from './Button';
import { useCMS } from '../cms/CMSContext'

const Footer = () => {
    const { content } = useCMS();
    const footer = content.footer;
    const contact = content.contact;

  return (
<footer className="section">
    <div className="container">
        <div className="lg:grid lg:grid-cols-2">
            <div className="mb-10">
                <h2 className="headline-1 mb-8 lg:max-2-[12ch] reveal-up">{footer.heading}</h2>
                <ButtonPrimary
                href={`mailto:${footer.btnEmail}`}
                label={footer.btnLabel}
                icon="chevron_right"
                classes='reveal-up'
                />
            </div>
            <div className="grid grid-cols-2 gap-4 lg:pl-20">
                <div>
                    <p className='mb-2 reveal-up'>Sitemap</p>
                    <ul>
                        {contact.sitemap.map(({label, href}, key)=>(
                            <li key={key}>
                                <a href={href}
                                className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className='mb-2 reveal-up'>Socials</p>
                    <ul>
                        {contact.footerSocials.map(({ label, href, icon }, key) => (
                            <li key={key}>
                                <a href={href}
                                target='_blank'
                                className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'
                                >
                                    {icon} {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="flex items-center justify-between pt-10 mb-8 px-4">
        <a href="" className="logo reveal-up">
            <img src="images/NAEXTRO.svg" width={30} height={30} alt="logo" />
        </a>
        <p className="text-zinc-500 text-sm reveal-up">&copy; 2025 <span className='text-zinc-200'>{footer.copyright}</span></p>
    </div>
</footer>  )
}

export default Footer