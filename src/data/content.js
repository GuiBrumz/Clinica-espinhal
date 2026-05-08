// ─── Clinic ──────────────────────────────────────────────────────────────────
export const CLINIC_INFO = {
  name:      'Espinhal D.O.R',
  tagline:   'Referência em Tratamentos para Coluna e Dor',
  subtitle:  'Tecnologia, precisão e cuidado especializado para sua qualidade de vida',
  whatsapp:  '5511999999999',
  phone:     '(11) 9 9999-9999',
  email:     'contato@espinhaldor.com.br',
  address:   'Av. Paulista, 1234 – Sala 801, Bela Vista, São Paulo – SP',
  cep:       'CEP: 01310-100',
  hours:     'Seg–Sex 8h–19h · Sáb 8h–13h',
  instagram: 'https://instagram.com/espinhaldor',
  facebook:  'https://facebook.com/espinhaldor',
  youtube:   'https://youtube.com/@espinhaldor',
  linkedin:  'https://linkedin.com/company/espinhaldor',
}

// ─── Stats ───────────────────────────────────────────────────────────────────
export const STATS = [
  { value: 15,    suffix: '+',  label: 'Anos de Experiência',    icon: 'award'       },
  { value: 12000, suffix: '+',  label: 'Pacientes Atendidos',    icon: 'users'       },
  { value: 18,    suffix: '',   label: 'Especialidades',          icon: 'stethoscope' },
  { value: 98,    suffix: '%',  label: 'Satisfação dos Pacientes',icon: 'heart'       },
]

// ─── Doctor ──────────────────────────────────────────────────────────────────
export const DOCTOR = {
  name:  'Dr. André Cavalcanti',
  title: 'Especialista em Coluna Vertebral',
  crm:   'CRM-SP 123.456',
  image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop&crop=face',
  imageWide: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&h=700&fit=crop',
  bio: [
    'Médico com mais de 15 anos dedicados exclusivamente ao diagnóstico e tratamento de patologias da coluna vertebral. Formado pela Faculdade de Medicina da Universidade de São Paulo (FMUSP), com residência médica no Hospital das Clínicas e fellowship em Cirurgia Minimamente Invasiva da Coluna na Johns Hopkins University, Baltimore – EUA.',
    'Fundou a Espinhal D.O.R em 2009 com a missão de oferecer medicina de coluna de alto nível com abordagem verdadeiramente humana: integrando tecnologia de ponta, protocolos baseados em evidências científicas e escuta ativa de cada paciente.',
    'Acredita que o tratamento da dor vai além da técnica — exige empatia, comunicação clara e um plano terapêutico que respeite o ritmo e os objetivos de vida de cada pessoa.',
  ],
  education: [
    { year: '2003', title: 'Graduação em Medicina', institution: 'Universidade de São Paulo – FMUSP' },
    { year: '2005', title: 'Residência em Ortopedia e Traumatologia', institution: 'Hospital das Clínicas – HC/FMUSP' },
    { year: '2007', title: 'Especialização em Coluna Vertebral', institution: 'Instituto de Ortopedia e Traumatologia – IOT' },
    { year: '2009', title: 'Fellowship em Cirurgia Minimamente Invasiva', institution: 'Johns Hopkins University – Baltimore, EUA' },
    { year: '2015', title: 'Master em Dor e Medicina Intervencionista', institution: 'European Spine Society – Viena, Áustria' },
  ],
  certifications: [
    'Fellowship em Cirurgia da Coluna – Johns Hopkins University',
    'Membro da Sociedade Brasileira de Coluna (SBC)',
    'Membro da North American Spine Society (NASS)',
    'Especialista em Procedimentos Minimamente Invasivos',
    'Certificado em Diagnóstico por Imagem Musculoesquelética',
    'Membro do Grupo de Estudos da Coluna – GEC/SBOT',
  ],
  specialties: [
    'Cirurgia minimamente invasiva da coluna',
    'Infiltrações guiadas por imagem',
    'Tratamentos conservadores avançados',
    'Reabilitação pós-operatória',
    'Dor crônica e fibromialgia',
    'Diagnóstico diferencial complexo',
  ],
  philosophy: '"A coluna sustenta a vida. O meu trabalho é garantir que ela nunca impeça você de viver plenamente."',
  achievements: [
    { number: '12.000+', label: 'Pacientes tratados' },
    { number: '500+',    label: 'Procedimentos minimamente invasivos' },
    { number: '15+',     label: 'Anos de especialização' },
    { number: '98%',     label: 'Satisfação dos pacientes' },
  ],
}

