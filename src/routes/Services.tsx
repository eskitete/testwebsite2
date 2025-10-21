import React from 'react'

const services = [
  {
    category: 'Plumbing',
    items: [
      { name: 'Faucet replacement', blurb: 'Kitchen/bath faucets, supply lines, shutoffs.' },
      { name: 'Toilet repair', blurb: 'Fill valves, flappers, wax rings, leaks.' },
      { name: 'Garbage disposal', blurb: 'Install or replace standard units.' }
    ]
  },
  {
    category: 'Carpentry',
    items: [
      { name: 'Shelving & storage', blurb: 'Closet systems, floating shelves, garage racks.' },
      { name: 'Trim & doors', blurb: 'Casing, base, quarter-round, door alignment.' },
      { name: 'Cabinet fixes', blurb: 'Hinges, pulls, soft-close, toe-kicks.' }
    ]
  },
  {
    category: 'Electrical',
    items: [
      { name: 'Light fixtures', blurb: 'Ceiling lights, pendants, vanity lights, dimmers.' },
      { name: 'Ceiling fans', blurb: 'Install/replace, balance and test.' },
      { name: 'Outlets & switches', blurb: 'Replace standard devices; GFCI in dry locations.' }
    ]
  },
  {
    category: 'Walls & Finishes',
    items: [
      { name: 'Drywall', blurb: 'Small repairs, patches, texture blending.' },
      { name: 'Interior paint', blurb: 'Touch‑ups, doors/trim, accent walls.' },
      { name: 'Caulking', blurb: 'Showers, tubs, baseboards, windows.' }
    ]
  },
  {
    category: 'Exterior & Misc',
    items: [
      { name: 'Fence/gate repair', blurb: 'Minor wood repairs, hardware, latches.' },
      { name: 'Weatherproofing', blurb: 'Door sweeps, thresholds, weatherstripping.' },
      { name: 'Furniture/TV', blurb: 'Assembly, anchors, TV mounting (studs only).' }
    ]
  }
]

export default function Services() {
  return (
    <div>
      <h1 className="font-heading text-3xl">Our Services</h1>
      <p className="mt-2 text-gray-700">
        Reliable, detail‑oriented repairs and improvements for busy homeowners and small businesses.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {services.map((group) => (
          <div key={group.category} className="bg-white rounded-2xl shadow p-4">
            <h2 className="font-heading text-xl">{group.category}</h2>
            <ul className="mt-3 space-y-2">
              {group.items.map((it) => (
                <li key={it.name} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                  <div>
                    <div className="font-medium">{it.name}</div>
                    <div className="text-sm text-gray-600">{it.blurb}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="font-heading">Transparent Pricing</div>
          <div className="text-sm text-gray-600 mt-1">We quote before work begins—no surprises.</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="font-heading">Quality Materials</div>
          <div className="text-sm text-gray-600 mt-1">We use reputable brands and proven methods.</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="font-heading">Clean Worksites</div>
          <div className="text-sm text-gray-600 mt-1">Protective coverings and thorough cleanup included.</div>
        </div>
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow p-5">
        <div className="font-heading text-xl">What we don’t do</div>
        <p className="text-sm text-gray-700 mt-2">
          Major electrical panel work, gas line work, roofing over 1 story, foundation work, or
          projects requiring a general contractor. If a job is outside scope, we’ll refer trusted pros.
        </p>
      </div>
    </div>
  )
}
