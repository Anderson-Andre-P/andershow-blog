import { DocumentDownloadIcon } from '@heroicons/react/outline'
import siteMetadata from '@/data/siteMetadata'

const ResumeButton = () => (
  <a
    className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-zinc-800 px-2.5 py-2 font-medium text-white shadow-lg shadow-zinc-800/10 transition selection:bg-white/30 hover:bg-zinc-800/80 hover:shadow-zinc-800/5 focus:ring-zinc-500/40 dark:bg-zinc-100 dark:text-zinc-900 dark:shadow-zinc-100/10 dark:selection:bg-zinc-900/30 dark:hover:bg-zinc-100/80 dark:hover:shadow-zinc-100/5 dark:focus:ring-zinc-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
    href={siteMetadata.resume}
    download="Anderson-Eleuterio-Resume.pdf"
  >
    <DocumentDownloadIcon className="h-6 w-6" aria-hidden="true" />
    <span>Download resume</span>
  </a>
)

export default ResumeButton
