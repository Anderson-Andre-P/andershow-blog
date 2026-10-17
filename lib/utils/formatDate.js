import { DEFAULT_LOCALE } from '@/lib/locales'

const formatDate = (date, locale = DEFAULT_LOCALE) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }
  return new Date(date).toLocaleDateString(locale, options)
}

export default formatDate
