import React from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const samples = [
  { id: 1, name: 'J. Rivera', stars: 5, text: 'Fast, clean, and honest pricing.' },
  { id: 2, name: 'S. Patel', stars: 5, text: 'Fixed my leak the same week.' },
  { id: 3, name: 'A. Morgan', stars: 4, text: 'Friendly and professional.' }
]

export default function Testimonials() {
  const [parent] = useAutoAnimate<HTMLDivElement>()
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % samples.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div ref={parent} className="mt-8">
      <div className="p-4 bg-white rounded-2xl shadow">
        <div className="font-medium">{samples[index].name} — {'★'.repeat(samples[index].stars)}</div>
        <div className="text-sm text-gray-600 mt-2">{samples[index].text}</div>
      </div>
    </div>
  )
}
