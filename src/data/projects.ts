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
    slug: 'automacao-de-vendas',
    title: 'Automação de Vendas',
    category: 'Workflow',
    shortDescription:
      'Fluxo automatizado de CRM, follow-up por WhatsApp e emissão de notas fiscais.',
    fullDescription:
      'Criamos um ecossistema de automação completo para uma empresa de médio porte que realizava todo o processo comercial manualmente. O sistema integra CRM, disparos automáticos de WhatsApp em momentos estratégicos do funil, geração de propostas e emissão automática de notas fiscais após confirmação de pagamento.',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80',
    ],
    tags: ['n8n', 'WhatsApp API', 'IA'],
    technologies: [
      { name: 'n8n', description: 'Orquestração dos fluxos de automação' },
      { name: 'WhatsApp Business API', description: 'Comunicação automatizada com leads' },
      { name: 'OpenAI GPT-4', description: 'Personalização inteligente das mensagens' },
      { name: 'Webhooks', description: 'Integração em tempo real entre sistemas' },
    ],
    challenge:
      'A equipe comercial gastava 4 horas diárias em tarefas repetitivas: follow-up manual, envio de propostas e emissão de notas, deixando pouco tempo para vendas estratégicas.',
    solution:
      'Automatizamos 100% do processo repetitivo. O vendedor agora só entra em ação nos momentos de decisão. O tempo de resposta para novos leads caiu de horas para menos de 2 minutos.',
  },
  {
    slug: 'ecommerce-de-moda',
    title: 'E-commerce de Moda',
    category: 'E-commerce',
    shortDescription:
      'Loja virtual completa com catálogo inteligente, pagamentos e logística integrada.',
    fullDescription:
      'Desenvolvemos uma loja virtual completa para uma marca de moda feminina que migrava do varejo físico para o digital. O projeto incluiu configuração da plataforma, integração com meios de pagamento, sistema de gestão de estoque em tempo real, configuração de logística com múltiplas transportadoras e implementação de pixel para campanhas de mídia paga.',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
    ],
    tags: ['WooCommerce', 'Pixel', 'SEO'],
    technologies: [
      { name: 'WooCommerce', description: 'Plataforma de e-commerce customizável' },
      { name: 'Meta Pixel', description: 'Rastreamento e otimização de campanhas' },
      { name: 'Melhor Envio API', description: 'Cotação e logística automatizada' },
      { name: 'SEO On-page', description: 'Otimização para busca orgânica' },
    ],
    challenge:
      'A marca tinha forte presença no Instagram mas zero estrutura para converter esse público em vendas online de forma escalável.',
    solution:
      'Criamos uma loja otimizada para conversão mobile-first, integrada ao Instagram Shopping e com checkout simplificado. O Pixel configurado corretamente permitiu campanhas de remarketing precisas.',
  },
  {
    slug: 'dashboard-analitico',
    title: 'Dashboard Analítico',
    category: 'Sistema',
    shortDescription:
      'Painel em tempo real para monitorar KPIs, vendas e performance de campanhas digitais.',
    fullDescription:
      'Desenvolvemos um dashboard executivo centralizado para uma rede de franquias que precisava consolidar dados de múltiplas fontes: ERP, Google Ads, Meta Ads, e-commerce e CRM. O painel exibe KPIs em tempo real com alertas automáticos quando métricas saem do intervalo esperado.',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80',
    ],
    tags: ['React', 'API REST', 'Charts'],
    technologies: [
      { name: 'React + TypeScript', description: 'Frontend tipado e escalável' },
      { name: 'Recharts', description: 'Visualizações de dados interativas' },
      { name: 'Node.js', description: 'Backend para agregação de dados' },
      { name: 'PostgreSQL', description: 'Armazenamento histórico de métricas' },
    ],
    challenge:
      'Os gestores tomavam decisões com base em dados de ontem — ou de semana passada. Relatórios manuais consumiam 6 horas semanais do time de marketing.',
    solution:
      'Um único painel que conecta todas as fontes e atualiza em tempo real. Alertas automáticos por WhatsApp quando ROAS cai abaixo do threshold ou estoque crítico é detectado.',
  },
  {
    slug: 'chatbot-com-ia',
    title: 'Chatbot com IA',
    category: 'IA',
    shortDescription:
      'Assistente virtual treinado com dados da empresa para atendimento automático 24/7.',
    fullDescription:
      'Desenvolvemos um assistente de IA treinado com toda a base de conhecimento de uma clínica médica: procedimentos, preços, convênios, protocolos e FAQs. O chatbot responde dúvidas, agenda consultas, envia lembretes e escala para humanos apenas quando necessário.',
    images: [
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80',
    ],
    tags: ['GPT-4', 'WhatsApp', 'Treinamento'],
    technologies: [
      { name: 'GPT-4 Turbo', description: 'Modelo de linguagem para respostas naturais' },
      { name: 'RAG (Retrieval-Augmented Generation)', description: 'Base de conhecimento personalizada' },
      { name: 'WhatsApp Business API', description: 'Canal principal de atendimento' },
      { name: 'n8n', description: 'Orquestração e integração com agenda' },
    ],
    challenge:
      'A recepção da clínica recebia mais de 200 mensagens diárias no WhatsApp, 60% delas perguntas repetitivas sobre preços e convênios. A equipe estava sobrecarregada e o tempo de resposta ultrapassava 3 horas.',
    solution:
      'O chatbot resolve 80% das dúvidas instantaneamente, 24 horas por dia. A equipe humana passou a focar apenas em casos complexos e agendamentos que exigem julgamento clínico.',
  },
  {
    slug: 'site-institucional',
    title: 'Site Institucional',
    category: 'Site',
    shortDescription:
      'Presença digital completa para escritório de advocacia com SEO local e blog.',
    fullDescription:
      'Criamos a presença digital completa de um escritório de advocacia especializado em direito trabalhista. O projeto incluiu identidade visual digital, site institucional com blog jurídico, otimização para SEO local em três cidades e integração com Google Meu Negócio.',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    ],
    tags: ['WordPress', 'SEO', 'Blog'],
    technologies: [
      { name: 'WordPress', description: 'CMS para gestão autônoma do conteúdo' },
      { name: 'Yoast SEO', description: 'Otimização técnica e on-page' },
      { name: 'Schema Markup', description: 'Dados estruturados para rich snippets' },
      { name: 'Google Search Console', description: 'Monitoramento de performance orgânica' },
    ],
    challenge:
      'O escritório dependia exclusivamente de indicações. Não aparecia nos resultados do Google quando potenciais clientes pesquisavam por advogados trabalhistas na região.',
    solution:
      'Em 4 meses de SEO local, o escritório passou a aparecer na primeira página para 12 termos estratégicos. O blog jurídico trouxe autoridade e gerou consultas orgânicas recorrentes.',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}