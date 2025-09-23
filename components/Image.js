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

  return <NextImage src={finalSrc} alt={alt} {...rest} />
}

export default Image
