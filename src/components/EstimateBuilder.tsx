import React from 'react'
import { z } from 'zod'

const LineItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  qty: z.number().min(0),
  unitPrice: z.number().min(0)
})

type LineItem = z.infer<typeof LineItemSchema>

export default function EstimateBuilder() {
  const [items, setItems] = React.useState<LineItem[]>([
    { id: '1', name: 'Basic Visit', qty: 1, unitPrice: 75 },
    { id: '2', name: 'Materials (est)', qty: 1, unitPrice: 30 }
  ])

  const total = items.reduce((s, it) => s + it.qty * it.unitPrice, 0)

  function printEstimate() {
    window.print()
  }

  return (
    <div className="mt-4">
      <div className="space-y-2">
        {items.map((it) => (
          <div key={it.id} className="p-3 bg-white rounded-2xl shadow flex justify-between">
            <div>
              <div className="font-medium">{it.name}</div>
              <div className="text-sm text-gray-500">{it.qty} × ${it.unitPrice}</div>
            </div>
            <div className="text-right font-semibold">${it.qty * it.unitPrice}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">Estimated range: <span className="font-medium">${Math.round(total * 0.9)} - ${Math.round(total * 1.25)}</span></div>
        <div className="flex gap-2">
          <button className="btn px-3 py-2 bg-primary text-white rounded" onClick={printEstimate}>Print</button>
          <a className="btn px-3 py-2 border rounded" href="/contact?estimate=1">Send this estimate</a>
        </div>
      </div>
    </div>
  )
}
