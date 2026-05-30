import {
  Baby,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Home,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Wheat
} from 'lucide-react';

export const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
    children: [
      { label: 'Our Team', path: '/our-team' },
      { label: 'Our Mission', path: '/our-mission' }
    ]
  },
  {
    label: 'Membership',
    path: '/membership',
    children: [
      { label: 'Life Time', path: '/membership#lifetime' },
      { label: 'Yearly', path: '/membership#yearly' }
    ]
  },
  { label: 'Blog', path: '/blog' },
  {
    label: 'Activity',
    path: '/activity',
    children: [
      { label: 'Woman Empowerment', path: '/woman-empowerment' },
      { label: 'Skill Development', path: '/skill-development' },
      { label: 'Child Welfare', path: '/child-welfare' }
    ]
  },
  {
    label: 'Publication',
    path: '/publication',
    children: [{ label: 'Root Search', path: '/root-search' }]
  },
  { label: 'Contact', path: '/contact' }
];

export const heroImage =
  'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1800&q=80';

export const images = {
  about: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
  women: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=80',
  skill: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  child: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
  roots: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&w=1200&q=80',
  publication: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80'
};

export const workAreas = [
  {
    title: 'Root Search',
    text: 'Helping Girmitiya descendants document family stories, locations, records, and cultural memories.',
    icon: Search,
    path: '/root-search'
  },
  {
    title: 'Women Empowerment',
    text: 'Creating circles of confidence through awareness, livelihoods, mentorship, and health conversations.',
    icon: HandHeart,
    path: '/woman-empowerment'
  },
  {
    title: 'Skill Development',
    text: 'Practical training that improves employability, digital confidence, and small enterprise readiness.',
    icon: GraduationCap,
    path: '/skill-development'
  },
  {
    title: 'Child Welfare',
    text: 'Education support, safety awareness, nutrition drives, and joyful learning spaces for children.',
    icon: Baby,
    path: '/child-welfare'
  }
];

export const stats = [
  { label: 'Families Reconnected', value: 4200, suffix: '+' },
  { label: 'Countries Reached', value: 10, suffix: '+' },
  { label: 'Members', value: 1850, suffix: '+' },
  { label: 'Projects', value: 180, suffix: '+' },
  { label: 'Years of Service', value: 12, suffix: '+' }
];

export const partnerLogos = [
  'Heritage Circle',
  'Community Trust',
  'Learning Forum',
  'Roots Archive',
  'Diaspora Network',
  'Cultural Link',
  'Village Voices',
  'Memory Alliance'
];

export const globalPresence = [
  {
    country: 'India',
    flag: '🇮🇳',
    description: 'The foundation’s cultural and programmatic base for research, community support, and family tracing.',
    presence: 'Research partners, volunteers, and community organizers across multiple states.',
    activities: 'Root Search, education support, local training, public learning.',
    programs: 'Archive work, field visits, and cultural documentation.',
    learnMore: '/contact',
    x: 760,
    y: 286,
    glow: 1
  },
  {
    country: 'Fiji',
    flag: '🇫🇯',
    description: 'A vibrant Girmitiya community with strong cultural continuity and living remembrance.',
    presence: 'Families, cultural groups, and heritage networks.',
    activities: 'Story circles, celebrations, intergenerational learning.',
    programs: 'Identity preservation and diaspora connection.',
    learnMore: '/contact',
    x: 1042,
    y: 418,
    glow: 0.95
  },
  {
    country: 'Mauritius',
    flag: '🇲🇺',
    description: 'A key heritage hub where memory, language, and cultural identity remain deeply visible.',
    presence: 'Community elders, researchers, and descendants.',
    activities: 'Heritage talks, documentation, and cultural exchange.',
    programs: 'Public history and family reconnection initiatives.',
    learnMore: '/contact',
    x: 875,
    y: 390,
    glow: 0.92
  },
  {
    country: 'South Africa',
    flag: '🇿🇦',
    description: 'A strong diaspora presence shaped by family memory, civic participation, and cultural pride.',
    presence: 'Community organizations and cultural associations.',
    activities: 'Youth heritage engagement and public events.',
    programs: 'Cultural continuity and community learning.',
    learnMore: '/contact',
    x: 850,
    y: 498,
    glow: 0.85
  },
  {
    country: 'Suriname',
    flag: '🇸🇷',
    description: 'A place where Girmitiya identity is carried through language, ritual, and family story.',
    presence: 'Families, educators, and heritage advocates.',
    activities: 'Cultural documentation and youth programs.',
    programs: 'Community memory and public education.',
    learnMore: '/contact',
    x: 282,
    y: 368,
    glow: 0.88
  },
  {
    country: 'Trinidad & Tobago',
    flag: '🇹🇹',
    description: 'A dynamic cultural presence with a powerful tradition of public celebration and remembrance.',
    presence: 'Cultural groups, families, and festival communities.',
    activities: 'Performances, oral history, and youth mentorship.',
    programs: 'Festival support and heritage learning.',
    learnMore: '/contact',
    x: 260,
    y: 308,
    glow: 0.9
  },
  {
    country: 'Guyana',
    flag: '🇬🇾',
    description: 'An important diaspora community keeping history alive through family and cultural networks.',
    presence: 'Families, scholars, and local community organizers.',
    activities: 'Archival conversations and intergenerational programs.',
    programs: 'Community learning and heritage storytelling.',
    learnMore: '/contact',
    x: 300,
    y: 398,
    glow: 0.88
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    description: 'An expanding diaspora network connecting younger generations to heritage roots.',
    presence: 'Students, families, and diaspora partners.',
    activities: 'Digital community events and heritage learning.',
    programs: 'Cross-border connection and cultural education.',
    learnMore: '/contact',
    x: 350,
    y: 144,
    glow: 0.8
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    description: 'A bridge for research, archives, and diaspora storytelling across generations.',
    presence: 'Researchers, descendants, and cultural organizations.',
    activities: 'Public history, seminars, and archive access.',
    programs: 'Diaspora engagement and heritage exchange.',
    learnMore: '/contact',
    x: 562,
    y: 164,
    glow: 0.82
  },
  {
    country: 'Europe',
    flag: '🇪🇺',
    description: 'A broader regional network of supporters, researchers, and descendants.',
    presence: 'Community leaders and partner institutions.',
    activities: 'Cultural programs, dialogues, and exhibitions.',
    programs: 'Heritage visibility and international partnerships.',
    learnMore: '/contact',
    x: 636,
    y: 184,
    glow: 0.78
  }
];

