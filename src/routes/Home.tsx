import React from 'react'
import HeroEditorial from '../sections/HeroEditorial'
import BadgeRow from '../sections/BadgeRow'
import Testimonials from '../sections/Testimonials'
import { site } from '../config/site'
import { localBusinessJsonLd } from '../lib/jsonld'

export default function Home() {
  React.useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(localBusinessJsonLd())
    document.head.appendChild(script)
    return () => script.remove()
  }, [])

  return (
    <div>
      <HeroEditorial />
      <BadgeRow />
      <section className="mt-8">
        <h2 className="text-2xl font-heading">Featured Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          <div className="card p-4 rounded-2xl bg-white shadow">
            <div className="font-medium">Plumbing</div>
            <div className="text-sm text-gray-600 mt-1">Faucets, toilets, garbage disposals, minor leaks.</div>
          </div>
          <div className="card p-4 rounded-2xl bg-white shadow">
            <div className="font-medium">Carpentry</div>
            <div className="text-sm text-gray-600 mt-1">Shelving, trim, doors, cabinet fixes and installs.</div>
          </div>
          <div className="card p-4 rounded-2xl bg-white shadow">
            <div className="font-medium">Drywall & Paint</div>
            <div className="text-sm text-gray-600 mt-1">Hole repairs, touch-ups, accent walls, caulking.</div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-heading">Why Choose {site.businessName}?</h2>
        <ul className="grid md:grid-cols-2 gap-4 mt-4 list-disc pl-5">
          <li>Clear, upfront pricing before work begins</li>
          <li>Respectful of your home—shoe covers and clean workspace</li>
          <li>Licensed, insured, and experienced across common trades</li>
          <li>Flexible scheduling with same-week availability</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-heading">Service Area</h2>
        <p className="mt-2 text-gray-700">We serve {site.serviceAreas.join(', ')}.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-heading">Happy Customers</h2>
        <Testimonials />
      </section>
    </div>
  )
}
