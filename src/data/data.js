import { FaAward, FaCrown, FaDollarSign, FaPhone, FaPizzaSlice, FaShieldAlt, FaUser } from 'react-icons/fa'
import img1 from '../assets/card-image/frameSend.png'
import img2 from '../assets/card-image/receiveMoney.svg'
import img3 from '../assets/card-image/framePay.png'
import img4 from '../assets/card-image/coin.svg'
import img5 from '../assets/card-image/portefeuille.png'
import img6 from '../assets/card-image/frameSecurite.png'
import person1 from '../assets/team/person1.jpg';
import person2 from '../assets/team/person2.jpg';
import person3 from '../assets/team/person3.jpg';
import person4 from '../assets/team/person4.jpg';
import { FiHeadphones, FiMail, FiMessageCircle, FiPackage, FiShare2, FiTrendingUp, FiZap, FiFileText, FiRepeat, FiCreditCard } from 'react-icons/fi'
import { FaLocationDot, FaUsers } from 'react-icons/fa6'

const cards = [
  {
    card1: [
      {
        image: img1,
        cardTag: "Transfert d’argent",
        shortText: "Envoyez de l’argent instantanément",
        firstSkill: "Envoi vers tous les réseaux",
        SecondSkill: "Transferts rapides et sécurisés",
        ThirdSkill: "Confirmation immédiate",
      },
      {
        image: img2,
        cardTag: "Réception de fonds",
        shortText: "Recevez de l’argent en toute simplicité",
        firstSkill: "Réception instantanée",
        SecondSkill: "Notification en temps réel",
        ThirdSkill: "Historique des transactions détaillé",
      },
      {
        image: img3,
        cardTag: "Paiement de services",
        shortText: "Payez vos factures facilement",
        firstSkill: "Eau, électricité, internet",
        SecondSkill: "Paiement sans déplacement",
        ThirdSkill: "Reçus numériques",
      },
    ],

    card2: [
      {
        image: img4,
        cardTag: "Dépôt & Retrait",
        shortText: "Rechargez et retirez votre argent",
        firstSkill: "Dépôt chez agents agréés",
        SecondSkill: "Retrait rapide",
        ThirdSkill: "Disponibilité 24/7",
      },
      {
        image: img5,
        cardTag: "Portefeuille MANY",
        shortText: "Gardez le contrôle total de votre argent",
        firstSkill: "Consultation du solde",
        SecondSkill: "Historique détaillé",
        ThirdSkill: "Gestion multi-comptes",
      },
      {
        image: img6,
        cardTag: "Sécurité",
        shortText: "Votre argent est protégé",
        firstSkill: "Code PIN sécurisé",
        SecondSkill: "Protection biométrique",
        ThirdSkill: "Alertes de sécurité",
      },
    ]
  }
];



export default cards;


export const conversations = [
  {
    id: 1,
    icon: FiRepeat,
    title: 'Transfert d\'argent',
    message: 'Votre transfert vers le numéro 77•••45 a été effectué avec succès.',
    amount: '25 000 FCFA',
    status: 'Effectué',
    color: 'green-400',
    bgColor: 'bg-green-400/20',
    time: 'Il y a 2 min'
  },
  {
    id: 2,
    icon: FiCreditCard,
    title: "Dépôt sur le portefeuille",
    message: "Votre dépôt via agent MANY est confirmé et disponible.",
    amount: "50 000 FCFA",
    status: "Crédité",
    color: "blue-400",
    bgColor: "bg-blue-400/20",
    time: "Il y a 15 min"
  },
  {
    id: 3,
    icon: FiFileText,
    title: "Paiement de facture",
    message: "Le paiement de votre facture d'électricité a été validé.",
    amount: "18 750 FCFA",
    status: "Payé",
    color: "purple-400",
    bgColor: "bg-purple-400/20",
    time: "Il y a 1 heure"
  }
];

export const stats = [
  {
    id: "clients",
    value: 98,
    label: "Clients satisfaits",
    icon: FaUsers,
    color: "blue-400",
    suffix: "%"
  },
  {
    id: "transactions",
    value: 12,
    label: "Transactions traitées",
    icon: FiRepeat,
    color: "pink-400",
    suffix: "M+"
  },
  {
    id: "users",
    value: 850,
    label: "Utilisateurs actifs",
    icon: FiTrendingUp,
    color: "green-400",
    suffix: "K+"
  }
];

