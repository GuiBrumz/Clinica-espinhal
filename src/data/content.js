// ─── Clinic ──────────────────────────────────────────────────────────────────
export const CLINIC_INFO = {
  name:      'Espinhal D.O.R',
  tagline:   'Referência em Tratamentos para Coluna e Dor',
  subtitle:  'Tecnologia, precisão e cuidado especializado para sua qualidade de vida',
  whatsapp:  '5551999804716',
  phone:     null,
  email:     'clinicaespinhaldor@gmail.com',
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
  title:     'Médico em Ortopedia, Traumatologia e Coluna Vertebral',
  crm:       'CRM 36782-RS',
  image:     '/img/Doutor.jpeg',
  imageWide: '/img/Doutor.jpeg',
  bio: [
    'Dr. Elias Fernando Ibarra Mancilla é o responsável técnico e coordenador da equipe cirúrgica da Clínica Espinhal D.O.R., atuando no diagnóstico, tratamento e acompanhamento de pacientes com doenças da coluna vertebral.',
    'Ao longo de sua trajetória profissional, participa da condução de casos clínicos e cirúrgicos em conjunto com uma equipe multidisciplinar formada por médicos de diferentes áreas de atuação, promovendo uma abordagem integrada e individualizada para cada paciente.',
    'A Clínica Espinhal D.O.R. realiza atendimentos voltados ao tratamento das doenças da coluna vertebral, oferecendo desde abordagens conservadoras até procedimentos cirúrgicos, conforme a indicação médica e as necessidades de cada caso.',
    'Sob sua coordenação, a equipe mantém compromisso permanente com a atualização científica, o atendimento humanizado e o acompanhamento contínuo dos pacientes em todas as etapas do tratamento.',
  ],
  education: [],
  certifications: [
    'Médico em Ortopedia e Traumatologia',
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
    image: 'https://images.unsplash.com/photo-1772122028898-1640a4dd2d7f?w=800&h=500&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1540205895360-4ad4cffb3aa8?w=800&h=500&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1701826510629-051bb954fb8f?w=800&h=500&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1585917138424-61cf3ee524d9?w=800&h=500&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1728347037609-d59ba357b703?w=800&h=500&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1768507423533-b87b62769758?w=800&h=500&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1666214275099-0ca566aefe26?w=800&h=500&fit=crop',
    color: 'from-brand-700 to-blue-500',
  },
  {
    id: 'acompanhamento',
    icon: 'clipboard',
    title: 'Acompanhamento',
    shortDesc: 'Seguimento clínico contínuo e plano terapêutico adaptado à evolução de cada paciente.',
    fullDesc: 'O acompanhamento clínico contínuo é fundamental para garantir resultados duradouros e prevenir recidivas. Na Espinhal D.O.R, cada paciente tem um plano de seguimento personalizado com reavaliações periódicas, ajustes terapêuticos e suporte próximo em todas as etapas do tratamento.',
    noExpand: true,
    symptoms: ['Manutenção dos resultados terapêuticos', 'Prevenção de recidivas', 'Monitoramento de condições crônicas', 'Ajuste de medicações e protocolos', 'Suporte contínuo na recuperação'],
    treatments: ['Consultas de seguimento periódicas', 'Reavaliações por imagem quando necessário', 'Ajuste de protocolo terapêutico', 'Orientações de autocuidado', 'Atendimento exclusivo de casos próprios'],
    image: 'https://images.unsplash.com/photo-1758691462814-485c3672e447?w=800&h=500&fit=crop',
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
    name: 'Kely Alves',
    role: 'Pós-cirurgia de coluna',
    rating: 5,
    text: 'Há uns 2 anos comecei a sentir desconforto nos tornozelos, que intensificou muito com a gestação. Procurei um ortopedista e ele me disse que poderia ser algum problema na coluna. Fizemos os exames e ontem à noite fiz o procedimento cirúrgico, e estou incrédula que não sinto mais nenhuma dor nos pés, nem lombar, nem costas. Sentia desconforto e dores o tempo todo, e quando acordei da cirurgia não sentia mais nada. Quero agradecer ao Dr. Elias Fernando e toda a sua equipe; desde a primeira consulta foi muito conhecimento, todas as perguntas respondidas, um profissional maravilhoso!',
    image: 'https://ui-avatars.com/api/?name=Kely+Alves&background=dbeafe&color=1d4ed8&size=120',
  },
  {
    id: 2,
    name: 'Kimberly Tavares',
    role: 'Paciente, 19 anos',
    rating: 5,
    text: 'Sou a Kimberly, tenho 19 anos e sofro de dores crônicas. Passei um ano tentando, pelo convênio, conseguir respostas para o meu problema, até que perdi a paciência e decidi procurar o Dr. Fernando, pois ele já havia tratado da minha mãe com muito sucesso. Já nas primeiras consultas, saí com respostas claras e me senti acolhida. Ele sugeriu a realização de um bloqueio, que fiz há exatamente duas semanas. Antes disso, sentia dores todos os dias, e havia momentos em que as crises eram tão intensas que precisava tomar remédios fortes e, muitas vezes, não conseguia nem andar. Hoje, apenas duas semanas após o procedimento, já percebo uma melhora muito significativa: consigo realizar atividades simples do dia a dia que antes eram um desafio, voltei a caminhar com mais facilidade e tenho vivido dias inteiros sem dor, algo que eu já não lembrava como era. Essa mudança tem me devolvido qualidade de vida, ânimo e esperança de seguir minha rotina com mais leveza. Quero deixar meu agradecimento ao Dr. Fernando, por toda atenção, dedicação e franqueza em buscar resolver meu problema, e também à Sabrina, pelo acolhimento e por sempre estar disposta a tirar minhas dúvidas.',
    image: 'https://ui-avatars.com/api/?name=Kimberly+Tavares&background=dbeafe&color=1d4ed8&size=120',
  },
  {
    id: 3,
    name: 'Felipe Saraiva',
    role: 'Tratamento de coluna',
    rating: 5,
    text: 'Passando para agradecer até o momento tudo que o senhor fez e faz para melhorar minha doença da coluna. Super doutor, sempre atencioso, sempre disposto a ajudar e tirar dúvidas. Obrigado pelo carinho de sempre do senhor, da junta médica do senhor e da sua secretária Sabrina, que não mede esforços para me ajudar e auxiliar, sempre com muito carinho e atenção. Muito obrigado por tudo até o momento. 👏👏',
    image: 'https://ui-avatars.com/api/?name=Felipe+Saraiva&background=dbeafe&color=1d4ed8&size=120',
  },
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
