'use client'
import { useState, useEffect, useRef } from 'react'

const FULL_TEXT = 'DOPE DRIP'
const DURATION  = 1800  // ms for 0→100

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export default function LoaderScreen({ onComplete }: { onComplete: () => void }) {
  const [chars,    setChars]    = useState(0)
  const [progress, setProgress] = useState(0)
  const [exiting,  setExiting]  = useState(false)
  const startRef = useRef<number | null>(null)
  const rafRef   = useRef<number | null>(null)

  // Character reveal — one char every 110ms
  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i++
      setChars(i)
      if (i >= FULL_TEXT.length) clearInterval(id)
    }, 110)
    return () => clearInterval(id)
  }, [])

  // Smooth RAF-driven progress
  useEffect(() => {
    function tick(ts: number) {
      if (startRef.current === null) startRef.current = ts
      const t = Math.min((ts - startRef.current) / DURATION, 1)
      const p = Math.round(easeOutCubic(t) * 100)
      setProgress(p)

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setExiting(true)
        setTimeout(onComplete, 680)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{
        background: '#1E1E1E',
        transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
        transition: exiting ? 'transform 0.65s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
      }}
    >
      <h1
        className="font-display tracking-[0.15em] mb-10"
        style={{ fontSize: 'clamp(64px,9vw,120px)' }}
      >
        {FULL_TEXT.split('').map((char, i) => (
          <span
            key={i}
            style={{
              color:   i < 4 ? 'white' : '#D4FF00',
              opacity: i < chars ? 1 : 0.12,
              transition: 'opacity 0.18s ease',
            }}
          >
            {char}
          </span>
        ))}
      </h1>

      <div
        className="w-56 overflow-hidden"
        style={{ height: '1px', background: '#2A2A2A', borderRadius: '9999px' }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: '#D4FF00',
            borderRadius: '9999px',
          }}
        />
      </div>

      <p className="font-mono text-[11px] text-[#444] tracking-[0.3em] mt-4">
        {progress}%
      </p>
    </div>
  )
}
