// ─── Clinic ──────────────────────────────────────────────────────────────────
export const CLINIC_INFO = {
  name:      'Espinhal D.O.R',
  tagline:   'Referência em Tratamentos para Coluna e Dor',
  subtitle:  'Tecnologia, precisão e cuidado especializado para sua qualidade de vida',
  whatsapp:  '5551999804716',
  phone:     null,
  email:     'guibrumbatista@gmail.com',
  address:   'Av. Brasil, 888 – Navegantes, Porto Alegre – RS',
  locations: [
    {
      city:         'Porto Alegre',
      street:       'Av. Brasil, 888',
      neighborhood: 'Bairro Navegantes',
      state:        'RS',
      parking:      'Estacionamento disponível',
    },
    {
      city:         'Sapucaia do Sul',
      street:       'Av. João Pereira de Vargas, 500',
      neighborhood: 'Centro',
      state:        'RS',
      parking:      'Desconto em estacionamento parceiro',
    },
    {
      city:         'Gravataí',
      street:       'R. Pref. Ary Tubbs, 665 – Sala 502, 5º andar',
      neighborhood: 'Centro',
      state:        'RS',
      parking:      'Sem estacionamento próprio',
    },
  ],
  hours:     'Seg–Sex · Horário comercial',
  instagram: 'https://instagram.com/clinicaespinhaldor',
  facebook:  'https://facebook.com/clinicaespinhaldor',
  youtube:   null,
  linkedin:  null,
}

// ─── Stats ───────────────────────────────────────────────────────────────────
export const STATS = [
  { value: 21,    suffix: '+',  label: 'Anos de Experiência',         icon: 'award'       },
  { value: 5000,  suffix: '+',  label: 'Procedimentos Realizados',     icon: 'users'       },
  { value: 13,    suffix: '+',  label: 'Anos da Clínica',              icon: 'stethoscope' },
  { value: 3,     suffix: '',   label: 'Unidades no Rio Grande do Sul', icon: 'map-pin'     },
]

