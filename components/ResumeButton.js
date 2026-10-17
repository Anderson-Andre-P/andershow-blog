import { DocumentDownloadIcon } from '@heroicons/react/outline'
import siteMetadata from '@/data/siteMetadata'
import { localize, useLocale, useT } from '@/lib/i18n'
import { primaryButton } from './buttonStyles'

const ResumeButton = () => {
  const t = useT()
  const locale = useLocale()
  return (
    <a
      className={primaryButton}
      href={localize(siteMetadata.resume, locale)}
      download="Anderson-Eleuterio-Resume.pdf"
    >
      <DocumentDownloadIcon className="h-5 w-5" aria-hidden="true" />
      <span>{t.common.downloadResume}</span>
    </a>
  )
}

export default ResumeButton
