export interface CoachProfile {
  id: string;
  name: string;
  sport: string;
  sportBadge: string; // e.g. "Football Coach", "Tennis Coach", etc.
  rating: number; // e.g. 4.9
  image: string;
  avatar: string;
  role: string;
  credentials: string;
  bio: string;
  specialties: string[];
  socials?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const COACHS_DATA: CoachProfile[] = [
  {
    id: 'coach-football',
    name: 'Maxime Laurent',
    sport: 'Football',
    sportBadge: 'Coach Football',
    rating: 4.9,
    image: '/perso1.webp',
    avatar: '/perso1.webp',
    role: 'Ex-formateur Pro & Coach UEFA A',
    credentials: '14 ans en centre de formation professionnelle',
    bio: 'Spécialiste de la vision de jeu et de la prise de décision rapide sous pression. Maxime a formé plus d\'une cinquantaine de joueurs professionnels.',
    specialties: ['Prise de décision', 'Contrôle orienté', 'Tactique de match'],
    socials: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 'coach-tennis',
    name: 'Julien Mercier',
    sport: 'Tennis',
    sportBadge: 'Coach Tennis',
    rating: 4.9,
    image: '/perso4.webp',
    avatar: '/perso4.webp',
    role: 'Entraîneur DEJEPS Tennis & Préparateur',
    credentials: 'Ex-joueur classé négatif, 12 ans de coaching ATP/ITF',
    bio: 'Biomécanicien du service et du coup droit moderne. Julien allie analyse vidéo haute fréquence et renforcement de l\'explosivité sur le court.',
    specialties: ['Service & Retour', 'Jeu de jambes vif', 'Mental de compétition'],
    socials: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 'coach-running',
    name: 'Thomas Morel',
    sport: 'Running',
    sportBadge: 'Coach Running',
    rating: 4.9,
    image: '/coach.webp',
    avatar: '/coach.webp',
    role: 'Coach FFA & Athlète d\'Endurance',
    credentials: 'Record personnel Marathon 2h24 • Master STAPS',
    bio: 'Expert en physiologie de l\'effort et planification de course du 10km à l\'Ultra-Trail. Il personnalise chaque allure pour maximiser la VMA sans blessure.',
    specialties: ['Élévation VMA', 'Gestion d\'allure', 'Prévention blessures'],
    socials: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 'coach-basket',
    name: 'Antoine Delorme',
    sport: 'Basket',
    sportBadge: 'Coach Basket',
    rating: 4.9,
    image: '/perso2.webp',
    avatar: '/perso2.webp',
    role: 'Entraîneur Fédéral & Préparateur Physique Pro',
    credentials: 'Préparateur d\'athlètes Pro B & NM1',
    bio: 'Obsédé par la mécanique du shoot et la détente verticale. Antoine structure des sessions intenses pour développer l\'efficacité dans le money-time.',
    specialties: ['Mécanique de tir', 'Détente verticale', 'QI Basket'],
    socials: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 'coach-natation',
    name: 'Camille Vasseur',
    sport: 'Natation',
    sportBadge: 'Coach Natation',
    rating: 4.9,
    image: '/perso3.webp',
    avatar: '/perso3.webp',
    role: 'Maître-Nageur & Ancienne Nageuse Nationale',
    credentials: 'Championne de France Universitaire 200m NL',
    bio: 'Perfectionniste de la traînée hydrodynamique et du gainage aquatique. Elle fait gagner de précieuses secondes aux nageurs et triathlètes.',
    specialties: ['Hydrodynamisme', 'Respiration rythmée', 'Propulsion 4 nages'],
    socials: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 'coach-golf',
    name: 'Édouard Lambert',
    sport: 'Golf',
    sportBadge: 'Coach Golf',
    rating: 4.9,
    image: '/perso1.webp',
    avatar: '/perso1.webp',
    role: 'Membre PGA France & Spécialiste Biomécanique',
    credentials: '18 ans d\'enseignement en golfs internationaux',
    bio: 'Maître du swing fluide et de la compression de balle. Édouard utilise les données radar 3D pour débloquer de la distance avec un minimum d\'effort.',
    specialties: ['Analyse TrackMan', 'Putting chirurgical', 'Gestion de parcours'],
    socials: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
    },
  },
];
