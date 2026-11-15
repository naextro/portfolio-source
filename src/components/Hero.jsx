import { Fragment } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ButtonPrimary, ButtonGhost } from './Button'
import Reveal from './Reveal'
import { SPRING } from '../lib/motion'
import { asset } from '../lib/asset'
import { GITHUB_URL, REPO_COUNT } from '../data/projects'

const WORDS = ['Web', 'apps,', 'bots,', 'and', 'Linux', 'desktops.']
const ACCENT_FROM = 4 // "Linux desktops." gets the crimson

const STATS = [
  { value: String(REPO_COUNT), label: 'Public repos' },
  { value: '8+', label: 'Sites shipped' },
  { value: '3+', label: 'Years building' },
]

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="relative isolate pt-32 md:pt-40">
      <div aria-hidden="true" className="bg-grid absolute inset-x-0 top-0 -z-10 h-[40rem]" />

      <div className="container grid items-end gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-10">
        <div>
          <Reveal y={12} className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="flex items-center gap-2 label !text-bone-100">
              <span className="relative h-2 w-2 rounded-full bg-neon">
                <span className="absolute inset-0 animate-ping rounded-full bg-neon" />
              </span>
              Available for work
            </span>
            <span className="label">Tangail, Bangladesh</span>
          </Reveal>

          <h1 className="display text-[clamp(3rem,7.4vw,6.5rem)]">
            {WORDS.map((word, i) => (
              <Fragment key={i}>
              <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
                <motion.span
                  className={`inline-block ${i >= ACCENT_FROM ? 'text-crimson-400' : ''}`}
                  initial={reduce ? { opacity: 0 } : { y: '105%' }}
                  animate={reduce ? { opacity: 1 } : { y: 0 }}
                  transition={reduce ? { duration: 0.25 } : { ...SPRING, delay: 0.05 + i * 0.045 }}
                >
                  {word}
                </motion.span>
              </span>
              {i < WORDS.length - 1 && ' '}
              </Fragment>
            ))}
          </h1>

          <Reveal delay={0.35} y={16}>
            <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-bone-300">
              I&apos;m Ibne Arif Al Riham, also Naextro. A full-stack developer and video editor.
              React and Tailwind up front, Python and Node behind them, and a soft spot for
              anything Linux.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonPrimary href="#work" label="View my work" icon="arrow-down" />
              <ButtonGhost href={GITHUB_URL} target="_blank" label="GitHub" icon="arrow-up-right" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={32} className="hidden lg:block">
          <figure className="relative ml-auto w-full max-w-[26rem]">
            <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm bg-crimson-700" />
            <div className="relative aspect-square overflow-hidden rounded-sm bg-ink-800">
              <img
                src={asset('images/avatar-1.jpg')}
                alt="Portrait of Ibne Arif Al Riham"
                width={656}
                height={656}
                className="h-full w-full object-cover contrast-[1.05]"
              />
            </div>
            <span aria-hidden="true" className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-neon" />
            <span aria-hidden="true" className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-neon" />
            <figcaption className="label mt-6 flex justify-between">
              <span>Naextro</span>
              <span>Full-stack / Video</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="container mt-20 md:mt-28">
        <dl
          className="grid grid-cols-3 border-y"
          style={{ borderColor: 'var(--line)' }}
        >
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className={`flex flex-col py-6 md:py-8 ${i > 0 ? 'border-l pl-5 md:pl-8' : ''}`}
              style={{ borderColor: 'var(--line)' }}
            >
              <dt className="label order-2 mt-2">{label}</dt>
              <dd className="display order-1 text-[clamp(2rem,5vw,3.5rem)]">
                {value.replace('+', '')}
                {value.includes('+') && <span className="text-ember">+</span>}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
