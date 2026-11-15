import Icon from './Icon'
import Reveal from './Reveal'
import { asset } from '../lib/asset'

export default function WebCard({ item, delay = 0 }) {
  const { title, kind, image, href, tags } = item
  return (
    <Reveal delay={delay}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="group acc-glacier block">
        <div
          className="aspect-[4/3] overflow-hidden rounded-xl border line-border bg-ink-800 transition-colors duration-200 group-hover:border-[color:var(--acc)]"
        >
          <img
            src={asset(image)}
            alt={`${title} preview`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="h3 text-xl">{title}</h3>
            <p className="mt-1 text-sm text-bone-500">{kind}</p>
          </div>
          <span className="arrow-chip">
            <Icon name="arrow-up-right" />
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </a>
    </Reveal>
  )
}
