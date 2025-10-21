import React from 'react'

const projects = [
  { title: 'Floating shelves + accent wall', summary: 'Carpentry, drywall patch, and paint blend.' },
  { title: 'Vanity light + GFCI upgrade', summary: 'Fixture replacement and safety device update.' },
  { title: 'Fence gate repair', summary: 'New hinge hardware, latch, and alignment.' },
  { title: 'Drywall patch (6")', summary: 'Seamless texture and color‑matched touch‑up.' }
]

export default function Gallery() {
  return (
    <div>
      <h1 className="font-heading text-3xl">Recent Projects</h1>
      <p className="mt-2 text-gray-700">A quick look at the kind of work we do.</p>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.title} className="bg-white rounded-2xl shadow p-4">
            <div className="h-40 w-full rounded-xl bg-gradient-to-br from-sand to-white border" aria-hidden />
            <div className="mt-3 font-medium">{p.title}</div>
            <div className="text-sm text-gray-600">{p.summary}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
