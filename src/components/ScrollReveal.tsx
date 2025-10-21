import React from 'react'
import { motion, Variants } from 'framer-motion'

const variants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
}

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLElement | null>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setVisible(true)
      })
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <motion.div ref={ref as any} variants={variants} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  )
}
