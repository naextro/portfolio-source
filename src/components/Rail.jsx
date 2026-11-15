import { useCallback, useEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue, useMotionValueEvent, useReducedMotion } from 'motion/react'
import Icon from './Icon'
import { clamp, nearest, project, rubberband } from '../lib/motion'

const SLOP = 10 // px of hysteresis before a drag commits to a direction

/**
 * A horizontally draggable rail built the way Apple builds scrollers:
 *  - 1:1 tracking while the pointer is down
 *  - rubber-banding past the edges instead of a hard stop
 *  - on release: project where the flick is heading, snap to the nearest card,
 *    and hand the finger's velocity to the spring so there is no seam
 *  - grabbing it mid-flight stops the animation from its *current* position (no jump)
 *  - vertical intent is released back to the page, so touch scrolling still works
 */
export default function Rail({ children, label }) {
  const viewport = useRef(null)
  const track = useRef(null)
  const x = useMotionValue(0)
  const anim = useRef(null)
  const geo = useRef({ min: 0, snaps: [0], width: 0 })
  const gesture = useRef(null)
  const suppressClick = useRef(false)
  const wheelTimer = useRef(0)
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(1)

  const measure = useCallback(() => {
    const vp = viewport.current
    const tr = track.current
    if (!vp || !tr) return
    const width = vp.clientWidth
    const min = Math.min(0, width - tr.offsetWidth)
    const snaps = [...new Set(Array.from(tr.children).map((c) => clamp(-c.offsetLeft, min, 0)))]
    geo.current = { min, snaps, width }
    setCount(snaps.length)
  }, [])

  // Always animate from the live value; spring carries velocity through re-targets.
  const run = useCallback(
    (target, velocity = 0, bounce = 0) => {
      anim.current?.stop()
      anim.current = animate(
        x,
        target,
        reduce
          ? { duration: 0.2, ease: 'easeOut' }
          : { type: 'spring', bounce, duration: 0.45, velocity },
      )
    },
    [x, reduce],
  )

  useEffect(() => {
    measure()
    const ro = new ResizeObserver(() => {
      measure()
      if (x.get() < geo.current.min) x.set(geo.current.min)
    })
    ro.observe(viewport.current)
    ro.observe(track.current)
    return () => ro.disconnect()
  }, [measure, x])

  useMotionValueEvent(x, 'change', (v) => {
    const { snaps } = geo.current
    const i = snaps.indexOf(nearest(snaps, v))
    setIndex((prev) => (prev === i ? prev : i))
  })

  // Trackpad / shift-wheel horizontal scrolling (needs a non-passive listener).
  useEffect(() => {
    const el = viewport.current
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return
      e.preventDefault()
      anim.current?.stop()
      x.set(clamp(x.get() - e.deltaX, geo.current.min, 0))
      clearTimeout(wheelTimer.current)
      wheelTimer.current = setTimeout(() => run(nearest(geo.current.snaps, x.get())), 110)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      el.removeEventListener('wheel', onWheel)
      clearTimeout(wheelTimer.current)
    }
  }, [x, run])

  const goTo = (i) => {
    const { snaps } = geo.current
    run(snaps[clamp(i, 0, snaps.length - 1)])
  }

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    anim.current?.stop() // grab mid-flight: stay exactly where it is on screen
    gesture.current = {
      id: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      origin: x.get(),
      dragging: false,
      history: [{ t: e.timeStamp, x: e.clientX }],
    }
  }

  const onPointerMove = (e) => {
    const g = gesture.current
    if (!g || e.pointerId !== g.id) return

    if (!g.dragging) {
      const dx = e.clientX - g.startX
      const dy = e.clientY - g.startY
      if (Math.abs(dx) < SLOP && Math.abs(dy) < SLOP) return
      if (Math.abs(dy) > Math.abs(dx)) {
        gesture.current = null // vertical intent: let the page scroll
        return
      }
      g.dragging = true
      g.startX = e.clientX // track 1:1 from the commit point so nothing jumps
      g.origin = x.get()
      viewport.current.setPointerCapture(e.pointerId)
      return
    }

    const raw = g.origin + (e.clientX - g.startX)
    const { min, width } = geo.current
    let next = raw
    if (raw > 0) next = rubberband(raw, width)
    else if (raw < min) next = min + rubberband(raw - min, width)
    x.set(next)

    g.history.push({ t: e.timeStamp, x: e.clientX })
    while (g.history.length > 2 && e.timeStamp - g.history[0].t > 100) g.history.shift()
  }

  const onPointerEnd = (e) => {
    const g = gesture.current
    if (!g || e.pointerId !== g.id) return
    gesture.current = null
    if (!g.dragging) return // a plain tap: let the link handle it

    suppressClick.current = true
    setTimeout(() => {
      suppressClick.current = false
    }, 60)
    if (viewport.current.hasPointerCapture(e.pointerId)) {
      viewport.current.releasePointerCapture(e.pointerId)
    }

    const first = g.history[0]
    const last = g.history[g.history.length - 1]
    const dt = (last.t - first.t) / 1000
    const resting = e.timeStamp - last.t > 80 // finger paused before lifting: no momentum
    const velocity = e.type === 'pointercancel' || resting || dt <= 0 ? 0 : (last.x - first.x) / dt

    const { snaps, min } = geo.current
    const projected = clamp(x.get() + project(velocity), min, 0)
    // a little bounce only because a flick preceded it
    run(nearest(snaps, projected), velocity, Math.abs(velocity) > 400 ? 0.15 : 0)
  }

  const onClickCapture = (e) => {
    if (suppressClick.current) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  // Keyboard users tabbing to an off-screen card: bring it into view.
  const onFocusCapture = (e) => {
    const card = Array.from(track.current.children).find((c) => c.contains(e.target))
    if (!card) return
    const left = card.offsetLeft + x.get()
    const right = left + card.offsetWidth
    if (left < 0 || right > geo.current.width) {
      const { snaps, min } = geo.current
      run(nearest(snaps, clamp(-card.offsetLeft, min, 0)))
    }
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="label">Drag, flick, or use the arrows</p>
        <div className="flex gap-2">
          <button type="button" aria-label="Previous" className="rail-btn" disabled={index === 0} onClick={() => goTo(index - 1)}>
            <Icon name="arrow-left" />
          </button>
          <button type="button" aria-label="Next" className="rail-btn" disabled={index >= count - 1} onClick={() => goTo(index + 1)}>
            <Icon name="arrow-right" />
          </button>
        </div>
      </div>

      <div
        ref={viewport}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        className="rail touch-pan-y select-none overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onClickCapture={onClickCapture}
        onFocusCapture={onFocusCapture}
        onScroll={(e) => {
          e.currentTarget.scrollLeft = 0 // browser focus-scroll must not fight the transform
        }}
        onDragStart={(e) => e.preventDefault()}
      >
        <motion.div ref={track} style={{ x }} className="relative flex w-max gap-4">
          {children}
        </motion.div>
      </div>
    </div>
  )
}
