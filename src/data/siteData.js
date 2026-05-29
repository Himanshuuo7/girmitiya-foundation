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
  { label: 'Families Guided', value: 4200, suffix: '+' },
  { label: 'Community Programs', value: 180, suffix: '+' },
  { label: 'Volunteers', value: 650, suffix: '+' },
  { label: 'Heritage Stories', value: 95, suffix: 'k' }
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
