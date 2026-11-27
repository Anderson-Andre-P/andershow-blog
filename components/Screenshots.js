import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import NextImage from 'next/image'

const LABELS = {
  'pt-BR': { group: 'Tema das telas', light: 'Claro', dark: 'Escuro' },
  'en-US': { group: 'Screen theme', light: 'Light', dark: 'Dark' },
}

// Dark captures live in a `dark/` folder next to the light ones, with the same name.
const darkSrc = (src) => src.replace(/\/([^/]+)$/, '/dark/$1')

// Horizontal strip of app screens, used inside project case studies and posts.
// images: [{ src, alt, width, height, noDark? }]. Every screen has a dark capture
// unless `noDark` is set; a switch above the strip flips the whole strip between
// light and dark, starting on the site's current theme.
const Screenshots = ({ images = [] }) => {
  const { locale } = useRouter()
  const { resolvedTheme } = useTheme()
  const [mode, setMode] = useState('light')
  const [touched, setTouched] = useState(false)
  const labels = LABELS[locale] || LABELS['en-US']

  // Follow the site theme until the reader picks a mode on this strip.
  useEffect(() => {
    if (!touched && resolvedTheme) setMode(resolvedTheme === 'dark' ? 'dark' : 'light')
  }, [resolvedTheme, touched])

  const hasDark = images.some((image) => !image.noDark)

  return (
    <div className="not-prose my-8">
      {hasDark && (
        <div
          role="group"
          aria-label={labels.group}
          className="mb-3 inline-flex rounded-full border border-zinc-200 p-0.5 text-sm dark:border-zinc-800"
        >
          {['light', 'dark'].map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={mode === value}
              onClick={() => {
                setTouched(true)
                setMode(value)
              }}
              className={`rounded-full px-3 py-1 transition-colors ${
                mode === value
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
              }`}
            >
              {labels[value]}
            </button>
          ))}
        </div>
      )}
      <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
        {images.map(({ src, alt, width, height, noDark }) => (
          <figure key={src} className="w-40 shrink-0 snap-start sm:w-48">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <NextImage
                src={mode === 'dark' && !noDark ? darkSrc(src) : src}
                alt={alt}
                width={width}
                height={height}
                layout="responsive"
                unoptimized // see components/Image.js
              />
            </div>
            <figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
              {alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default Screenshots
