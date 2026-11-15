import Reveal from './Reveal'

export default function SectionHead({ index, label, title, children }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="label mb-4 flex items-center gap-3">
        <span className="text-ice">{index}</span>
        <span className="h-px w-8" style={{ background: 'var(--line)' }} />
        {label}
      </p>
      <h2 className="h2 max-w-[18ch]">{title}</h2>
      {children && <p className="mt-5 max-w-[52ch] text-bone-300">{children}</p>}
    </Reveal>
  )
}
