import { useRouter } from 'next/router'
import dictionary from '@/data/i18n'
import { DEFAULT_LOCALE } from './locales'

export * from './locales'

// Interface text for the current locale, e.g. const t = useT(); t.nav.home
export function useT() {
  const { locale } = useRouter()
  return dictionary[locale] || dictionary[DEFAULT_LOCALE]
}

export function useLocale() {
  const { locale } = useRouter()
  return locale || DEFAULT_LOCALE
}
