import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { reviews } from '../data/projects'
import { asset } from '../lib/asset'

export default function Review() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <SectionHead index="04" label="Reviews" title="What clients say" />

        <div className="grid gap-4 md:grid-cols-2">
          {reviews.map(({ content, name, imgSrc, company }, i) => (
            <Reveal
              key={name}
              as="figure"
              delay={i * 0.07}
              className="flex min-h-[18rem] flex-col rounded-2xl border bg-ink-900 p-7 line-border md:p-9"
            >
              <span aria-hidden="true" className="display text-6xl leading-none text-pine-500">
                &ldquo;
              </span>
              <blockquote className="mt-2 text-xl font-medium leading-snug tracking-tight md:text-2xl">
                {content}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-8">
                <img
                  src={asset(imgSrc)}
                  alt=""
                  width={44}
                  height={44}
                  loading="lazy"
                  className="h-11 w-11 rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="label mt-0.5">{company}</p>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
