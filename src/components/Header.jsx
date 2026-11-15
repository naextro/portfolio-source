import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Icon from './Icon'
import { ButtonPine } from './Button'
import { SPRING_MOMENTUM, SPRING_QUICK } from '../lib/motion'

const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'about', label: 'About' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
]

function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    // top of the page: nothing highlighted
    const onScroll = () => window.scrollY < 120 && setActive(null)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])

  return [active, setActive]
}

const IDS = NAV.map((n) => n.id)

export default function Header() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useActiveSection(IDS)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // The sheet materialises (blur + scale + fade) from its trigger, and leaves the same way.
  const sheetHidden = reduce
    ? { opacity: 0 }
    : { opacity: 0, scale: 0.9, filter: 'blur(6px)' }
  const sheetShown = reduce
    ? { opacity: 1 }
    : { opacity: 1, scale: 1, filter: 'blur(0px)' }

  return (
    <>
      <div aria-hidden="true" className="edge-top pointer-events-none fixed inset-x-0 top-0 z-40 h-24" />

      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-4 md:px-8">
          <a
            href="#home"
            aria-label="Naextro, back to top"
            className="pointer-events-auto block h-8 w-8 bg-pine-500 transition-colors duration-200 hover:bg-glacier"
            style={{
              WebkitMaskImage: `url(${import.meta.env.BASE_URL}images/NAEXTRO.svg)`,
              maskImage: `url(${import.meta.env.BASE_URL}images/NAEXTRO.svg)`,
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
            }}
          />

          {/* Desktop pill */}
          <nav
            aria-label="Primary"
            className="glass pointer-events-auto hidden items-center gap-1 rounded-full p-1 md:flex"
          >
            {NAV.filter((n) => n.id !== 'contact').map(({ id, label }) => {
              const isActive = active === id
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setActive(id)}
                  aria-current={isActive ? 'true' : undefined}
                  className="relative grid h-9 place-items-center px-4 text-sm font-medium tracking-wide"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-bone-100"
                      transition={reduce ? { duration: 0.15 } : SPRING_QUICK}
                    />
                  )}
                  <span
                    className={`relative transition-colors duration-150 ${
                      isActive ? 'text-ink-950' : 'text-bone-300 hover:text-bone-50'
                    }`}
                  >
                    {label}
                  </span>
                </a>
              )
            })}
          </nav>

          <div className="pointer-events-auto hidden md:block">
            <ButtonPine href="#contact" label="Contact" icon="arrow-up-right" />
          </div>

          {/* Mobile menu */}
          <div className="pointer-events-auto relative md:hidden">
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((o) => !o)}
              className="glass grid h-10 w-10 place-items-center rounded-xl transition-transform duration-100 active:scale-95"
            >
              <Icon name={open ? 'close' : 'menu'} size={20} />
            </button>

            <AnimatePresence>
              {open && (
                <>
                  {/* non-blocking: no scrim, a tap outside simply dismisses */}
                  <div className="fixed inset-0" onPointerDown={() => setOpen(false)} />
                  <motion.nav
                    id="mobile-nav"
                    aria-label="Mobile"
                    className="glass absolute right-0 top-[calc(100%+0.5rem)] min-w-[14rem] origin-top-right rounded-2xl p-2"
                    initial={sheetHidden}
                    animate={sheetShown}
                    exit={sheetHidden}
                    transition={reduce ? { duration: 0.15 } : SPRING_MOMENTUM}
                  >
                    {NAV.map(({ id, label }) => (
                      <a
                        key={id}
                        href={`#${id}`}
                        onClick={() => {
                          setActive(id)
                          setOpen(false)
                        }}
                        className={`flex h-11 items-center justify-between rounded-xl px-4 text-[0.95rem] font-medium transition-colors active:bg-white/10 ${
                          active === id ? 'text-pine-400' : 'text-bone-100'
                        }`}
                      >
                        {label}
                        <Icon name="arrow-right" size={16} />
                      </a>
                    ))}
                  </motion.nav>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  )
}
