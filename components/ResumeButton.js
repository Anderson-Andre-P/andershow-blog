import { DocumentDownloadIcon } from '@heroicons/react/outline'
import siteMetadata from '@/data/siteMetadata'
import { primaryButton } from './buttonStyles'

const ResumeButton = () => (
  <a className={primaryButton} href={siteMetadata.resume} download="Anderson-Eleuterio-Resume.pdf">
    <DocumentDownloadIcon className="h-5 w-5" aria-hidden="true" />
    <span>Download resume</span>
  </a>
)

export default ResumeButton
