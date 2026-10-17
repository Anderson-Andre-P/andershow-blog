// Keep in sync with i18n.locales in next.config.js
export const LOCALES = ['en-US', 'pt-BR']
export const DEFAULT_LOCALE = 'en-US'

// Picks the value for a locale from { 'en-US': ..., 'pt-BR': ... }, falling back to English.
// Plain values (strings, numbers, arrays) are returned as they are.
export function localize(value, locale = DEFAULT_LOCALE) {
  if (value && typeof value === 'object' && !Array.isArray(value) && DEFAULT_LOCALE in value) {
    return value[locale] ?? value[DEFAULT_LOCALE]
  }
  return value
}

// URL path for a locale: English has no prefix, Portuguese lives under /pt-BR
export function localePath(path, locale) {
  const clean = path === '/' ? '' : path
  return locale === DEFAULT_LOCALE ? clean || '/' : `/${locale}${clean}`
}
