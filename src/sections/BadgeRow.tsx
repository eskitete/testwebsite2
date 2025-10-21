import React from 'react'

export default function BadgeRow() {
  return (
    <div className="mt-6 flex items-center gap-4">
      <div className="bg-white p-2 rounded shadow text-sm">On-Time Arrival</div>
      <div className="bg-white p-2 rounded shadow text-sm">Upfront Pricing</div>
      <div className="bg-white p-2 rounded shadow text-sm">Licensed & Insured</div>
      <div className="ml-auto text-sm">Satisfaction Guarantee • Clean Worksite</div>
    </div>
  )
}
