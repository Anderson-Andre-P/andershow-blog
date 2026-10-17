import NextImage from 'next/image'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const Image = ({ themeAware, src, alt, ...rest }) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (themeAware && !mounted) return null

  const finalSrc =
    themeAware && theme === 'dark' ? src.replace(/(\.png|\.jpg|\.jpeg)$/, '-dark$1') : src

  // `unoptimized` serves the file as is. Netlify's image optimizer (IPX) can't load sharp's native
  // library on this setup, so /_next/image requests fail; images in public/ are already optimized.
  return <NextImage src={finalSrc} alt={alt} unoptimized {...rest} />
}

export default Image