export const activities = [
  {
    title: 'Heritage Documentation Camps',
    category: 'Root Search',
    image: images.roots,
    icon: Landmark,
    text: 'Community camps where elders, families, and volunteers preserve migration memories with care.'
  },
  {
    title: 'Livelihood Circles for Women',
    category: 'Empowerment',
    image: images.women,
    icon: HeartHandshake,
    text: 'Peer-led learning, rights awareness, financial literacy, and income-oriented local initiatives.'
  },
  {
    title: 'Future Skills Workshops',
    category: 'Training',
    image: images.skill,
    icon: BriefcaseBusiness,
    text: 'Digital basics, communication, entrepreneurship, and job-readiness sessions for young learners.'
  }
];

export const testimonials = [
  {
    quote:
      'The foundation helped our family speak about history with dignity. What felt distant now feels like a living inheritance.',
    name: 'Anita Prasad',
    role: 'Community member'
  },
  {
    quote:
      'Their women-led programs bring practical skills and emotional strength into the same room. That combination changes lives.',
    name: 'Rakesh Kumar',
    role: 'Volunteer mentor'
  },
  {
    quote:
      'Root Search gave our grandparents a place to be heard and our children a reason to ask better questions.',
    name: 'Meera Singh',
    role: 'Heritage participant'
  }
];

export const blogs = [
  {
    title: 'Why Girmitiya Memory Matters for the Next Generation',
    category: 'Heritage',
    date: 'May 12, 2026',
    image: images.roots,
    excerpt:
      'A thoughtful look at preserving family histories, migration journeys, and cultural identity through community archives.'
  },
  {
    title: 'Building Confidence Through Women-Led Learning Circles',
    category: 'Empowerment',
    date: 'April 28, 2026',
    image: images.women,
    excerpt:
      'How local support groups can blend livelihood training, confidence, and social awareness.'
  },
  {
    title: 'Skills That Help Youth Step Into Opportunity',
    category: 'Skill Development',
    date: 'April 7, 2026',
    image: images.skill,
    excerpt:
      'Practical program ideas for digital confidence, communication, enterprise, and employability.'
  },
  {
    title: 'Child Welfare Begins With Safe, Joyful Learning Spaces',
    category: 'Child Welfare',
    date: 'March 18, 2026',
    image: images.child,
    excerpt:
      'Small interventions that make education, nutrition, and protection feel reachable for families.'
  }
];

export const team = [
  { name: 'Dr. Kavita Narayan', role: 'Founder Trustee', focus: 'Heritage research and community strategy' },
  { name: 'Arun Pratap Singh', role: 'Program Director', focus: 'Grassroots operations and partnerships' },
  { name: 'Nisha Devi', role: 'Women Empowerment Lead', focus: 'Livelihood groups and rights awareness' },
  { name: 'Manoj Lal', role: 'Root Search Coordinator', focus: 'Family records, oral histories, and archives' }
];

export const timeline = [
  { year: '1834-1917', title: 'The Girmit Era', text: 'Indentured migration carried Indian communities across oceans, leaving behind records and deep emotional histories.' },
  { year: 'Memory', title: 'Family Stories', text: 'Names, villages, rituals, songs, letters, and old documents become bridges across generations.' },
  { year: 'Research', title: 'Root Search', text: 'Volunteers organize clues, guide documentation, and help families approach archives with patience.' },
  { year: 'Reconnect', title: 'Cultural Continuity', text: 'The goal is not only information, but belonging, healing, and renewed community pride.' }
];

export const contactCards = [
  { title: 'Visit Office', value: 'Girmitiya Foundation, New Delhi, India', icon: MapPin },
  { title: 'Call Us', value: '+91 98765 43210', icon: Phone },
  { title: 'Email', value: 'contact@girmitiyafoundation.org', icon: Mail },
  { title: 'Programs', value: 'Community visits by appointment', icon: CalendarDays }
];

export const values = [
  { title: 'Dignity', text: 'Every program starts with respect for community voice and lived experience.', icon: ShieldCheck },
  { title: 'Heritage', text: 'Culture is treated as a living source of confidence, memory, and identity.', icon: Wheat },
  { title: 'Service', text: 'We build long-term support systems instead of one-time gestures.', icon: Home },
  { title: 'Learning', text: 'Research, publications, and training turn knowledge into public benefit.', icon: BookOpen },
  { title: 'Togetherness', text: 'Volunteers, families, mentors, and partners move the mission forward.', icon: Users },
  { title: 'Hope', text: 'Our work is grounded in practical optimism and everyday action.', icon: Sparkles }
];
