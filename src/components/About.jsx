import Reveal from './Reveal'
import SectionHead from './SectionHead'

const NOW = [
  ['At', 'RS22 Studios'],
  ['Learning', 'React, properly'],
  ['Hacking on', 'Liner (fork), AerisBot'],
  ['Daily driver', 'Arch + Hyprland'],
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead index="03" label="About" title="Clean code. Clean cuts." />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal className="space-y-6 text-lg leading-relaxed text-bone-300 md:text-xl">
            <p>
              I&apos;m <span className="text-bone-50">Ibne Arif Al Riham</span>, Naextro online. I
              build websites and web apps with React, Tailwind and Node, and I write the Python that
              sits behind bots and automation.
            </p>
            <p>
              I also edit video: tight cuts, clear stories. The thing I like most is the space
              between disciplines, like a Discord bot that moderates a server, a module that fixes
              an Android ROM, or a desktop that looks like a game.
            </p>
            <p>
              Whether it&apos;s a product, a page or a timeline, I aim for simple, effective and
              easy to use.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="label mb-4">Right now</p>
            <dl className="border-t line-border">
              {NOW.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 border-b py-4 line-border">
                  <dt className="label">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