// ─── Doctor ──────────────────────────────────────────────────────────────────
export const DOCTOR = {
  name:      'Dr. Elias Fernando Ibarra Mancilla',
  title:     'Especialista em Ortopedia, Traumatologia e Coluna Vertebral',
  crm:       'CRM 36782-RS',
  image:     '/img/Foto-profissional.png',
  imageWide: '/img/Foto-profissional.png',
  bio: [
    'Dr. Elias Fernando Ibarra Mancilla é o responsável técnico e coordenador da equipe cirúrgica da Clínica Espinhal D.O.R., atuando com dedicação ao diagnóstico, tratamento e acompanhamento de pacientes com doenças da coluna vertebral.',
    'Com sólida experiência, lidera uma equipe multidisciplinar composta por especialistas em diferentes subespecialidades, trabalhando de forma integrada para oferecer atendimento individualizado, seguro e baseado nas melhores práticas da medicina moderna.',
    'A Clínica Espinhal D.O.R. tem como missão proporcionar tratamentos eficazes, desde abordagens conservadoras até procedimentos cirúrgicos de alta complexidade, sempre priorizando a qualidade de vida, a recuperação funcional e o bem-estar dos pacientes.',
    'Sob a coordenação do Dr. Elias Fernando Ibarra Mancilla, a equipe mantém o compromisso permanente com a excelência técnica, a atualização científica e o cuidado humanizado em todas as etapas do tratamento.',
  ],
  education: [],
  certifications: [
    'Especialista em Ortopedia e Traumatologia',
    'Ênfase em Cirurgia da Coluna Vertebral',
    'Procedimentos Minimamente Invasivos da Coluna',
    'Infiltrações Guiadas por Fluoroscopia e Ultrassonografia',
    'Radiofrequência e Nucleoplastia',
    'Tratamento Intervencionista da Dor',
  ],
  specialties: [
    'Cirurgia minimamente invasiva da coluna',
    'Infiltrações e bloqueios guiados por imagem',
    'Tratamento de hérnias de disco cervical e lombar',
    'Artrodeses cervicais e lombares',
    'Procedimentos intervencionistas para dor crônica',
    'Doenças degenerativas da coluna vertebral',
  ],
  philosophy: '"Cada paciente merece um diagnóstico preciso e um tratamento individualizado. O meu compromisso é devolver qualidade de vida com segurança, técnica e cuidado humano em cada etapa do tratamento."',
  achievements: [
    { number: '21+',    label: 'Anos de experiência na especialidade' },
    { number: '5.000+', label: 'Procedimentos realizados' },
    { number: '13+',    label: 'Anos da Clínica Espinhal D.O.R' },
    { number: '3',      label: 'Unidades no Rio Grande do Sul' },
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
    treatments: ['Tratamento conservador e orientação clínica', 'Infiltração epidural guiada por imagem', 'Nucleoplastia percutânea', 'Microdiscectomia minimamente invasiva', 'Cirurgia aberta em casos complexos'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
    color: 'from-blue-600 to-brand-600',
  },
  {
    id: 'lombalgia',
    icon: 'activity',
    title: 'Lombalgia Crônica',
    shortDesc: 'Protocolo individualizado para dores lombares persistentes com foco em recuperação funcional.',
    fullDesc: 'A lombalgia crônica é definida como dor na região lombar com duração superior a 12 semanas. Afeta cerca de 80% da população em algum momento da vida e é a principal causa de afastamento do trabalho no Brasil. Nossa abordagem integra diagnóstico preciso com plano terapêutico individualizado.',
    symptoms: ['Dor persistente na região lombar', 'Rigidez matinal', 'Dor que irradia para as nádegas ou pernas', 'Limitação funcional nas atividades diárias', 'Alterações posturais compensatórias'],
    treatments: ['Diagnóstico por imagem especializado', 'Infiltrações facetárias guiadas por imagem', 'Denervação por radiofrequência', 'Bloqueios radiculares', 'Avaliação cirúrgica quando indicado'],
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
    treatments: ['Avaliação clínica especializada', 'Infiltrações cervicais guiadas por imagem', 'Bloqueio de nervo occipital', 'Radiofrequência facetária cervical', 'Cirurgia quando necessário'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop',
    color: 'from-cyan-500 to-brand-600',
  },
  {
    id: 'dores-cronicas',
    icon: 'zap',
    title: 'Dores Crônicas',
    shortDesc: 'Abordagem especializada para controle e tratamento de dores crônicas da coluna vertebral.',
    fullDesc: 'A dor crônica é uma condição complexa que persiste por mais de 3 meses e frequentemente não responde a tratamentos convencionais. Envolve mecanismos neurobiológicos que exigem abordagem especializada, com procedimentos intervencionistas precisos para obter resultados duradouros.',
    symptoms: ['Dor persistente por mais de 3 meses', 'Impacto na qualidade do sono', 'Alterações de humor e ansiedade', 'Limitação nas atividades cotidianas', 'Resistência a tratamentos anteriores'],
    treatments: ['Mapeamento e diagnóstico da dor', 'Bloqueios diagnósticos e terapêuticos', 'Radiofrequência para controle da dor', 'Infiltrações guiadas por imagem', 'Acompanhamento clínico contínuo'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop',
    color: 'from-violet-500 to-brand-600',
  },
  {
    id: 'doencas-degenerativas',
    icon: 'heart',
    title: 'Doenças Degenerativas',
    shortDesc: 'Diagnóstico e tratamento de discopatias, artrose e doenças degenerativas da coluna vertebral.',
    fullDesc: 'As doenças degenerativas da coluna vertebral incluem discopatia degenerativa, artrose, espondilose e espondilolistese — condições que causam dor progressiva, rigidez e limitação funcional. O tratamento adequado depende de diagnóstico preciso e avaliação criteriosa da gravidade de cada caso.',
    symptoms: ['Dor progressiva na coluna', 'Rigidez e limitação de movimento', 'Sensação de desgaste articular', 'Dor que piora ao longo do dia', 'Irradiação para membros'],
    treatments: ['Diagnóstico por imagem especializado', 'Tratamento conservador individualizado', 'Infiltrações e bloqueios articulares', 'Radiofrequência para alívio da dor', 'Cirurgia em casos avançados'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
    color: 'from-brand-600 to-blue-400',
  },
  {
    id: 'escoliose-deformidades',
    icon: 'shield',
    title: 'Escoliose e Deformidades',
    shortDesc: 'Avaliação e tratamento de escoliose, cifose, lordose e fraturas vertebrais.',
    fullDesc: 'A escoliose, a cifose e a lordose são alterações estruturais da coluna vertebral que podem gerar dor, comprometimento funcional e impacto estético. As fraturas vertebrais, frequentes em pacientes osteoporóticos e politraumatizados, também exigem avaliação e conduta especializada.',
    symptoms: ['Assimetria visível na postura', 'Dor na coluna associada à deformidade', 'Limitação de movimentos', 'Alteração progressiva da postura', 'Dor pós-traumática na coluna'],
    treatments: ['Avaliação clínica e de imagem', 'Tratamento conservador monitorado', 'Acompanhamento periódico da progressão', 'Tratamento cirúrgico de deformidades', 'Tratamento de fraturas vertebrais'],
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
    treatments: ['Diagnóstico por ressonância magnética', 'Infiltrações epidurais guiadas por imagem', 'Descompressão minimamente invasiva', 'Laminectomia aberta em casos graves', 'Estabilização vertebral quando indicado'],
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=500&fit=crop',
    color: 'from-brand-700 to-blue-500',
  },
  {
    id: 'acompanhamento',
    icon: 'clipboard',
    title: 'Acompanhamento',
    shortDesc: 'Seguimento clínico contínuo e plano terapêutico adaptado à evolução de cada paciente.',
    fullDesc: 'O acompanhamento clínico contínuo é fundamental para garantir resultados duradouros e prevenir recidivas. Na Espinhal D.O.R, cada paciente tem um plano de seguimento personalizado com reavaliações periódicas, ajustes terapêuticos e suporte próximo em todas as etapas do tratamento.',
    symptoms: ['Manutenção de resultados terapêuticos', 'Prevenção de recidivas', 'Monitoramento de condições crônicas', 'Ajuste de medicações e protocolos', 'Suporte contínuo na recuperação'],
    treatments: ['Consultas de seguimento periódicas', 'Reavaliações por imagem quando necessário', 'Ajuste de protocolo terapêutico', 'Orientações de autocuidado', 'Atendimento exclusivo de casos próprios'],
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=500&fit=crop',
    color: 'from-blue-500 to-brand-500',
  },
]

// ─── Treatments ───────────────────────────────────────────────────────────────
export const TREATMENTS = [
  {
    id: 'conservative',
    title: 'Tratamento Conservador',
    subtitle: 'A primeira escolha quando possível',
    icon: 'shield',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=700&h=500&fit=crop',
    desc: 'Priorizamos sempre as abordagens menos invasivas com maior nível de evidência científica. O tratamento conservador inclui orientações clínicas, medicamentosas e encaminhamento para fisioterapia especializada, buscando resolução sem procedimentos invasivos sempre que possível.',
    items: ['Avaliação clínica e diagnóstico preciso', 'Orientação medicamentosa individualizada', 'Encaminhamento para fisioterapia especializada', 'Monitoramento e reavaliação periódica', 'Orientações de atividade física e postura'],
  },
  {
    id: 'injections',
    title: 'Infiltrações Guiadas por Imagem',
    subtitle: 'Precisão milimétrica no alvo terapêutico',
    icon: 'target',
    image: 'https://images.unsplash.com/photo-1563233987-35f9d4b9a861?w=700&h=500&fit=crop',
    desc: 'Procedimentos minimamente invasivos guiados por fluoroscopia ou ultrassonografia em tempo real, garantindo precisão máxima no posicionamento do agente terapêutico no local exato da lesão ou fonte de dor.',
    items: ['Infiltração epidural cervical e lombar', 'Bloqueio de facetas articulares', 'Infiltração foraminal seletiva', 'Bloqueio do nervo occipital', 'Infiltração sacroilíaca'],
  },
  {
    id: 'minimally-invasive',
    title: 'Procedimentos Minimamente Invasivos',
    subtitle: 'Alta tecnologia, mínimo impacto',
    icon: 'zap',
    image: 'https://images.unsplash.com/photo-1757152962882-6bf8495b324d?w=700&h=500&fit=crop',
    desc: 'Técnicas de última geração que permitem tratar condições complexas da coluna com incisões mínimas, menor sangramento, recuperação mais rápida e menor risco de complicações em comparação à cirurgia convencional.',
    items: ['Radiofrequência para dor facetária e crônica', 'Nucleoplastia percutânea', 'Microdiscectomia minimamente invasiva', 'Descompressão minimamente invasiva', 'Artrodese e fixação percutânea'],
  },
  {
    id: 'diagnostics',
    title: 'Diagnóstico por Imagem',
    subtitle: 'Ver para tratar com precisão',
    icon: 'scan',
    image: 'https://images.unsplash.com/photo-1666214280352-db292c05fd80?w=700&h=500&fit=crop',
    desc: 'Utilizamos tecnologia de imagem para diagnóstico diferencial preciso. Contamos com ultrassonografia própria para procedimentos guiados, e encaminhamos para clínicas parceiras de referência para ressonância magnética e tomografia.',
    items: ['Ultrassonografia musculoesquelética (própria)', 'Guia por fluoroscopia em procedimentos', 'Ressonância magnética (clínicas parceiras)', 'Tomografia computadorizada (clínicas parceiras)', 'Radiografia digital'],
  },
]

// ─── Differentials ───────────────────────────────────────────────────────────
export const DIFFERENTIALS = [
  { icon: 'heart-handshake', title: 'Atendimento Humanizado',  desc: 'Cada paciente é tratado com atenção individualizada. Escutamos, compreendemos e criamos planos terapêuticos únicos.' },
  { icon: 'cpu',             title: 'Tecnologia de Ponta',      desc: 'Equipamentos de última geração para diagnóstico e tratamentos minimamente invasivos guiados por fluoroscopia e ultrassonografia.' },
  { icon: 'graduation-cap', title: 'Especialização em Coluna', desc: 'Mais de 21 anos dedicados exclusivamente ao diagnóstico e tratamento das doenças da coluna vertebral e do tratamento da dor.' },
  { icon: 'scan',            title: 'Diagnóstico Preciso',       desc: 'Protocolos diagnósticos baseados em evidências científicas para identificar com exatidão a origem da dor.' },
  { icon: 'building',        title: 'Três Unidades no RS',       desc: 'Atendimento em Porto Alegre, Sapucaia do Sul e Gravataí — mais acesso e comodidade para pacientes de toda a região metropolitana.' },
  { icon: 'layers',          title: 'Tratamento Completo',       desc: 'Do diagnóstico ao pós-operatório: acompanhamento próximo em todas as etapas, com plano terapêutico individualizado para cada caso.' },
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
    text: 'Sofri com hérnia de disco por mais de 3 anos. Após o tratamento na Espinhal D.O.R, retomei minha vida normal sem dor. O Dr. Elias e toda a equipe foram excepcionais do primeiro ao último dia.',
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
        answer: 'A avaliação inicial é uma consulta completa com o especialista. Inclui anamnese detalhada, exame físico, análise de exames de imagem e elaboração do plano terapêutico personalizado. Trazendo exames anteriores, conseguimos ter uma visão mais completa do seu histórico.',
      },
      {
        question: 'Como posso agendar uma avaliação?',
        answer: 'O agendamento é feito pelo WhatsApp ou pelo botão "Agendar Avaliação" no site. Nossa equipe retorna em até 2 horas úteis para confirmar data e horário de sua preferência.',
      },
      {
        question: 'Qual o tempo de espera para o atendimento?',
        answer: 'Trabalhamos com agenda controlada para garantir o tempo necessário de atenção a cada paciente. Em casos urgentes, avaliamos disponibilidade para encaixe. Entre em contato pelo WhatsApp para verificar a agenda.',
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
        answer: 'Tratamos toda a gama de condições espinhais: hérnias de disco (cervical, torácica e lombar), lombalgia aguda e crônica, cervicalgia, estenose do canal vertebral, dores pós-cirúrgicas, escoliose, doenças degenerativas, ciatalgia, fibromialgia e dores crônicas musculoesqueléticas, entre outras.',
      },
      {
        question: 'Quanto tempo dura o tratamento?',
        answer: 'Varia conforme o diagnóstico e a resposta de cada paciente. Casos agudos podem ser resolvidos em poucas semanas. Condições crônicas geralmente requerem acompanhamento de meses. O especialista definirá uma previsão após a avaliação inicial.',
      },
      {
        question: 'A clínica atende pós-operatório de outros médicos?',
        answer: 'A Espinhal D.O.R realiza acompanhamento pós-operatório exclusivamente dos casos tratados pelo próprio Dr. Elias. Para casos operados por outros profissionais, recomendamos contato prévio pelo WhatsApp para avaliação da situação.',
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
        answer: 'Atendemos em três unidades no Rio Grande do Sul: Porto Alegre (Av. Brasil, 888 – Bairro Navegantes), Sapucaia do Sul (Av. João Pereira de Vargas, 500 – Centro) e Gravataí (R. Pref. Ary Tubbs, 665 – 5º andar – Centro). Entre em contato pelo WhatsApp para informações de acesso e disponibilidade em cada unidade.',
      },
      {
        question: 'Qual o horário de funcionamento?',
        answer: 'Atendemos de segunda a sexta-feira em horário comercial. Não realizamos atendimentos aos finais de semana, feriados ou em regime de plantão. O atendimento é exclusivamente eletivo.',
      },
      {
        question: 'Tem estacionamento?',
        answer: 'Depende da unidade. Porto Alegre conta com estacionamento disponível. Em Sapucaia do Sul há desconto em estacionamento parceiro. Em Gravataí não há estacionamento próprio. Mais detalhes podem ser obtidos pelo WhatsApp ao agendar sua consulta.',
      },
    ],
  },
]

// flat list for backward-compat
export const FAQ_ITEMS = FAQ_CATEGORIES.flatMap(c => c.items)

// ─── Gallery ─────────────────────────────────────────────────────────────────
export const GALLERY_IMAGES = [
  // ── Unidades (fotos reais Google Maps) ───────────────────────────────────
  { id:  1, src: 'https://sapucaiaclinicas.com.br/wp-content/uploads/2024/05/2024-04-04.jpg',          alt: 'Fachada Sapucaia Clínicas',       label: 'Fachada – Sapucaia do Sul', category: 'Unidades'    },
  { id:  2, src: '/img/porto-alegre-fachada.webp',                                                     alt: 'Unidade Porto Alegre',            label: 'Fachada – Porto Alegre',    category: 'Unidades'    },
  { id:  3, src: '/img/sapucaia-fachada-2.jpg',                                                        alt: 'Vista lateral Sapucaia Clínicas', label: 'Vista – Sapucaia do Sul',   category: 'Unidades'    },
  { id:  4, src: '/img/sapucaia-entrada.webp',                                                         alt: 'Entrada Sapucaia Clínicas',       label: 'Entrada – Sapucaia do Sul', category: 'Unidades'    },
  // ── Recepção & Espera ────────────────────────────────────────────────────
  { id:  5, src: '/img/sapucaia-sala-espera.webp',                                                     alt: 'Sala de espera da clínica',       label: 'Sala de Espera',            category: 'Recepção'    },
  // ── Consultórios ─────────────────────────────────────────────────────────
  { id:  6, src: '/img/sapucaia-consultorio-1.webp',                                                   alt: 'Consultório médico',              label: 'Consultório',               category: 'Consultórios'},
  { id:  7, src: '/img/sapucaia-consultorio-2.webp',                                                   alt: 'Consultório médico',              label: 'Consultório',               category: 'Consultórios'},
  { id:  8, src: '/img/sapucaia-consultorio-3.webp',                                                   alt: 'Consultório com maca',            label: 'Sala de Exame',             category: 'Consultórios'},
  // ── Tecnologia ───────────────────────────────────────────────────────────
  { id:  9, src: '/img/sapucaia-ecografia.webp',                                                       alt: 'Equipamento de ecografia',        label: 'Ecografia',                 category: 'Tecnologia'  },
]

// ─── Nav links ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Início',              href: '/'                   },
  { label: 'Sobre',               href: '/sobre'              },
  { label: 'Especialidades',      href: '/especialidades'     },
  { label: 'Tratamentos',         href: '/tratamentos'        },
  { label: 'Localização',          href: '/estrutura'          },
  { label: 'Contato',             href: '/contato'            },
]
