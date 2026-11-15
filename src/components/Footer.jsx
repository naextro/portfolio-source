import { moreLinks, socials } from '../data/projects'

const SITEMAP = [
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const links = [...socials.map(({ label, href }) => ({ label, href })), ...moreLinks]

function Column({ title, items, external }) {
  return (
    <div>
      <p className="label mb-4">{title}</p>
      <ul className="space-y-1">
        {items.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="inline-block py-1 text-sm text-bone-300 transition-colors hover:text-glacier"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="section overflow-hidden">
      <div className="container">
        <div className="flex flex-col justify-between gap-10 border-t pt-10 line-border md:flex-row">
          <p className="max-w-[34ch] text-sm text-bone-500">
            Built with React, Tailwind and springs.{' '}
            <a
              href="https://github.com/naextro/portfolio-source"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone-300 underline decoration-pine-500 underline-offset-4 hover:text-glacier"
            >
              Source on GitHub
            </a>
            .
          </p>
          <div className="grid grid-cols-2 gap-12">
            <Column title="Sitemap" items={SITEMAP} />
            <Column title="Elsewhere" items={links} external />
          </div>
        </div>

        <p
          aria-hidden="true"
          className="display mt-16 select-none whitespace-nowrap text-center text-[clamp(4rem,22vw,20rem)] leading-[0.8] tracking-[-0.06em] text-ink-800"
        >
          NAEXTRO
        </p>

        <p className="label flex justify-between py-8">
          <span>&copy; {new Date().getFullYear()} Naextro</span>
          <span>Tangail, BD</span>
        </p>
      </div>
    </footer>
  )
}
