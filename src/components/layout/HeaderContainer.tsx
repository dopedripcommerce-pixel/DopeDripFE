'use client'
import { useState, useEffect } from 'react'

export default function HeaderContainer({ children }: { children: React.ReactNode }) {
  const [loaderDone, setLoaderDone] = useState(false)

  useEffect(() => {
    const checkLoader = setInterval(() => {
      if (sessionStorage.getItem('loaderShown')) {
        setLoaderDone(true)
        clearInterval(checkLoader)
      }
    }, 50)

    return () => clearInterval(checkLoader)
  }, [])

  if (!loaderDone) return null

  return <>{children}</>
}
