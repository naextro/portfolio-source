import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { stack } from '../data/projects'
import { asset } from '../lib/asset'

const ACC = { crimson: 'var(--crimson-hi)', neon: 'var(--neon)', ember: 'var(--ember)' }

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <SectionHead index="02" label="Stack" title="What I build with">
          The tools I reach for most. Python and the web on one side, Linux and video on the other.
        </SectionHead>

        <div className="border-t line-border">
          {stack.map(({ label, accent, items }, i) => (
            <Reveal
              key={label}
              delay={i * 0.04}
              className="grid gap-4 border-b py-6 line-border md:grid-cols-[13rem_1fr] md:py-8"
            >
              <p className="label pt-2">{label}</p>
              <ul className="flex flex-wrap gap-2" style={{ '--acc': ACC[accent] }}>
                {items.map(([name, icon]) => (
                  <li key={name} className="chip">
                    {icon ? (
                      <img src={asset(icon)} alt="" width={18} height={18} />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-sm" style={{ background: 'var(--acc)' }} />
                    )}
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
