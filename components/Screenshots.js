import NextImage from 'next/image'

// Horizontal strip of app screens, used inside project case studies.
// images: [{ src, alt, width, height }]
const Screenshots = ({ images = [] }) => (
  <div className="not-prose -mx-4 my-8 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
    {images.map(({ src, alt, width, height }) => (
      <figure key={src} className="w-40 shrink-0 snap-start sm:w-48">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <NextImage
            src={src}
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
)

export default Screenshots
