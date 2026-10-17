import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-col items-center gap-3 border-t border-zinc-200 pb-10 pt-8 dark:border-zinc-800">
      <div className="flex space-x-4">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
        <SocialIcon kind="github" href={siteMetadata.github} size="6" />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        &copy; {new Date().getFullYear()} {siteMetadata.author}
      </p>
    </footer>
  )
}
