import React from 'react'

export default function BeforeAfterSlider({ beforeSrc, afterSrc, alt = '' }: { beforeSrc: string; afterSrc: string; alt?: string }) {
  const [value, setValue] = React.useState(50)

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowLeft') setValue((v) => Math.max(0, v - 5))
    if (e.key === 'ArrowRight') setValue((v) => Math.min(100, v + 5))
  }

  return (
    <div className="relative overflow-hidden rounded-2xl shadow" style={{ height: 320 }}>
      <img src={beforeSrc} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }} aria-hidden>
        <img src={afterSrc} alt={alt} className="w-full h-full object-cover" />
      </div>
      <input
        aria-label="Before/after slider"
        className="absolute left-2 right-2 bottom-4"
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        onKeyDown={onKey}
      />
    </div>
  )
}
