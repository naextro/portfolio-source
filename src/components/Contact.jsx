import SectionHead from './SectionHead'
import Reveal from './Reveal'
import SocialIcon from './SocialIcon'
import Icon from './Icon'
import { EMAIL, socials } from '../data/projects'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead index="05" label="Contact" title="Got something to build?" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col">
            <p className="max-w-[40ch] text-lg text-bone-300">
              Have an idea or a project in mind? Send it over. Websites, bots, edits, or something
              that doesn&apos;t have a name yet.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="group acc-glacier mt-8 inline-flex w-fit items-center gap-3 text-[clamp(1.25rem,3vw,1.75rem)] font-semibold tracking-tight transition-colors hover:text-glacier"
            >
              {EMAIL}
              <span className="arrow-chip">
                <Icon name="arrow-up-right" />
              </span>
            </a>

            <div className="mt-10 flex items-center gap-2 lg:mt-auto">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-xl border line-border text-bone-100 transition-colors duration-150 hover:border-glacier hover:text-glacier active:scale-95"
                >
                  <SocialIcon name={icon} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form action="https://getform.io/f/axoylqpb" method="POST" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label mb-2 block">Name</label>
                  <input type="text" name="name" id="name" autoComplete="name" required placeholder="Your name" className="field" />
                </div>
                <div>
                  <label htmlFor="email" className="label mb-2 block">Email</label>
                  <input type="email" name="email" id="email" autoComplete="email" required placeholder="you@example.com" className="field" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="label mb-2 block">Message</label>
                <textarea name="message" id="message" required placeholder="What are we building?" className="field min-h-36 resize-y" />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send message
                <Icon name="send" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
