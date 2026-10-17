// Ordered from most recent to oldest.
// Use `highlights` for a bullet list and/or `description` for paragraphs.
// `href` is optional: leave it out when the company has no working website.
// Text that changes per language uses { 'en-US': ..., 'pt-BR': ... } (see lib/locales.js).
const experienceData = [
  {
    company: 'DDMX',
    href: 'https://ddmx.com.br/',
    logo: '/static/images/logos/ddmx_logo.png',
    role: { 'en-US': 'Mobile Developer', 'pt-BR': 'Desenvolvedor Mobile' },
    level: { 'en-US': 'Mid-Level', 'pt-BR': 'Pleno' },
    period: { 'en-US': 'Nov 2024 — Current', 'pt-BR': 'nov. 2024 — atual' },
    startYear: 2024,
    highlights: {
      'en-US': [
        'Maintain and evolve seven B2B apps in production on Google Play and the App Store, from architecture and new features to testing, builds, and releases.',
        'Cross-platform mobile application development with Flutter (iOS and Android), delivering smooth, responsive, and scalable user experiences.',
        'Maintenance and enhancement of native Android applications in Java, as well as hybrid development integrating Flutter, Kotlin, and Swift to maximize performance and compatibility.',
        'Implementation of real-time video monitoring using external SDKs, ensuring stability and high performance in video streaming.',
        'Design and integration of new features, focused on usability, UX, and delivering customer value.',
        'Performance optimization of mobile applications, reducing response times and resource consumption.',
        'Migration and upgrade of projects to null safety, improving code security and stability.',
        'Integration of maps and geolocation features for real-time tracking and positioning, including performance optimization for map rendering.',
        'DAO (Data Access Object) integration for efficient data management and persistence.',
        'Use of WebSockets for real-time communication and dynamic map updates.',
        'Application of usability heuristics to improve user experience and streamline interaction flows.',
      ],
      'pt-BR': [
        'Mantenho e evoluo sete apps B2B em produção no Google Play e na App Store, da arquitetura e novas funcionalidades a testes, builds e publicações.',
        'Desenvolvimento de aplicativos multiplataforma com Flutter (iOS e Android), com experiências fluidas, responsivas e escaláveis.',
        'Manutenção e evolução de aplicativos Android nativos em Java, além de desenvolvimento híbrido integrando Flutter, Kotlin e Swift para melhorar desempenho e compatibilidade.',
        'Implementação de monitoramento de vídeo em tempo real com SDKs externos, garantindo estabilidade e alto desempenho no streaming.',
        'Design e integração de novas funcionalidades, com foco em usabilidade, UX e valor para o cliente.',
        'Otimização de desempenho dos aplicativos, reduzindo tempos de resposta e consumo de recursos.',
        'Migração e atualização de projetos para null safety, melhorando a segurança e a estabilidade do código.',
        'Integração de mapas e geolocalização para rastreamento e posicionamento em tempo real, incluindo otimização da renderização dos mapas.',
        'Integração de DAOs (Data Access Objects) para gerenciamento e persistência de dados eficientes.',
        'Uso de WebSockets para comunicação em tempo real e atualização dinâmica de mapas.',
        'Aplicação de heurísticas de usabilidade para melhorar a experiência do usuário e simplificar fluxos de interação.',
      ],
    },
  },
  {
    company: 'IE Tecnologia',
    href: 'https://www.ietecnologia.com/',
    logo: '/static/images/logos/ie_tecnologia_logo.png',
    role: { 'en-US': 'Mobile Developer', 'pt-BR': 'Desenvolvedor Mobile' },
    level: { 'en-US': 'Junior', 'pt-BR': 'Júnior' },
    period: { 'en-US': 'Apr 2023 — Nov 2023', 'pt-BR': 'abr. 2023 — nov. 2023' },
    startYear: 2023,
    highlights: {
      'en-US': [
        'Changed the API query architecture, reducing latency by 92% and developing data download functionality in CSV format to mitigate server overload.',
        'Implemented loading functionality with async data cache, cutting latency from 15s to 3s on incremental loads.',
        'Created new features to improve the panel, increasing user intuitiveness.',
        'Guided professionals with different experience levels, ensuring technical excellence and promoting collaborative learning.',
      ],
      'pt-BR': [
        'Mudei a arquitetura de consultas à API, reduzindo a latência em 92%, e desenvolvi o download de dados em CSV para diminuir a sobrecarga do servidor.',
        'Implementei carregamento com cache assíncrono de dados, reduzindo a latência de 15 s para 3 s nos carregamentos incrementais.',
        'Criei novas funcionalidades para o painel, tornando-o mais intuitivo para os usuários.',
        'Orientei profissionais de diferentes níveis de experiência, garantindo qualidade técnica e promovendo o aprendizado colaborativo.',
      ],
    },
  },
  {
    company: 'Foursys - Soluções em TI',
    href: 'https://www.foursys.com.br/',
    logo: '/static/images/logos/foursys_logo.png',
    role: { 'en-US': 'Mobile Developer', 'pt-BR': 'Desenvolvedor Mobile' },
    level: { 'en-US': 'Junior', 'pt-BR': 'Júnior' },
    period: { 'en-US': 'Oct 2022 — Feb 2023', 'pt-BR': 'out. 2022 — fev. 2023' },
    startYear: 2022,
    highlights: {
      'en-US': [
        'Gained experience in teamwork and communication, applying Scrum methodology.',
        'Refactored codebases, improving performance and stability.',
        'Resolved ~85% of reported bugs and introduced new features, boosting engagement.',
        'Integrated software with APIs, improving data accessibility and functionality.',
      ],
      'pt-BR': [
        'Ganhei experiência em trabalho em equipe e comunicação, aplicando a metodologia Scrum.',
        'Refatorei bases de código, melhorando desempenho e estabilidade.',
        'Resolvi cerca de 85% dos bugs reportados e entreguei novas funcionalidades, aumentando o engajamento.',
        'Integrei o software a APIs, melhorando o acesso aos dados e as funcionalidades.',
      ],
    },
  },
  {
    company: 'Foursys - Soluções em TI',
    href: 'https://www.foursys.com.br/',
    logo: '/static/images/logos/foursys_logo.png',
    role: { 'en-US': 'Mobile Developer', 'pt-BR': 'Desenvolvedor Mobile' },
    level: { 'en-US': 'Intern', 'pt-BR': 'Estagiário' },
    period: { 'en-US': 'Apr 2022 — Oct 2022', 'pt-BR': 'abr. 2022 — out. 2022' },
    startYear: 2022,
    description: {
      'en-US': [
        'I actively participated in the design of product interfaces seeking to provide a good user experience for customers of the product developed by applying design thinking techniques during the process of creating a virtual store for a company specialized in selling Apple cell phones.',
        'In another project, I implemented features using programming logic with the Dart programming language in a project that used Flutter to create high-quality applications for Android, iOS and the Web.',
        'In these two projects I was able to develop my communication and writing skills in addition to gaining experience in teamwork in creating software using the agile Scrum methodology.',
      ],
      'pt-BR': [
        'Participei ativamente do design das interfaces do produto, buscando uma boa experiência para os clientes, aplicando técnicas de design thinking na criação de uma loja virtual para uma empresa especializada na venda de celulares Apple.',
        'Em outro projeto, implementei funcionalidades com a linguagem Dart em um projeto que usava Flutter para criar aplicativos de alta qualidade para Android, iOS e Web.',
        'Nesses dois projetos, desenvolvi minhas habilidades de comunicação e escrita, além de ganhar experiência em trabalho em equipe na criação de software com a metodologia ágil Scrum.',
      ],
    },
  },
  {
    company: 'Procon',
    logo: '/static/images/logos/procon_logo.png',
    role: { 'en-US': 'Web Developer', 'pt-BR': 'Desenvolvedor Web' },
    level: { 'en-US': 'Intern', 'pt-BR': 'Estagiário' },
    period: { 'en-US': 'Sep 2021 — Dec 2021', 'pt-BR': 'set. 2021 — dez. 2021' },
    startYear: 2021,
    description: {
      'en-US': ['I participated in the development of web applications with Angular.'],
      'pt-BR': ['Participei do desenvolvimento de aplicações web com Angular.'],
    },
  },
]

export default experienceData
