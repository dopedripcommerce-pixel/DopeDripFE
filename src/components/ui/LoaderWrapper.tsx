'use client'
import { useState, useEffect } from 'react'
import LoaderScreen from './LoaderScreen'

export default function LoaderWrapper() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem('loaderShown')) {
      setShowLoader(false)
      document.body.classList.add('site-ready')
    }
  }, [])

  const handleLoaderComplete = () => {
    sessionStorage.setItem('loaderShown', 'true')
    document.body.classList.add('site-ready')
    setShowLoader(false)
  }

  return showLoader ? <LoaderScreen onComplete={handleLoaderComplete} /> : null
}
