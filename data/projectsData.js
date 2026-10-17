// Each project can link to GitHub, the stores and/or a live demo (shown on its case study page):
// links: { github, playStore, appStore, demo }
// `slug` must match the case study file in data/projects/<slug>.mdx
// `featured: true` projects show up on the homepage (an even number fills the 2-column grid);
// the first one is highlighted on /projects.
// `description` has one text per language (see lib/locales.js).
const projectsData = [
  {
    title: 'Vibraguard',
    slug: 'vibraguard',
    featured: true,
    description: {
      'en-US': `Asset and work order management for maintenance teams. Link devices by QR code, monitor their status and track maintenance work in one app.`,
      'pt-BR': `Gestão de ativos e ordens de serviço para equipes de manutenção. Vincula dispositivos por QR code, monitora o status deles e acompanha a manutenção em um só app.`,
    },
    imgSrc: '/static/images/projects/vibraguard-banner.png',
    links: { github: 'https://github.com/Anderson-Andre-P/vibraguard' },
  },
  {
    title: 'Onboarding and Sign In',
    slug: 'onboarding-and-sign-in',
    featured: true,
    description: {
      'en-US': `An onboarding flow followed by a sign-in screen, with email and password validation and clear error messages.`,
      'pt-BR': `Um fluxo de onboarding seguido de uma tela de login, com validação de e-mail e senha e mensagens de erro claras.`,
    },
    imgSrc: '/static/images/projects/onboarding-and-sign-in-banner.png',
    links: { github: 'https://github.com/Anderson-Andre-P/onboarding_and_signin' },
  },
  {
    title: 'IMC Flutter',
    slug: 'imc-flutter',
    description: {
      'en-US': `A BMI calculator that explains the result, suggests an ideal weight and keeps a history of past measurements.`,
      'pt-BR': `Uma calculadora de IMC que explica o resultado, sugere um peso ideal e guarda o histórico das medições.`,
    },
    imgSrc: '/static/images/projects/imc-banner.png',
    links: { github: 'https://github.com/Anderson-Andre-P/imc_flutter' },
  },
  {
    title: 'QR Code Scanner',
    slug: 'qr-code-scanner',
    featured: true,
    description: {
      'en-US': `Reads QR codes with the camera and creates custom ones for links, contacts, locations and Wi-Fi, ready to share or save.`,
      'pt-BR': `Lê QR codes com a câmera e cria códigos personalizados para links, contatos, localizações e Wi-Fi, prontos para compartilhar ou salvar.`,
    },
    imgSrc: '/static/images/projects/qrcode-banner.png',
    links: { github: 'https://github.com/Anderson-Andre-P/qr_code_scanner' },
  },
  {
    title: 'Strong Password',
    slug: 'strong-password',
    description: {
      'en-US': `Tells users whether their password is strong or weak, with field validation and clear error messages.`,
      'pt-BR': `Mostra se a senha é forte ou fraca, com validação dos campos e mensagens de erro claras.`,
    },
    imgSrc: '/static/images/projects/strong-password-banner.png',
    links: { github: 'https://github.com/Anderson-Andre-P/strong_password' },
  },
  {
    title: 'Zaffre Imóveis',
    slug: 'zaffre-imoveis',
    featured: true,
    description: {
      'en-US': `A real estate app to search properties with filters, publish listings, save favorites and receive push notifications.`,
      'pt-BR': `Um app imobiliário para buscar imóveis com filtros, publicar anúncios, salvar favoritos e receber notificações push.`,
    },
    imgSrc: '/static/images/projects/zaffre/Zaffre-banner.jpg',
    links: { github: 'https://github.com/Anderson-Andre-P/Imobis-Flutter' },
  },
]

export default projectsData
