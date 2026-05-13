'use client'
import { useState, useEffect } from 'react'

export default function LoaderScreen({ onComplete }: { onComplete: () => void }) {
  const [displayedChars, setDisplayedChars] = useState(0)
  const [progress, setProgress] = useState(0)
  const fullText = 'DOPE DRIP'

  useEffect(() => {
    let charIndex = 0
    const charInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setDisplayedChars(charIndex)
        charIndex++
      } else {
        clearInterval(charInterval)
      }
    }, 100)

    return () => clearInterval(charInterval)
  }, [])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(onComplete, 300)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 300)

    return () => clearInterval(progressInterval)
  }, [onComplete])

  return (
    <div style={{background:'#1E1E1E'}} className="fixed inset-0 flex flex-col items-center justify-center z-50">
      <h1 className="font-display tracking-[0.15em] mb-12 text-white" style={{fontSize:'clamp(64px,9vw,120px)'}}>
        {fullText.split('').map((char, i) => (
          <span key={i} style={{color: i < displayedChars ? (i < 4 ? 'white' : '#D4FF00') : '#D4FF00', opacity: i < displayedChars ? 1 : 0.2}}>
            {char}
          </span>
        ))}
        {displayedChars < fullText.length && <span className="animate-pulse">|</span>}
      </h1>

      <div className="w-64 h-1 rounded-full overflow-hidden" style={{background:'#2A2A2A'}}>
        <div
          className="h-full transition-all duration-300"
          style={{width: `${Math.min(progress, 100)}%`, background:'#D4FF00'}}
        />
      </div>

      <p className="text-[#888] text-sm mt-6 font-mono tracking-widest">{Math.round(progress)}%</p>
    </div>
  )
}
