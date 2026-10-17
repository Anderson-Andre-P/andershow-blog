import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { primaryButton } from '@/components/buttonStyles'
import { useT } from '@/lib/i18n'

export default function FourZeroFour() {
  const t = useT()
  return (
    <>
      <PageSEO title={`${t.notFound.title} - ${siteMetadata.title}`} />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">{t.notFound.message}</p>
          <p className="mb-8">{t.notFound.hint}</p>
          <Link href="/" className={primaryButton}>
            {t.notFound.back}
          </Link>
        </div>
      </div>
    </>
  )
}
