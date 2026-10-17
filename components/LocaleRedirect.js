import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { DEFAULT_LOCALE } from '@/lib/locales'
import { LOCALE_COOKIE } from './LanguageSwitch'

// Browsers set to Brazilian Portuguese get the pt-BR site; every other language gets English.
const preferredLocale = () => {
  const language = (navigator.languages?.[0] || navigator.language || '').toLowerCase()
  return language === 'pt-br' ? 'pt-BR' : DEFAULT_LOCALE
}

// On the first visit, moves the visitor to the same page in their browser's language.
// Once they pick a language with the switch, that choice wins (stored in a cookie).
const LocaleRedirect = () => {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
    if (document.cookie.split('; ').some((c) => c.startsWith(`${LOCALE_COOKIE}=`))) return
    const locale = preferredLocale()
    if (locale !== router.locale) {
      router.replace(router.asPath, undefined, { locale, scroll: false })
    }
    // Only on the first page load, not on every navigation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady])

  return null
}

export default LocaleRedirect
