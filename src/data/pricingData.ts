export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  badge: string;
  subBadge: string;
  highlight?: boolean;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    subtitle: 'Pour les débutants qui démarrent leur parcours d\'entraînement',
    price: '250€',
    period: '/ 3 mois',
    badge: 'Starter',
    subBadge: 'Conçu pour progresser',
    features: [
      'Accès aux cours de sports sélectionnés',
      'Programmes d\'entraînement adaptés aux débutants',
      'Exercices hebdomadaires de perfectionnement technique',
      'Accès complet à la communauté d\'athlètes FiTME'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    subtitle: 'Accès complet à toutes les formations et cours sportifs',
    price: '499€',
    period: '/ 6 mois',
    badge: 'Starter',
    subBadge: 'Conçu pour performer',
    highlight: true,
    features: [
      'Accès complet à toutes les formations sportives',
      'Plans d\'entraînement structurés et évolutifs',
      'Suivi de progression et analyses de performance',
      'Conseils et retours réguliers des coachs experts'
    ]
  },
  {
    id: 'elite',
    name: 'Élite',
    subtitle: 'Pour les athlètes confirmés visant l\'excellence et le haut niveau',
    price: '850€',
    period: '/ 9 mois',
    badge: 'Starter',
    subBadge: 'Conçu pour l\'élite',
    features: [
      'Accès illimité à l\'intégralité des programmes',
      'Plans d\'entraînement 100% personnalisés sur-mesure',
      'Sessions de coaching individuel en one-on-one',
      'Analyses biomécaniques et métriques avancées'
    ]
  }
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'who-can-enroll',
    question: 'Qui peut s\'inscrire aux formations FiTME ?',
    answer: 'Nos formations s\'adressent à tous les passionnés de sport, du débutant désireux de bâtir des bases solides à l\'athlète confirmé cherchant à optimiser ses performances de pointe. Chaque module est structuré avec des paliers clairs et progressifs.'
  },
  {
    id: 'suitable-beginners',
    question: 'Les programmes d\'entraînement sont-ils adaptés aux débutants ?',
    answer: 'Oui, absolument. Notre formule Basic et nos modules d\'initiation intègrent des protocoles d\'échauffement, de renforcement fondamental et de biomécanique spécialement conçus pour progresser en toute sécurité et sans risque de blessure.'
  },
  {
    id: 'online-or-in-person',
    question: 'Proposez-vous des entraînements en ligne ou en présentiel ?',
    answer: 'Nous proposons une expérience hybride complète : une plateforme numérique interactive accessible 24/7 avec séances vidéos HD et retours vidéo de vos mouvements, complétée par des masterclasses et sessions intensives sur le terrain avec nos coachs.'
  },
  {
    id: 'course-duration',
    question: 'Quelle est la durée des programmes ?',
    answer: 'Nos forfaits sont structurés sur des cycles de 3, 6 ou 9 mois. Chaque programme est découpé en macrocycles et microcycles hebdomadaires pour garantir une surcharge progressive et des gains mesurables sur le long terme.'
  },
  {
    id: 'personalized-plan',
    question: 'Vais-je recevoir un plan d\'entraînement personnalisé ?',
    answer: 'Oui. Dès votre inscription aux formules Pro et Élite, vous complétez un bilan initial complet avec votre coach attitré pour concevoir un programme sur-mesure adapté à votre calendrier, vos points forts et vos objectifs de compétition.'
  }
];
