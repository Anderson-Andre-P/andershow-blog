import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

// mailto: does nothing when the visitor has no mail app set up (common with webmail users),
// so the click also copies the address and says so.
const EmailButton = ({ className, icon, label = 'Email' }) => {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard
      ?.writeText(siteMetadata.email)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
      .catch(() => {})
  }

  return (
    <a href={`mailto:${siteMetadata.email}`} onClick={copyEmail} className={className}>
      {icon}
      <span aria-live="polite">{copied ? 'Email copied' : label}</span>
    </a>
  )
}

export default EmailButton
