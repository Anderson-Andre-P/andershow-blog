import { escape } from '@/lib/utils/htmlEscaper'
import { DEFAULT_LOCALE, localize, localePath } from '@/lib/locales'

import siteMetadata from '@/data/siteMetadata'

const generateRssItem = (post, locale) => {
  const url = `${siteMetadata.siteUrl}${localePath(`/blog/${post.slug}`, locale)}`
  return `
  <item>
    <guid>${url}</guid>
    <title>${escape(post.title)}</title>
    <link>${url}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${siteMetadata.email} (${siteMetadata.author})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`
}

const generateRss = (posts, page = 'feed.xml', locale = DEFAULT_LOCALE) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(siteMetadata.title)}</title>
      <link>${siteMetadata.siteUrl}${localePath('/blog', locale)}</link>
      <description>${escape(localize(siteMetadata.description, locale))}</description>
      <language>${locale}</language>
      <managingEditor>${siteMetadata.email} (${siteMetadata.author})</managingEditor>
      <webMaster>${siteMetadata.email} (${siteMetadata.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${siteMetadata.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => generateRssItem(post, locale)).join('')}
    </channel>
  </rss>
`
export default generateRss