// ─── Specialties ─────────────────────────────────────────────────────────────
export const SPECIALTIES = [
  {
    id: 'hernia-disco',
    icon: 'bone',
    title: 'Hérnia de Disco',
    shortDesc: 'Diagnóstico preciso e tratamento conservador ou intervencionista para hérnias cervicais e lombares.',
    fullDesc: 'A hérnia de disco ocorre quando o material do núcleo pulposo do disco intervertebral se desloca para fora de sua posição normal, podendo comprimir estruturas nervosas adjacentes. É uma das condições mais prevalentes na população adulta e frequentemente responsável por dores incapacitantes na coluna cervical e lombar.',
    symptoms: ['Dor localizada ou irradiada para os membros', 'Formigamento ou dormência', 'Fraqueza muscular', 'Dificuldade de movimentação', 'Dor que piora ao sentar ou tossir'],
    treatments: ['Tratamento conservador com fisioterapia', 'Infiltração epidural guiada por imagem', 'Nucleoplastia percutânea', 'Cirurgia minimamente invasiva (casos selecionados)'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
    color: 'from-blue-600 to-brand-600',
  },
  {
    id: 'lombalgia',
    icon: 'activity',
    title: 'Lombalgia Crônica',
    shortDesc: 'Protocolo individualizado para dores lombares persistentes com foco em reabilitação funcional.',
    fullDesc: 'A lombalgia crônica é definida como dor na região lombar com duração superior a 12 semanas. Afeta cerca de 80% da população em algum momento da vida e é a principal causa de afastamento do trabalho no Brasil. Nossa abordagem multidisciplinar integra diagnóstico preciso com plano terapêutico individualizado.',
    symptoms: ['Dor persistente na região lombar', 'Rigidez matinal', 'Dor que irradia para as nádegas ou pernas', 'Limitação funcional nas atividades diárias', 'Alterações posturais compensatórias'],
    treatments: ['Diagnóstico por imagem avançado', 'Programa de reabilitação lombar', 'Infiltrações facetárias', 'Denervação por radiofrequência', 'Pilates clínico especializado'],
    image: 'https://images.unsplash.com/photo-1544991875-5dc1b05f6a30?w=800&h=500&fit=crop',
    color: 'from-brand-600 to-indigo-600',
  },
  {
    id: 'cervicalgia',
    icon: 'wind',
    title: 'Cervicalgia',
    shortDesc: 'Tratamento especializado para dores cervicais, tensão muscular e síndrome facetária cervical.',
    fullDesc: 'A cervicalgia é a dor localizada na região cervical (pescoço) que pode irradiar para os ombros, braços e cabeça. Altamente prevalente em profissionais que trabalham longos períodos em frente ao computador, a condição pode variar de simples tensões musculares a compressões radiculares severas.',
    symptoms: ['Dor e rigidez no pescoço', 'Cefaleia de origem cervical', 'Dor que irradia para os braços', 'Dormência nas mãos', 'Tonturas e zumbidos'],
    treatments: ['Avaliação biomecânica postural', 'Infiltrações cervicais guiadas por imagem', 'Bloqueio de nervo occipital', 'Fisioterapia manual especializada', 'Reeducação postural global'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop',
    color: 'from-cyan-500 to-brand-600',
  },
  {
    id: 'dores-cronicas',
    icon: 'zap',
    title: 'Dores Crônicas',
    shortDesc: 'Abordagem multidisciplinar para controle e eliminação de dores crônicas complexas.',
    fullDesc: 'A dor crônica é uma condição complexa que persiste por mais de 3 meses e frequentemente não responde a tratamentos convencionais. Envolve mecanismos neurobiológicos, psicológicos e sociais que exigem uma abordagem integrativa e personalizada para obter resultados duradouros.',
    symptoms: ['Dor persistente por mais de 3 meses', 'Impacto na qualidade do sono', 'Alterações de humor e ansiedade', 'Limitação nas atividades cotidianas', 'Resistência a tratamentos anteriores'],
    treatments: ['Mapeamento da dor', 'Bloqueios diagnósticos e terapêuticos', 'Estimulação medular', 'Terapia multimodal da dor', 'Acompanhamento interdisciplinar'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop',
    color: 'from-violet-500 to-brand-600',
  },
  {
    id: 'reabilitacao',
    icon: 'heart',
    title: 'Reabilitação Espinhal',
    shortDesc: 'Programa completo de reabilitação com foco na recuperação funcional e prevenção de recidivas.',
    fullDesc: 'A reabilitação espinhal é um programa estruturado de recuperação funcional que visa restaurar força, mobilidade e qualidade de vida após lesões, cirurgias ou condições crônicas da coluna vertebral. Integramos fisioterapia, pilates clínico e tecnologias de biofeedback para resultados superiores.',
    symptoms: ['Limitação funcional pós-lesão', 'Recuperação pós-cirúrgica', 'Recidivas frequentes de dor', 'Descondicionamento muscular', 'Alterações proprioceptivas'],
    treatments: ['Avaliação funcional completa', 'Pilates clínico supervisionado', 'Reeducação neuromuscular', 'Estabilização segmentar', 'Retorno progressivo às atividades'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
    color: 'from-brand-600 to-blue-400',
  },
  {
    id: 'postura',
    icon: 'shield',
    title: 'Postura & Prevenção',
    shortDesc: 'Avaliação postural computadorizada e programa preventivo personalizado para cada perfil.',
    fullDesc: 'A avaliação postural computadorizada utiliza fotogrametria digital para mapear desvios posturais com precisão milimétrica. Com base nesse diagnóstico, desenvolvemos programas preventivos individualizados que corrigem compensações, fortalecem a musculatura estabilizadora e reduzem o risco de lesões.',
    symptoms: ['Desvios posturais visíveis', 'Dor muscular recorrente', 'Assimetria corporal', 'Fadiga postural', 'Histórico de lesões por esforço repetitivo'],
    treatments: ['Biofotogrametria digital', 'Análise da marcha', 'Correção postural global', 'Ergonomia ocupacional', 'Exercícios de estabilização core'],
    image: 'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&h=500&fit=crop',
    color: 'from-teal-500 to-brand-600',
  },
  {
    id: 'estenose',
    icon: 'brain',
    title: 'Estenose do Canal',
    shortDesc: 'Diagnóstico e tratamento de estenose espinhal com tecnologia de imagem de alta resolução.',
    fullDesc: 'A estenose do canal vertebral é o estreitamento do canal espinhal que pode comprimir a medula espinhal ou as raízes nervosas. Mais frequente em adultos acima de 50 anos, manifesta-se principalmente com dor e cansaço nas pernas ao caminhar (claudicação neurogênica).',
    symptoms: ['Dor e fraqueza nas pernas ao caminhar', 'Alívio ao sentar ou curvar-se', 'Dormência bilateral nos membros inferiores', 'Dificuldade progressiva para caminhar', 'Dor lombar associada'],
    treatments: ['Ressonância magnética de alta resolução', 'Infiltrações epidurais', 'Descompressão minimamente invasiva', 'Estabilização vertebral', 'Reabilitação funcional pós-procedimento'],
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=500&fit=crop',
    color: 'from-brand-700 to-blue-500',
  },
  {
    id: 'acompanhamento',
    icon: 'clipboard',
    title: 'Acompanhamento',
    shortDesc: 'Seguimento clínico contínuo e plano terapêutico adaptado à evolução de cada paciente.',
    fullDesc: 'O acompanhamento clínico contínuo é fundamental para garantir resultados duradouros e prevenir recidivas. Na Espinhal D.O.R, cada paciente tem um plano de seguimento personalizado com reavaliações periódicas, ajustes terapêuticos e acesso direto à equipe para dúvidas e intercorrências.',
    symptoms: ['Manutenção de resultados terapêuticos', 'Prevenção de recidivas', 'Monitoramento de condições crônicas', 'Ajuste de medicações e protocolos', 'Suporte contínuo na reabilitação'],
    treatments: ['Consultas de seguimento periódicas', 'Reavalições por imagem quando necessário', 'Ajuste de protocolo terapêutico', 'Orientações de autocuidado', 'Canal direto com o especialista'],
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=500&fit=crop',
    color: 'from-blue-500 to-brand-500',
  },
]

// ─── Treatments ───────────────────────────────────────────────────────────────
export const TREATMENTS = [
  {
    id: 'conservative',
    title: 'Tratamentos Conservadores',
    subtitle: 'A primeira escolha quando possível',
    icon: 'shield',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=500&fit=crop',
    desc: 'Priorizamos sempre as abordagens menos invasivas com maior nível de evidência científica. Nosso programa conservador combina fisioterapia especializada, exercícios terapêuticos e orientações posturais para resolver a maioria dos casos sem procedimentos invasivos.',
    items: ['Fisioterapia manual e instrumental', 'Pilates clínico supervisionado', 'Reeducação postural global (RPG)', 'Terapia por ondas de choque', 'Acupuntura estrutural'],
  },
  {
    id: 'injections',
    title: 'Infiltrações Guiadas por Imagem',
    subtitle: 'Precisão milimétrica no alvo terapêutico',
    icon: 'target',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=700&h=500&fit=crop',
    desc: 'Procedimentos minimamente invasivos guiados por fluoroscopia ou ultrassonografia em tempo real, garantindo precisão máxima no posicionamento do agente terapêutico no local exato da lesão ou fonte de dor.',
    items: ['Infiltração epidural cervical e lombar', 'Bloqueio de facetas articulares', 'Infiltração foraminal seletiva', 'Bloqueio do nervo occipital', 'Infiltração sacroilíaca'],
  },
  {
    id: 'minimally-invasive',
    title: 'Procedimentos Minimamente Invasivos',
    subtitle: 'Alta tecnologia, mínimo impacto',
    icon: 'zap',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&h=500&fit=crop',
    desc: 'Técnicas de última geração que permitem tratar condições complexas da coluna com incisões mínimas, menor sangramento, recuperação mais rápida e menor risco de complicações em comparação à cirurgia convencional.',
    items: ['Denervação por radiofrequência', 'Nucleoplastia percutânea', 'Cifoplastia e vertebroplastia', 'Neuromodulação espinhal', 'Rizólise percutânea'],
  },
  {
    id: 'diagnostics',
    title: 'Diagnóstico por Imagem',
    subtitle: 'Ver para tratar com precisão',
    icon: 'scan',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&h=500&fit=crop',
    desc: 'Utilizamos tecnologia de imagem de alta resolução para diagnóstico diferencial preciso. A qualidade do diagnóstico determina diretamente a eficácia do tratamento escolhido.',
    items: ['Ressonância magnética 3 Tesla', 'Tomografia computadorizada helicoidal', 'Radiografia digital dinâmica', 'Ultrassonografia musculoesquelética', 'Biofotogrametria computadorizada'],
  },
]

// ─── Differentials ───────────────────────────────────────────────────────────
export const DIFFERENTIALS = [
  { icon: 'heart-handshake', title: 'Atendimento Humanizado',   desc: 'Cada paciente é tratado com atenção individualizada. Escutamos, compreendemos e criamos planos terapêuticos únicos.' },
  { icon: 'cpu',             title: 'Tecnologia de Ponta',       desc: 'Equipamentos de última geração para diagnóstico por imagem e tratamentos minimamente invasivos.' },
  { icon: 'graduation-cap', title: 'Equipe Especializada',       desc: 'Profissionais altamente qualificados com formação em centros de referência nacionais e internacionais.' },
  { icon: 'scan',            title: 'Diagnóstico Preciso',        desc: 'Protocolos diagnósticos baseados em evidências científicas para identificar com exatidão a origem da dor.' },
  { icon: 'building',        title: 'Ambiente Premium',           desc: 'Instalações projetadas para oferecer conforto, privacidade e um ambiente terapêutico de alto padrão.' },
  { icon: 'layers',          title: 'Tratamento Integrado',       desc: 'Abordagem integrativa combinando medicina, fisioterapia, pilates clínico e tecnologia em um único local.' },
]

// ─── Values ──────────────────────────────────────────────────────────────────
export const VALUES = [
  { icon: 'crosshair', title: 'Precisão',    desc: 'Cada diagnóstico e tratamento é conduzido com rigor científico e técnico irredutível.' },
  { icon: 'heart',     title: 'Humanidade',  desc: 'Tratamos pessoas, não apenas patologias. O cuidado começa na escuta.' },
  { icon: 'microscope',title: 'Inovação',    desc: 'Protocolos continuamente atualizados com base nas evidências científicas mais recentes.' },
  { icon: 'shield',    title: 'Integridade', desc: 'Transparência absoluta na comunicação, no diagnóstico e na conduta terapêutica.' },
  { icon: 'users',     title: 'Parceria',    desc: 'Uma relação de confiança e colaboração genuína com cada paciente.' },
  { icon: 'award',     title: 'Excelência',  desc: 'O padrão elevado não é diferencial — é requisito mínimo em tudo o que fazemos.' },
]

// ─── Testimonials ────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mariana Oliveira',
    role: 'Professora, 42 anos',
    rating: 5,
    text: 'Sofri com hérnia de disco por mais de 3 anos. Após o tratamento na Espinhal D.O.R, retomei minha vida normal sem dor. O Dr. André e toda a equipe foram excepcionais do primeiro ao último dia.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face',
    before: 'Dor constante, sem mobilidade',
    after:  'Vida plena, praticando yoga',
    condition: 'Hérnia de Disco L4-L5',
    duration: '4 meses de tratamento',
  },
  {
    id: 2,
    name: 'Roberto Carvalho',
    role: 'Engenheiro, 55 anos',
    rating: 5,
    text: 'Fui diagnosticado com estenose do canal. O tratamento foi conduzido com precisão e humanidade. Em 6 meses estava completamente recuperado. Recomendo a todos sem hesitar.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
    before: 'Dificuldade para caminhar',
    after:  'Voltou a correr 5km',
    condition: 'Estenose do Canal Lombar',
    duration: '6 meses de tratamento',
  },
  {
    id: 3,
    name: 'Fernanda Santos',
    role: 'Advogada, 38 anos',
    rating: 5,
    text: 'A cervicalgia limitava meu trabalho e minha vida. O protocolo personalizado da clínica transformou completamente minha qualidade de vida. Estrutura impecável e equipe excepcional.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face',
    before: 'Dores cervicais diárias',
    after:  'Zero dor há 14 meses',
    condition: 'Cervicalgia Crônica',
    duration: '3 meses de tratamento',
  },
  {
    id: 4,
    name: 'Carlos Mendes',
    role: 'Atleta, 29 anos',
    rating: 5,
    text: 'Como atleta, pensava que minha carreira tinha acabado após a lesão na coluna. O tratamento aqui me devolveu ao esporte em tempo recorde. Estrutura incrível, resultados reais.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face',
    before: 'Lesão comprometendo carreira',
    after:  'Competindo novamente',
    condition: 'Lombalgia Aguda + Hérnia',
    duration: '5 meses de tratamento',
  },
  {
    id: 5,
    name: 'Ana Paula Lima',
    role: 'Designer, 47 anos',
    rating: 5,
    text: 'Lombalgia crônica me acompanhava há anos. Diferentes tratamentos sem resultado. Aqui encontrei uma equipe que realmente entendeu meu caso e resolveu definitivamente.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face',
    before: 'Lombalgia sem resposta',
    after:  'Completamente recuperada',
    condition: 'Lombalgia Crônica',
    duration: '7 meses de tratamento',
  },
  {
    id: 6,
    name: 'Paulo Siqueira',
    role: 'Executivo, 62 anos',
    rating: 5,
    text: 'Após uma cirurgia malsucedida em outra clínica, perdi a esperança. A Espinhal D.O.R me devolveu não apenas o alívio da dor, mas a confiança de que poderia me tratar de verdade.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
    before: 'Dor pós-cirúrgica intensa',
    after:  'Qualidade de vida restaurada',
    condition: 'Síndrome Pós-Laminectomia',
    duration: '8 meses de tratamento',
  },
]

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQ_CATEGORIES = [
  {
    category: 'Agendamento & Consultas',
    icon: 'calendar',
    items: [
      {
        question: 'Como funciona a primeira avaliação?',
        answer: 'A avaliação inicial é uma consulta completa de 60 minutos com o especialista. Inclui anamnese detalhada, exame físico, análise de exames de imagem e elaboração do plano terapêutico personalizado. Trazendo exames anteriores, conseguimos ter uma visão mais completa do seu histórico.',
      },
      {
        question: 'Como posso agendar uma avaliação?',
        answer: 'O agendamento é feito de forma simples pelo WhatsApp, telefone ou pelo botão "Agendar Avaliação" no site. Nossa equipe retorna em até 2 horas úteis para confirmar data e horário de sua preferência.',
      },
      {
        question: 'Qual o tempo de espera para o atendimento?',
        answer: 'Trabalhamos com agenda controlada para garantir o tempo necessário de atenção a cada paciente. O tempo de espera médio para primeira consulta é de 3 a 7 dias úteis. Em casos urgentes, avaliamos disponibilidade para encaixe no mesmo dia ou no seguinte.',
      },
    ],
  },
  {
    category: 'Tratamentos & Resultados',
    icon: 'stethoscope',
    items: [
      {
        question: 'Os tratamentos são personalizados para cada paciente?',
        answer: 'Absolutamente. Cada protocolo é desenvolvido individualmente com base no diagnóstico preciso, estilo de vida, objetivos e condições clínicas de cada paciente. Não existe tratamento genérico na Espinhal D.O.R.',
      },
      {
        question: 'Quais tipos de dor e condições são tratadas?',
        answer: 'Tratamos toda a gama de condições espinhais: hérnias de disco (cervical, torácica e lombar), lombalgia aguda e crônica, cervicalgia, estenose do canal vertebral, dores pós-cirúrgicas, escoliose, dores facetárias, ciática e fibromialgia, entre outras.',
      },
      {
        question: 'Quanto tempo dura o tratamento?',
        answer: 'Varia conforme o diagnóstico e a resposta de cada paciente. Casos agudos podem ser resolvidos em 4–8 semanas. Condições crônicas geralmente requerem um acompanhamento de 3–6 meses. O especialista definirá uma previsão após a avaliação inicial.',
      },
      {
        question: 'Qual a taxa de sucesso dos tratamentos?',
        answer: 'Nossa taxa geral de satisfação é de 98%, com mais de 12.000 pacientes tratados ao longo de 15 anos. O sucesso varia conforme a condição e o comprometimento do paciente, mas trabalhamos com metas claras e reavaliamos o protocolo periodicamente para garantir evolução.',
      },
    ],
  },
  {
    category: 'Pagamentos & Convênios',
    icon: 'credit-card',
    items: [
      {
        question: 'A clínica atende por convênio ou plano de saúde?',
        answer: 'Atendemos de forma particular. Nossa estrutura e modelo de atendimento foram desenvolvidos para oferecer o máximo de atenção e personalização, o que requer tempo e recursos que o sistema de convênios não comporta. Trabalhamos com tabela transparente e parcelamento.',
      },
      {
        question: 'Quais formas de pagamento são aceitas?',
        answer: 'Aceitamos cartão de crédito (parcelamento em até 12x), débito, PIX e dinheiro. Oferecemos pacotes de tratamento com condições especiais para pagamento à vista ou em poucas parcelas.',
      },
      {
        question: 'É possível solicitar reembolso do plano de saúde?',
        answer: 'Sim. Fornecemos toda a documentação necessária (nota fiscal, receituário, laudos) para que você solicite reembolso junto ao seu plano de saúde, conforme as regras de cada operadora.',
      },
    ],
  },
  {
    category: 'Estrutura & Localização',
    icon: 'map-pin',
    items: [
      {
        question: 'Onde fica a clínica?',
        answer: 'Estamos localizados na Av. Paulista, 1234 – Sala 801, Bela Vista, São Paulo – SP. A clínica é facilmente acessível pelas estações de metrô Trianon-Masp e Brigadeiro, além de estacionamento no edifício.',
      },
      {
        question: 'Qual o horário de funcionamento?',
        answer: 'Atendemos de segunda a sexta-feira, das 8h às 19h, e aos sábados, das 8h às 13h. Para urgências, temos um canal prioritário pelo WhatsApp.',
      },
    ],
  },
]

// flat list for backward-compat
export const FAQ_ITEMS = FAQ_CATEGORIES.flatMap(c => c.items)

// ─── Gallery ─────────────────────────────────────────────────────────────────
export const GALLERY_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',  alt: 'Sala de tratamento moderna',    label: 'Sala de Tratamento',   category: 'Tratamentos' },
  { id: 2, src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop',  alt: 'Recepção premium',               label: 'Recepção',              category: 'Recepção'    },
  { id: 3, src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop',  alt: 'Consultório especializado',       label: 'Consultório',           category: 'Consultórios'},
  { id: 4, src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',  alt: 'Equipamentos de diagnóstico',     label: 'Diagnóstico',           category: 'Tecnologia'  },
  { id: 5, src: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&h=600&fit=crop', alt: 'Sala de reabilitação',            label: 'Reabilitação',          category: 'Tratamentos' },
  { id: 6, src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop', alt: 'Área de espera premium',          label: 'Área de Espera',        category: 'Recepção'    },
  { id: 7, src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop', alt: 'Corredor clínico',                label: 'Corredor',              category: 'Estrutura'   },
  { id: 8, src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop', alt: 'Consulta médica',                 label: 'Consulta',              category: 'Consultórios'},
]

// ─── Nav links ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Início',              href: '/'                   },
  { label: 'Sobre',               href: '/sobre'              },
  { label: 'Especialidades',      href: '/especialidades'     },
  { label: 'Tratamentos',         href: '/tratamentos'        },
  { label: 'Responsável Técnico', href: '/responsavel-tecnico'},
  { label: 'Estrutura',           href: '/estrutura'          },
  { label: 'Depoimentos',         href: '/depoimentos'        },
  { label: 'FAQ',                 href: '/faq'                },
  { label: 'Contato',             href: '/contato'            },
]
