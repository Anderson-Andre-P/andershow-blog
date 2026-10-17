import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { LOCALES } from '@/lib/locales'
import { useT } from '@/lib/i18n'

// Remembers the visitor's choice so the browser-language redirect doesn't override it
export const LOCALE_COOKIE = 'NEXT_LOCALE'
const rememberLocale = (locale) => {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`
}

const SHORT_NAMES = { 'en-US': 'EN', 'pt-BR': 'PT' }

// Links to the same page in the other language
const LanguageSwitch = ({ className = '' }) => {
  const { locale, asPath } = useRouter()
  const t = useT()
  const target = LOCALES.find((l) => l !== locale)

  return (
    <NextLink href={asPath} locale={target} legacyBehavior>
      <a
        hrefLang={target}
        lang={target}
        aria-label={t.common.switchLanguage}
        title={t.common.switchLanguage}
        onClick={() => rememberLocale(target)}
        className={`rounded-md border border-zinc-300 px-2 py-1 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-white ${className}`}
      >
        {SHORT_NAMES[target]}
      </a>
    </NextLink>
  )
}

export default LanguageSwitch
