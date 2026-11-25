// Ordered from most recent to oldest.
// `href` is optional. Text that changes per language uses { 'en-US': ..., 'pt-BR': ... }.
const educationData = [
  {
    institution: 'Universidade Federal de Itajubá (UNIFEI)',
    href: 'https://unifei.edu.br/',
    degree: {
      'en-US': "Master's Degree in Computer Science",
      'pt-BR': 'Mestrado em Ciência da Computação',
    },
    period: { 'en-US': 'Jan 2025 — Dec 2027', 'pt-BR': 'jan. 2025 — dez. 2027' },
    highlights: {
      'en-US': [
        'Researching the viability of computer vision models for automated vehicle inspection, with practical applications in industrial and mobility contexts.',
        'Member of Sinapse Labs. Advised by Prof. Bruno Guazzelli Batista.',
        'Coursework includes Data Structures, Software Engineering, and Applied Technology for ASD Treatment.',
      ],
      'pt-BR': [
        'Pesquiso a viabilidade de modelos de visão computacional para inspeção automatizada de veículos, com aplicações práticas em contextos industriais e de mobilidade.',
        'Membro do Sinapse Labs. Orientado pelo Prof. Bruno Guazzelli Batista.',
        'Disciplinas incluem Estruturas de Dados, Engenharia de Software e Tecnologia Aplicada ao Tratamento do TEA.',
      ],
    },
  },
  {
    institution: 'FEPI - Centro Universitário de Itajubá',
    href: 'https://fepi.br/',
    degree: {
      'en-US': "Bachelor's Degree in Information Systems",
      'pt-BR': 'Bacharelado em Sistemas de Informação',
    },
    period: { 'en-US': 'Feb 2020 — Nov 2023', 'pt-BR': 'fev. 2020 — nov. 2023' },
    highlights: {
      'en-US': [
        'Systems design and development, databases, IT infrastructure, and information security.',
        'Built a startup project from idea to a functional prototype.',
      ],
      'pt-BR': [
        'Projeto e desenvolvimento de sistemas, bancos de dados, infraestrutura de TI e segurança da informação.',
        'Desenvolvi um projeto de startup, da ideia a um protótipo funcional.',
      ],
    },
  },
  {
    institution: 'Kultivi',
    href: 'https://kultivi.com/',
    degree: { 'en-US': 'English Course', 'pt-BR': 'Curso de Inglês' },
    period: { 'en-US': 'Nov 2023 — Dec 2024', 'pt-BR': 'nov. 2023 — dez. 2024' },
  },
]

export default educationData
