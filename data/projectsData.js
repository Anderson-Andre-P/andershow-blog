// Each project can link to GitHub, the stores and/or a live demo (shown on its case study page):
// links: { github, playStore, appStore, demo }
// `slug` must match the case study file in data/projects/<slug>.mdx
// `featured: true` projects show up on the homepage (an even number fills the 2-column grid);
// the first one is highlighted on /projects.
const projectsData = [
  {
    title: 'Vibraguard',
    slug: 'vibraguard',
    featured: true,
    description: `Asset and work order management for maintenance teams. Link devices by QR code, monitor their status and track maintenance work in one app.`,
    imgSrc: '/static/images/projects/vibraguard-banner.png',
    links: { github: 'https://github.com/Anderson-Andre-P/vibraguard' },
  },
  {
    title: 'Onboarding and Sign In',
    slug: 'onboarding-and-sign-in',
    featured: true,
    description: `An onboarding flow followed by a sign-in screen, with email and password validation and clear error messages.`,
    imgSrc: '/static/images/projects/onboarding-and-sign-in-banner.png',
    links: { github: 'https://github.com/Anderson-Andre-P/onboarding_and_signin' },
  },
  {
    title: 'IMC Flutter',
    slug: 'imc-flutter',
    description: `A BMI calculator that explains the result, suggests an ideal weight and keeps a history of past measurements.`,
    imgSrc: '/static/images/projects/imc-banner.png',
    links: { github: 'https://github.com/Anderson-Andre-P/imc_flutter' },
  },
  {
    title: 'QR Code Scanner',
    slug: 'qr-code-scanner',
    featured: true,
    description: `Reads QR codes with the camera and creates custom ones for links, contacts, locations and Wi-Fi, ready to share or save.`,
    imgSrc: '/static/images/projects/qrcode-banner.png',
    links: { github: 'https://github.com/Anderson-Andre-P/qr_code_scanner' },
  },
  {
    title: 'Strong Password',
    slug: 'strong-password',
    description: `Tells users whether their password is strong or weak, with field validation and clear error messages.`,
    imgSrc: '/static/images/projects/strong-password-banner.png',
    links: { github: 'https://github.com/Anderson-Andre-P/strong_password' },
  },
  {
    title: 'Zaffre Imóveis',
    slug: 'zaffre-imoveis',
    featured: true,
    description: `A real estate app to search properties with filters, publish listings, save favorites and receive push notifications.`,
    imgSrc: '/static/images/projects/zaffre/Zaffre-banner.png',
    links: { github: 'https://github.com/Anderson-Andre-P/Imobis-Flutter' },
  },
]

export default projectsData
