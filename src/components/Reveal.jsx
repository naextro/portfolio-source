import { motion, useReducedMotion } from 'motion/react'
import { SPRING } from '../lib/motion'

// Spring-based entrance. Not scrubbed to scroll position, so it never feels laggy
// or stuck half-way. With reduced motion it becomes a short cross-fade.
export default function Reveal({ as = 'div', delay = 0, y = 24, className, children, ...rest }) {
  const reduce = useReducedMotion()
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={reduce ? { duration: 0.2 } : { ...SPRING, delay }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
