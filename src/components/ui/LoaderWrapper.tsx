'use client'
import { useState, useEffect } from 'react'
import LoaderScreen from './LoaderScreen'

export default function LoaderWrapper() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('loaderShown')
    if (hasSeenLoader) {
      setShowLoader(false)
    }
  }, [])

  const handleLoaderComplete = () => {
    sessionStorage.setItem('loaderShown', 'true')
    setShowLoader(false)
  }

  return showLoader ? <LoaderScreen onComplete={handleLoaderComplete} /> : null
}
