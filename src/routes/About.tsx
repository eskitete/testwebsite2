import React from 'react'
import { localBusinessJsonLd } from '../lib/jsonld'
import { site } from '../config/site'

export default function About() {
  React.useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(localBusinessJsonLd())
    document.head.appendChild(script)
    return () => script.remove()
  }, [])

  return (
    <div>
      <h1 className="font-heading text-3xl">About {site.businessName}</h1>
      <p className="mt-3 text-gray-700">
        We’re a small, detail‑focused handyman business committed to craftsmanship, clear
        communication, and a tidy workspace. From minor plumbing to carpentry and drywall, we bring
        the right tools, materials, and attitude to get things done right the first time.
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="font-heading">Our Values</div>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
            <li>Honesty in pricing and scope</li>
            <li>Respect for your time and home</li>
            <li>Quality over shortcuts</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="font-heading">Credentials</div>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
            <li>Licensed & insured</li>
            <li>Background‑checked, non‑smoking</li>
            <li>OSHA‑aware safety practices</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="font-heading">Our Process</div>
          <ol className="list-decimal pl-5 text-sm text-gray-700 mt-2">
            <li>Share photos and details for a quick estimate</li>
            <li>Schedule a convenient time—same‑week when possible</li>
            <li>We complete the work and clean up thoroughly</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
