export type Project = {
  slug: string
  title: string
  category: string
  shortDescription: string
  fullDescription: string
  images: string[]
  tags: string[]
  technologies: { name: string; description: string }[]
  challenge: string
  solution: string
}

export const projects: Project[] = [
    {
    slug: 'wedding-memories',
    title: 'Wedding Memories',
    category: 'Web Application',
    shortDescription:
        'Plataforma web que permite convidados de casamento compartilharem fotos instantaneamente através de QR Code, criando uma galeria colaborativa em tempo real.',

    fullDescription:
        'Wedding Memories é uma aplicação web desenvolvida para resolver um problema comum em eventos: centenas de fotos registradas pelos convidados acabam dispersas em celulares e redes sociais e raramente chegam aos noivos. A plataforma permite que convidados escaneiem um QR Code presente no evento e enviem fotos diretamente para uma galeria centralizada acessível por todos. A aplicação foi construída com arquitetura moderna utilizando Next.js e React, com upload de imagens para cloud storage e banco de dados serverless. O foco do projeto foi criar uma experiência extremamente simples para o usuário final, permitindo uploads rápidos diretamente do celular e visualização otimizada das imagens.',

    images: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
        'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&q=80',
    ],

    tags: ['Next.js', 'React', 'TypeScript', 'AWS S3', 'Serverless'],

    technologies: [
        {
        name: 'Next.js',
        description: 'Framework React utilizado para renderização otimizada e estrutura da aplicação'
        },
        {
        name: 'React',
        description: 'Interface baseada em componentes reutilizáveis'
        },
        {
        name: 'TypeScript',
        description: 'Tipagem estática para maior segurança e manutenção do código'
        },
        {
        name: 'Tailwind CSS',
        description: 'Estilização moderna e responsiva baseada em utility classes'
        },
        {
        name: 'AWS S3',
        description: 'Armazenamento escalável de imagens enviadas pelos convidados'
        },
        {
        name: 'Neon Database',
        description: 'Banco de dados PostgreSQL serverless utilizado para armazenar os metadados das fotos'
        }
    ],

    challenge:
        'Em eventos como casamentos, convidados registram muitas fotos, porém essas imagens raramente são compartilhadas com os noivos. A ausência de uma solução simples e centralizada faz com que grande parte dessas memórias se perca.',

    solution:
        'Desenvolvemos uma plataforma extremamente simples de usar onde os convidados apenas escaneiam um QR Code e fazem upload das fotos diretamente do celular. As imagens são enviadas para um armazenamento em nuvem e exibidas em uma galeria colaborativa acessível em tempo real.'
  },
  {
    "slug": "corrida-app",
    "title": "corrida-app – Plataforma de Gestão de Eventos Esportivos",
    "category": "Full Stack",
    "shortDescription": "Aplicação web para criação, inscrição e pagamento em corridas de rua, com dashboard para organizadores e integração com MercadoPago.",
    "fullDescription": "corrida-app é uma plataforma completa para o ecossistema de corridas de rua. De um lado, organizadores podem cadastrar eventos, definir categorias, preços e gerenciar inscrições em um painel administrativo. Do outro, corredores encontram as provas, realizam sua inscrição e efetuam o pagamento de forma simples e segura via MercadoPago. Após a realização do evento, os resultados podem ser publicados e visualizados em rankings interativos. A aplicação foi construída com foco em escalabilidade, performance e experiência do usuário, utilizando as mais modernas ferramentas do ecossistema Next.js.",
    "images": [],
    "tags": ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "MercadoPago", "NextAuth", "React Query"],
    "technologies": [
        {
        "name": "Next.js 15 (App Router)",
        "description": "Framework React com renderização híbrida (SSR/SSG) e API Routes integradas, proporcionando performance e SEO."
        },
        {
        "name": "TypeScript",
        "description": "Tipagem estática para maior robustez e manutenibilidade do código."
        },
        {
        "name": "Prisma + Neon",
        "description": "ORM moderno com suporte a PostgreSQL serverless, garantindo consultas seguras e escaláveis."
        },
        {
        "name": "Tailwind CSS + shadcn/ui",
        "description": "Estilização utilitária combinada com componentes acessíveis e customizáveis, acelerando o desenvolvimento da interface."
        },
        {
        "name": "NextAuth.js (Auth.js)",
        "description": "Sistema de autenticação flexível com suporte a múltiplos provedores e persistência em banco de dados."
        },
        {
        "name": "MercadoPago SDK",
        "description": "Integração direta com a plataforma de pagamentos líder na América Latina, permitindo recebimento via cartão, boleto e Pix."
        },
        {
        "name": "TanStack React Query",
        "description": "Gerenciamento de estado assíncrono e cache de dados, otimizando as chamadas à API."
        },
        {
        "name": "React Hook Form + Zod",
        "description": "Criação de formulários performáticos com validação tipada e integração perfeita com TypeScript."
        },
        {
        "name": "Recharts",
        "description": "Biblioteca de gráficos para exibição de estatísticas e resultados de forma visual e intuitiva."
        }
    ],
    "challenge": "Criar uma plataforma que unifique a experiência de organizadores e participantes de corridas de rua, resolvendo desde a criação do evento até o processamento de pagamentos e a divulgação de resultados, tudo isso com alta disponibilidade e segurança.",
    "solution": "Optou‑se por uma arquitetura serverless com Next.js, que elimina a necessidade de gerenciar servidores e escala automaticamente. O uso de Prisma com Neon permite um banco de dados relacional com custo reduzido e ótima performance. A escolha do MercadoPago atende ao público latino‑americano, oferecendo meios de pagamento locais. O design system com shadcn/ui garante uma interface consistente e acessível, enquanto React Query e React Hook Form mantêm a fluidez na interação do usuário."
  },
  {
  "slug": "mecmind",
  "title": "Mecmind – Plataforma de Análise Inteligente de Desenhos Técnicos",
  "category": "Full Stack",
  "shortDescription": "Sistema web que utiliza IA para interpretar desenhos de peças mecânicas, gerar planos de fabricação e integrar com estoque e perfil da empresa.",
  "fullDescription": "Mecmind é uma aplicação desenvolvida em Django que automatiza a análise de desenhos técnicos para empresas de usinagem. O usuário envia uma imagem do desenho (eixo, chapa, tubo ou conjunto) e o sistema, por meio da API da OpenAI, extrai automaticamente todas as características dimensionais e geométricas. Em uma segunda etapa, essas informações são cruzadas com o perfil da empresa – máquinas disponíveis, processos internos/externos, turnos de trabalho e itens em estoque – para gerar um plano de fabricação completo, incluindo sugestão de matéria-prima, sequência de operações e recomendação de itens do estoque. O sistema também oferece gestão de usuários, controle de limites mensais de análise e um painel administrativo para configuração dos prompts da IA. O resultado é uma ferramenta que reduz drasticamente o tempo de orçamentação e aumenta a precisão no planejamento da produção.",
  "images": [],
  "tags": ["Django", "Python", "OpenAI", "PostgreSQL", "Pydantic", "IA", "Indústria 4.0"],
  "technologies": [
    {
      "name": "Django 5.2",
      "description": "Framework web robusto e seguro, utilizado para toda a lógica de negócio, autenticação, ORM e templates."
    },
    {
      "name": "PostgreSQL",
      "description": "Banco de dados relacional que armazena empresas, usuários, projetos, estoque e registros de uso."
    },
    {
      "name": "OpenAI API (GPT-4 com Visão)",
      "description": "Integração com os modelos de linguagem e visão da OpenAI para extração estruturada de informações de desenhos técnicos e geração de planos de fabricação contextuais."
    },
    {
      "name": "Pydantic",
      "description": "Biblioteca de validação de dados que define schemas rígidos para as respostas da IA, garantindo consistência e tipagem."
    },
    {
      "name": "Python",
      "description": "Linguagem principal do backend, escolhida pela vasta gama de bibliotecas científicas e facilidade de integração com IA."
    },
    {
      "name": "Django Admin",
      "description": "Interface administrativa poderosa para gerenciar usuários, empresas, prompts de IA e mensagens do sistema."
    }
  ],
  "challenge": "Empresas de usinagem gastam horas interpretando manualmente desenhos técnicos e planejando a fabricação, o que é suscetível a erros e atrasos. Além disso, cada empresa possui um parque de máquinas e um estoque únicos, tornando as recomendações genéricas pouco úteis. Era necessário um sistema que combinasse visão computacional com o contexto real da empresa para gerar análises personalizadas e precisas.",
  "solution": "Desenvolveu-se uma plataforma Django que orquestra chamadas à OpenAI em duas etapas: primeiro, extrai as características do desenho usando modelos com visão; depois, alimenta um segundo modelo com o perfil da empresa (máquinas, processos, estoque) para gerar um plano de fabricação sob medida. O sistema também implementa um controle de estoque integrado e um limite mensal de análises, garantindo escalabilidade e aderência às necessidades de cada cliente. O uso de schemas Pydantic assegura que os dados extraídos sejam sempre estruturados e válidos."
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}