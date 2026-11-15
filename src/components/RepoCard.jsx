import Icon from './Icon'

const TONE = { muted: 'tone-muted', fg: 'tone-fg', acc: 'tone-acc' }

export default function RepoCard({ repo }) {
  const { name, kind, date, badge, accent, desc, tags, href, code } = repo

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      className={`group acc-${accent} flex w-[min(82vw,24rem)] shrink-0 flex-col overflow-hidden rounded-2xl border line-border bg-ink-900 transition-colors duration-200 hover:border-[color:var(--acc)]`}
    >
      {/* README-sourced snippet as the cover */}
      <div
        className="relative h-40 border-b bg-ink-950 p-5 font-mono text-[0.72rem] leading-6"
        style={{ borderColor: 'var(--line)' }}
      >
        <span
          className="absolute right-4 top-4 rounded-md border px-2 py-0.5 text-[0.65rem] uppercase tone-acc"
          style={{ borderColor: 'var(--acc)', letterSpacing: '0.08em' }}
        >
          {badge}
        </span>
        <div className="pt-5">
          {code.map((line, i) => (
            <div key={i} className="whitespace-pre overflow-hidden text-ellipsis">
              {line.map(([tone, text], j) => (
                <span key={j} className={TONE[tone]}>
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="label mb-3 flex justify-between gap-3">
          <span>{kind}</span>
          <span className="shrink-0">{date}</span>
        </div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="h3 text-[1.6rem]">{name}</h3>
          <span className="arrow-chip">
            <Icon name="arrow-up-right" />
          </span>
        </div>
        <p className="mt-3 text-[0.9rem] leading-relaxed text-bone-300">{desc}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
