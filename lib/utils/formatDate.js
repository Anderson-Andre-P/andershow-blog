import siteMetadata from '@/data/siteMetadata'

const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }
  return new Date(date).toLocaleDateString(siteMetadata.locale, options)
}

export default formatDate
