// Motion primitives, following Apple's "Designing Fluid Interfaces" ideas:
// springs over fixed-duration easing, momentum projection, rubber-banding.

// Default UI spring: critically damped (no overshoot), graceful and non-distracting.
export const SPRING = { type: 'spring', bounce: 0, duration: 0.45 }
export const SPRING_QUICK = { type: 'spring', bounce: 0, duration: 0.3 }
// Only for motion that carries momentum (flicks, menus popping from a tap target).
export const SPRING_MOMENTUM = { type: 'spring', bounce: 0.2, duration: 0.4 }

// Where a flick will come to rest, using the exponential-decay form Apple ships.
// velocity is px/s; 0.998 matches normal scroll deceleration.
export const project = (velocity, rate = 0.998) =>
  ((velocity / 1000) * rate) / (1 - rate)

// Progressive resistance past a boundary instead of a hard stop.
export const rubberband = (overshoot, dimension, constant = 0.55) =>
  (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot))

export const clamp = (value, lo, hi) => Math.min(hi, Math.max(lo, value))

export const nearest = (list, value) =>
  list.reduce((best, s) => (Math.abs(s - value) < Math.abs(best - value) ? s : best), list[0])
