import React from 'react'
import ContactForm from '../components/ContactForm'
import { localBusinessJsonLd } from '../lib/jsonld'
import FAQ from '../sections/FAQ'
import { site } from '../config/site'

export default function Contact() {
  React.useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(localBusinessJsonLd())
    document.head.appendChild(script)
    return () => script.remove()
  }, [])

  return (
    <div>
      <h1 className="font-heading text-3xl">Contact {site.businessName}</h1>
      <p className="mt-2">Call, text, or send a message using the form.</p>
      <div className="mt-6">
        <ContactForm />
      </div>
      <FAQ />
    </div>
  )
}
