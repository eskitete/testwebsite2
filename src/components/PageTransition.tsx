import React from 'react'
import { motion } from 'framer-motion'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  // Simple progressive enhancement: if view transitions available, rely on them.
  React.useEffect(() => {
    if ((document as any).startViewTransition) {
      // leave for native API
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  )
}
