const siteMetadata = {
  title: 'Andershow Blog',
  author: 'Anderson Eleutério',
  headerTitle: 'Andershow',
  description:
    'Articles on Flutter, mobile and web development, and software architecture: practical lessons from building scalable software for the real world.',
  language: 'en',
  theme: 'system', // system, dark or light
  siteUrl: 'https://anderson-andre.netlify.app',
  siteRepo: 'https://github.com/Anderson-Andre-P',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/profile_pic.png',
  // Put the PDF at public/static/files/ — the "Download resume" button only shows up when the file exists
  resume: '/static/files/andershow_master_resume.pdf',
  socialBanner: '/static/images/banner-card.png',
  email: 'eleu.ander@gmail.com',
  github: 'https://github.com/Anderson-Andre-P',
  linkedin: 'https://www.linkedin.com/in/anderson-andre-pereira/',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. anderson-andre.netlify.app/
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
    posthogAnalyticsId: '', // posthog.init e.g. phc_5yXvArzvRdqtZIsHkEm3Fkkhm3d0bEYUXCaFISzqPSQ
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: 'Anderson-Andre-P/andershow-blog',
      repositoryId: 'R_kgDOJ2tVXg',
      category: 'General',
      categoryId: 'DIC_kwDOJ2tVXs4CbHvG',
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // Place the comment box above the comments. options: bottom, top
      inputPosition: 'bottom',
      // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
      lang: 'en',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: 'https://github.com/Anderson-Andre-P/andershow-blog',
      issueTerm: 'title', // supported options: pathname, url, title
      label: 'Comment 💬', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: 'github-light',
      // theme when dark mode
      darkTheme: 'github-dark',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