export const contacts = [
  {
    tag: "Email",
    info: "Notre équipe amicale est là pour vous aider.",
    value: "contact@bbsmastergroup.com",
    icon: FiMail,
    color: "primary",
    hoverColor: "primary/20"
  },
  {
    tag: "Siège",
    info: "Venez nous dire bonjour à notre siège.",
    value: "Dakar, HLM GRAND YOFF",
    icon: FaLocationDot,
    color: "primary",
    hoverColor: "primary/20"
  },
  {
    tag: "Téléphone",
    info: "Du lun au ven de 9h à 18h",
    value: "+221 710307659",
    icon: FaPhone,
    color: "primary",
    hoverColor: "primary/20"
  },
  {
    tag: "WhatsApp",
    info: "Disponible 24/7",
    value: "+221 710307659",
    icon: FiMessageCircle,
    color: "primary",
    hoverColor: "primary/20"
  },
  {
    tag: "Support",
    info: "Obtenez de l'aide à tout moment",
    value: "support@bbsmastergroup.com",
    icon: FiHeadphones,
    color: "primary",
    hoverColor: "primary/20"
  },
  {
    tag: "Réseaux sociaux",
    info: "Connectez-vous avec nous sur l'application Many Mobile.",
    value: "@manymobile",
    icon: FiShare2,
    color: "primary",
    hoverColor: "primary/20"
  }
];

export const members = [
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    avatar: person1,
    bio: "Full-stack wizard who turns coffee into code. Passionate about creating seamless user experiences.",
    skills: ["React", "Node.js", "TypeScript", "GraphQL"],
    social: {
      twitter: "@sarahdev",
      linkedin: "sarah-chen-dev",
      github: "sarahcodes",
      email: "sarah@appliyo.dev"
    },
  },
  {
    name: "Marcus Thompson",
    role: "Design Lead",
    avatar: person2,
    bio: "Design alchemist mixing creativity with usability. Believes every pixel has a purpose.",
    skills: ["UI/UX", "Figma", "Brand Design", "Animation"],
    social: {
      twitter: "@marcusdesigns",
      linkedin: "marcus-thompson-design",
      github: "marcusthompson",
      email: "marcus@appliyo.dev"
    },
  },
  {
    name: "Zara Ahmed",
    role: "Product Manager",
    avatar: person3,
    bio: "Product visionary who bridges the gap between ideas and reality. Data-driven decision maker.",
    skills: ["Strategy", "Analytics", "Agile", "User Research"],
    social: {
      twitter: "@zaraproduct",
      linkedin: "zara-ahmed-pm",
      email: "zara@appliyo.dev"
    },
  },
  {
    name: "Alex Rivera",
    role: "DevOps Engineer",
    avatar: person4,
    bio: "Infrastructure ninja who keeps our systems running smooth. Cloud architecture enthusiast.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    social: {
      twitter: "@alexdevops",
      linkedin: "alex-rivera-devops",
      github: "alexrivera",
      email: "alex@appliyo.dev"
    },
  },
  {
    name: "Luna Park",
    role: "Frontend Specialist",
    avatar: person1,
    bio: "Animation expert who brings interfaces to life. Micro-interaction perfectionist.",
    skills: ["React", "Animation", "CSS", "Performance"],
    social: {
      twitter: "@lunaanimations",
      linkedin: "luna-park-frontend",
      github: "lunapark",
      email: "luna@appliyo.dev"
    },
  },
  {
    name: "Diego Santos",
    role: "Backend Architect",
    avatar: person2,
    bio: "Scalability master who designs robust systems. API design philosophy: simple yet powerful.",
    skills: ["Python", "Microservices", "Database", "Security"],
    social: {
      twitter: "@diegobackend",
      linkedin: "diego-santos-backend",
      github: "diegosantos",
      email: "diego@appliyo.dev"
    },
  }
];

export const plans = [
  {
    id: 'basic',
    title: 'Basic',
    subtitle: 'Perfect for beginners',
    monthPrice: 20,
    yearPrice: 200,
    originalYearPrice: 240,
    period: 'billed monthly',
    taker: 'w-2/3',
    recommended: false,
    popular: false,
    icon: FaShieldAlt,
    features: [
      '24/7 Technical Support',
      'Money-Back Guarantee',
      'Enhanced Security',
      'Dedicated Account Manager',
    ],
    activeUsers: '500+',
    userPercentage: 65,
  },
  {
    id: 'pro',
    title: 'Pro',
    subtitle: 'Most popular choice',
    monthPrice: 50,
    yearPrice: 500,
    originalYearPrice: 600,
    period: 'billed monthly',
    taker: 'w-1/3',
    recommended: true,
    popular: true,
    icon: FiZap,
    features: [
      'Everything in Basic',
      'Custom Integrations',
      'Extended Trial Periods',
      'Multi-Language Support',
    ],
    activeUsers: '2K+',
    userPercentage: 35,
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    subtitle: 'For large organizations',
    monthPrice: 100,
    yearPrice: 1000,
    originalYearPrice: 1200,
    period: 'billed monthly',
    taker: 'w-1/2',
    recommended: false,
    popular: false,
    icon: FaCrown,
    features: [
      'Everything in Pro',
      'Exclusive Webinars & Training',
      'Data Integration Support',
      'White-label Solutions',
    ],
    activeUsers: '5K+',
    userPercentage: 50,
  },
];

export const stat = [
  { value: "120K+", label: "Utilisateurs actifs" },
  { value: "1.5M+", label: "Transactions traitées" },
  { value: "4.8★", label: "Note moyenne" },
  { value: "6", label: "Pays couverts" }
];

