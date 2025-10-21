import React from 'react'

const faqs = [
  {
    q: 'How do estimates work?',
    a: 'Share photos and a brief description. For straightforward jobs, we can give a ballpark or fixed price remotely. Larger projects may need an on‑site visit.'
  },
  {
    q: 'What are your hours?',
    a: 'Weekdays 8am–6pm and Saturdays 9am–2pm. After‑hours by request for emergencies.'
  },
  {
    q: 'Do you warranty your work?',
    a: 'Yes—most handyman work includes a 1‑year workmanship warranty. Materials are covered by manufacturer warranties.'
  },
  {
    q: 'How do you charge?',
    a: 'We typically quote by the job. If scope is uncertain, we can propose a capped time‑and‑materials rate.'
  }
]

export default function FAQ() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-heading">FAQ</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {faqs.map((f) => (
          <div key={f.q} className="bg-white rounded-2xl shadow p-4">
            <div className="font-medium">{f.q}</div>
            <div className="text-sm text-gray-700 mt-1">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
