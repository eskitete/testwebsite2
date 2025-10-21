import React from 'react'
import { motion } from 'framer-motion'
import { site } from '../config/site'
import { formatSmsLink } from '../lib/phone'

export default function HeroEditorial() {
  return (
    <section className="py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-6xl font-heading">{site.tagline}</h1>
        <p className="mt-4 text-lg">Licensed & insured. Upfront pricing. Friendly, punctual service.</p>
        <div className="mt-6 flex gap-3">
          <a href={formatSmsLink(site.phone)} className="btn px-4 py-2 bg-primary text-white rounded">Text Us Now</a>
          <a href="/estimate" className="btn px-4 py-2 border border-primary rounded">Get Quick Estimate</a>
        </div>
      </motion.div>
    </section>
  )
}
