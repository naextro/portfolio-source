import React from 'react'
import { ButtonPrimary } from './Button';

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/naextro'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/naextro'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/naextro'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/naextro.edit'
  },
  {
    label: 'Facebook',
    href: 'https://fb.me/naextro'
  }
];


const Footer = () => {
  return (
<footer className="section">
    <div className="container">
        <div className="lg:grid lg:grid-cols-2">
            <div className="mb-10">
                <h2 className="headline-1 mb-8 lg:max-2-[12ch] reveal-up">Let's work together today!</h2>
                <ButtonPrimary
                href="mailto:ibnereham@gmail.com"
                label="Start project"
                icon="chevron_right"
                classes='reveal-up'
                />
            </div>
            <div className="grid grid-cols-2 gap-4 lg:pl-20">
                <div>
                    <p className='mb-2 reveal-up'>Sitemap</p>
                    <ul>
                        {sitemap.map(({label, href}, key)=>(
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
                        {socials.map(({label, href}, key)=>(
                            <li key={key}>
                                <a href={href}
                                target='_blank'
                                className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>
                                    {label}
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
        <p className="text-zinc-500 text-sm reveal-up">&copy; 2025 <span className='text-zinc-200'>Naextro</span></p>
    </div>
</footer>  )
}

export default Footer