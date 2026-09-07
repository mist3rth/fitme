export interface SportProgram {
  id: string;
  number: string;
  badge: string;
  sport: string;
  title: string;
  headline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  category: 'Collectif' | 'Individuel' | 'Endurance' | 'Précision';
  duration: string;
  level: string;
  intensity: 'Moyenne' | 'Élevée' | 'Haute Performance';
  coach: {
    name: string;
    role: string;
    avatar: string;
    credentials: string;
  };
  keyStats: {
    value: string;
    label: string;
  }[];
  modules: {
    title: string;
    description: string;
  }[];
  benefits: string[];
}

export const FORMATIONS_DATA: SportProgram[] = [
  {
    id: 'running',
    number: '01',
    badge: 'Program',
    sport: 'Running',
    title: 'Running & Préparation Marathon / Trail',
    headline: 'Élévation de VMA, endurance fondamentale et gestion de l\'allure cible',
    shortDescription:
      'Développez votre endurance aérobie, perfectionnez votre foulée et préparez vos objectifs du 10km au marathon avec un plan scientifique.',
    fullDescription:
      'Que vous prépariez votre premier 10 km, un semi-marathon ou les 42,195 km d\'un marathon mythique, notre méthode individualisée calibre chaque allure au battement cardiaque près pour maximiser votre potentiel aérobie sans risque de blessure.',
    image: '/course.webp',
    category: 'Endurance',
    duration: '16 semaines',
    level: 'Tous niveaux (du 5km au Marathon)',
    intensity: 'Élevée',
    coach: {
      name: 'Thomas Morel',
      role: 'Coach FFA & Athlète d\'Endurance',
      avatar: '/coach.webp',
      credentials: 'Record personnel Marathon 2h24 • Master STAPS',
    },
    keyStats: [
      { value: '+1.8 km/h', label: 'Progression moyenne de VMA' },
      { value: '98%', label: 'Taux de finishers sans blessure' },
      { value: '16 sem.', label: 'Planification personnalisée jour par jour' },
    ],
    modules: [
      {
        title: 'Module 1 : Bilan Physiologique & Allures Personnalisées',
        description: 'Test VMA terrain, calcul précis des zones d\'endurance fondamentale, seuil 1 et seuil 2.',
      },
      {
        title: 'Module 2 : Séances Clés (Fractionné court, long & Pyramides)',
        description: 'Développement de la cylindrée cardio, tolérance lactique et cadence optimale (170-180 ppm).',
      },
      {
        title: 'Module 3 : PPG, Renforcement du Pied & Mobilité',
        description: 'Gainage dynamique, travail de la chaîne postérieure, prévention des périostites et tendinopathies.',
      },
      {
        title: 'Module 4 : Stratégie de Course, Nutrition & Affûtage',
        description: 'Plan de ravitaillement glucidique, hydratation, protocole de surcompensation pré-compétition.',
      },
    ],
    benefits: [
      'Plan synchronisable sur montre GPS (Garmin, Strava, Coros, Apple)',
      'Ajustements hebdomadaires selon vos sensations et votre fatigue',
      'Webinaires mensuels sur la nutrition et la physiologie de l\'effort',
      'Accès au groupe privé des coureurs FiTME pour les sorties collectives',
    ],
  },
  {
    id: 'tennis',
    number: '02',
    badge: 'Program',
    sport: 'Tennis',
    title: 'Tennis & Puissance de Frappe',
    headline: 'Jeu de jambes vif, service percutant et régularité de fond de court',
    shortDescription:
      'Construisez un jeu complet et puissant grâce à des conseils d\'experts, un travail de replacement vif et une mécanique de frappe fluide.',
    fullDescription:
      'Une formation complète qui fusionne l\'école moderne de frappe avec une préparation physique spécifique aux déplacements courts et répétés du tennis. Apprenez à imposer votre schéma de jeu face à tous les styles d\'adversaires.',
    image: '/tennis.webp',
    category: 'Individuel',
    duration: '12 semaines',
    level: 'Intermédiaire & Classé',
    intensity: 'Haute Performance',
    coach: {
      name: 'Julien Mercier',
      role: 'Entraîneur DEJEPS Tennis & Préparateur',
      avatar: '/perso4.webp',
      credentials: 'Ex-joueur classé négatif, 12 ans de coaching ATP/ITF',
    },
    keyStats: [
      { value: '+18 km/h', label: 'Vitesse moyenne de première balle' },
      { value: '85%', label: 'Régularité des échanges > 6 frappes' },
      { value: '12 sem.', label: 'Accompagnement terrain et physique' },
    ],
    modules: [
      {
        title: 'Module 1 : Biomécanique du Service & Retour',
        description: 'Boucle, lancer de balle régulier, poussée des jambes et frappes en première et seconde balle kickée.',
      },
      {
        title: 'Module 2 : Coup Droit Lourd & Revers Solide',
        description: 'Prise de raquette, rotation du buste, traversée de balle et trajectoires bombées de sécurité.',
      },
      {
        title: 'Module 3 : Déplacements & Reprise d\'Appuis (Split-Step)',
        description: 'Vitesse de réaction au service, glissades sur terre battue et replacement dynamique au centre.',
      },
      {
        title: 'Module 4 : Tactique de Match & Solidité Mentale',
        description: 'Construction des points, gestion des balles de break, routine pré-point et canalisation des émotions.',
      },
    ],
    benefits: [
      'Diagnostic complet de votre gestuelle avec capteurs et vidéo HD',
      'Préparation physique spécifique pour éviter le tennis-elbow',
      'Simulations de matchs tactiques avec débriefing approfondi',
      'Protocoles de récupération entre deux matchs de tournoi',
    ],
  },
  {
    id: 'football',
    number: '03',
    badge: 'Program',
    sport: 'Football',
    title: 'Football & Performance Tactique',
    headline: 'Maîtrise technique sous pression et vision du jeu sur 90 minutes',
    shortDescription:
      'Perfectionnez votre contrôle orienté, votre prise de décision rapide sous pressing et votre puissance athlétique de match.',
    fullDescription:
      'Ce programme d\'élite combine travail technique individuel de haute précision, préparation athlétique ciblée et intelligence tactique. Conçu avec des entraîneurs diplômés UEFA Pro, il vous prépare à hausser votre niveau d\'exigence en compétition.',
    image: '/foot.webp',
    category: 'Collectif',
    duration: '12 semaines',
    level: 'Tous niveaux à Compétition',
    intensity: 'Haute Performance',
    coach: {
      name: 'Maxime Laurent',
      role: 'Ex-formateur Pro & Coach UEFA A',
      avatar: '/perso1.webp',
      credentials: '14 ans en centre de formation professionnelle',
    },
    keyStats: [
      { value: '+24%', label: 'Vitesse de prise d\'information' },
      { value: '92%', label: 'Précision des passes sous pression' },
      { value: '12', label: 'Séances d\'analyse vidéo tactique' },
    ],
    modules: [
      {
        title: 'Module 1 : Maîtrise Technique & Premier Contrôle',
        description: 'Gammes de passes courtes et longues, contrôles orientés sous pression défensive et utilisation des deux pieds.',
      },
      {
        title: 'Module 2 : Vitesse de Décision & Vision Spatiale',
        description: 'Lecture du jeu, anticipation du pressing adverse, timing des appels et jeu dans les demi-espaces.',
      },
      {
        title: 'Module 3 : Puissance & Explosivité Fonctionnelle',
        description: 'Renforcement spécifique du train inférieur, travail des appuis, changements de direction rapides et gainage.',
      },
      {
        title: 'Module 4 : Finition & Situations Réelles de Match',
        description: 'Face-à-face avec le gardien, tirs en première intention, coups de pied arrêtés et gestion de la lucidité.',
      },
    ],
    benefits: [
      'Programme d\'entraînement validé par des préparateurs professionnels',
      'Analyses vidéo individuelles de vos matchs et entraînements',
      'Suivi de la charge athlétique pour éviter tout risque de blessure',
      'Accès aux rassemblements et matchs d\'évaluation périodiques',
    ],
  },
  {
    id: 'basket',
    number: '04',
    badge: 'Program',
    sport: 'Basket',
    title: 'Basketball & Fondamentaux d\'Élite',
    headline: 'Détente verticale, shoot sous contact et lecture du pick-and-roll',
    shortDescription:
      'Maîtrisez la biomécanique du tir, le dribble de déséquilibre, l\'explosivité verticale et le leadership sur le parquet.',
    fullDescription:
      'Une méthode progressive axée sur la répétition intelligente des gestes fondamentaux. Du perfectionnement de votre release au shoot jusqu\'aux systèmes collectifs complexes, développez un jeu complet et redoutable dans le money-time.',
    image: '/basket.webp',
    category: 'Collectif',
    duration: '10 semaines',
    level: 'Intermédiaire & Avancé',
    intensity: 'Haute Performance',
    coach: {
      name: 'Antoine Delorme',
      role: 'Entraîneur Fédéral & Préparateur Physique Pro',
      avatar: '/perso2.webp',
      credentials: 'Préparateur d\'athlètes Pro B & NM1',
    },
    keyStats: [
      { value: '+8 cm', label: 'Gain moyen en détente verticale' },
      { value: '48%', label: 'Taux de réussite à 3 points visé' },
      { value: '10 sem.', label: 'Programme intensif sur parquet' },
    ],
    modules: [
      {
        title: 'Module 1 : Mécanique et Régularité du Shoot',
        description: 'Alignement postural, vitesse d\'armement, catch and shoot et création de shoot en sortie de dribble.',
      },
      {
        title: 'Module 2 : Ball-Handling & Séparation',
        description: 'Dribbles croisés, hesi, in-and-out, gestion du centre de gravité et création d\'espace face au défenseur.',
      },
      {
        title: 'Module 3 : Plyométrie & Détente Verticale',
        description: 'Protocole de saut sans élan et avec élan, renforcement des tendons rotuliens et réceptions sécurisées.',
      },
      {
        title: 'Module 4 : QI Basket & Situations Clés',
        description: 'Attaque de zone, lecture des switchs défensifs, spacing offensif et gestion du tempo de possession.',
      },
    ],
    benefits: [
      'Correction vidéo de la mécanique de tir au millimètre',
      'Plan de renforcement musculaire adapté au basketball moderne',
      'Séances filmées avec feedback instantané des coachs',
      'Plan de nutrition pour soutenir l\'explosivité et la récupération',
    ],
  },
  {
    id: 'natation',
    number: '05',
    badge: 'Program',
    sport: 'Natation',
    title: 'Natation & Efficience Hydrodynamique',
    headline: 'Glisse parfaite, cadence respiratoire et puissance de propulsion',
    shortDescription:
      'Optimisez votre alignement dans l\'eau, perfectionnez vos 4 nages et gagnez en vitesse tout en réduisant votre dépense d\'énergie.',
    fullDescription:
      'Conçu pour les nageurs réguliers et les triathlètes cherchant à franchir un cap chronométrique. L\'accent est mis sur la réduction drastique de la traînée hydrodynamique, le placement de la tête et l\'efficacité de chaque traction.',
    image: '/natation.webp',
    category: 'Endurance',
    duration: '8 semaines',
    level: 'Tous niveaux (Perfectionnement)',
    intensity: 'Moyenne',
    coach: {
      name: 'Camille Vasseur',
      role: 'Maître-Nageur & Ancienne Nageuse Nationale',
      avatar: '/perso3.webp',
      credentials: 'Championne de France Universitaire 200m NL',
    },
    keyStats: [
      { value: '-4.2s', label: 'Gain moyen sur 100m nage libre' },
      { value: '-18%', label: 'Nombre de coups de bras par longueur' },
      { value: '4 nages', label: 'Technique complète abordée' },
    ],
    modules: [
      {
        title: 'Module 1 : Alignement Postural & Gainage Aquatique',
        description: 'Positionnement hydrodynamique de la tête, flottaison haute et réduction de la résistance frontale.',
      },
      {
        title: 'Module 2 : Balayage & Propulsion (Catch & Pull)',
        description: 'Technique d\'ancrage de la main, coude haut, poussée complète et synchronisation des battements.',
      },
      {
        title: 'Module 3 : Respiration Bilatérale & Rythme Cardiaque',
        description: 'Gestion de l\'hypoxie contrôlée, respiration tous les 3/5 temps et régularité du souffle sur longue distance.',
      },
      {
        title: 'Module 4 : Départs, Coulées et Virages Culbutes',
        description: 'Optimisation de la poussée au mur, ondulations sous-marines et transition immédiate en reprise de nage.',
      },
    ],
    benefits: [
      'Analyse vidéo subaquatique pour corriger les défauts invisibles',
      'Entraînements sur mesure adaptés à vos distances cibles (50m à 3,8km)',
      'Renforcement des rotateurs d\'épaule pour prévenir les tendinites',
      'Fiches de séances étanches fournies pour vos entraînements libres',
    ],
  },
  {
    id: 'golf',
    number: '06',
    badge: 'Program',
    sport: 'Golf',
    title: 'Golf & Précision du Swing',
    headline: 'Biomécanique, distance au drive et régularité chirurgicale sur le green',
    shortDescription:
      'Gagnez en puissance sans forcer, stabilisez votre contact de balle et réduisez drastiquement votre index de jeu.',
    fullDescription:
      'Une formation haut de gamme alliant technologie de pointe (analyse TrackMan), renforcement de la mobilité du tronc et gestion stratégique du parcours. Transformez votre régularité balle après balle.',
    image: '/golf.webp',
    category: 'Précision',
    duration: '8 semaines',
    level: 'Tous index (Initiation à Bas Index)',
    intensity: 'Moyenne',
    coach: {
      name: 'Édouard Lambert',
      role: 'Membre PGA France & Spécialiste Biomécanique',
      avatar: '/perso1.webp',
      credentials: '18 ans d\'enseignement en golfs internationaux',
    },
    keyStats: [
      { value: '+22 m', label: 'Distance moyenne gagnée au drive' },
      { value: '-4.5', label: 'Baisse moyenne d\'index constatée' },
      { value: '3D Radar', label: 'Analyse données d\'impact de balle' },
    ],
    modules: [
      {
        title: 'Module 1 : Posture, Grip et Backswing Structuré',
        description: 'Alignement, plan de swing, rotation des épaules et armement des poignets sans compensation.',
      },
      {
        title: 'Module 2 : Transition, Downswing & Compression de Balle',
        description: 'Transfert du poids sur le côté gauche, lag naturel, angle d\'attaque neutre et finish équilibré.',
      },
      {
        title: 'Module 3 : Petit Jeu de Précision & Sorties de Bunker',
        description: 'Approches roulées et levées, gestion du bounce, dosage de spin et contrôle des distances.',
      },
      {
        title: 'Module 4 : Putting Méthodique & Stratégie 18 Trous',
        description: 'Lecture de pentes, alignement du putter, routine anti-stress et choix stratégiques de clubs.',
      },
    ],
    benefits: [
      'Analyse complète de données radar (vitesse club, chemin, face)',
      'Programme de mobilité des hanches et dissociation haut/bas du corps',
      'Livret de parcours personnalisé pour la stratégie de compétition',
      'Accompagnement 9 et 18 trous avec debriefing coup par coup',
    ],
  },
  {
    id: 'rugby',
    number: '07',
    badge: 'Program',
    sport: 'Rugby',
    title: 'Rugby & Impact Athlétique',
    headline: 'Puissance de duel, vitesse de replacement et lucidité dans le combat',
    shortDescription:
      'Développez une force fonctionnelle hors norme, sécurisez vos plaquages et gardez une clarté mentale absolue dans les rucks.',
    fullDescription:
      'Inspiré des protocoles des clubs professionnels du Top 14, ce programme forge un physique résistant aux chocs tout en développant la vitesse de décision balle en main et le travail invisible au soutien.',
    image: '/rugby.webp',
    category: 'Collectif',
    duration: '12 semaines',
    level: 'Joueurs de Club & Élite',
    intensity: 'Haute Performance',
    coach: {
      name: 'Sylvain Barreau',
      role: 'Préparateur Physique Rugby & Ancien Joueur Pro',
      avatar: '/perso2.webp',
      credentials: 'Certifié Préparation Athlétique Haut Niveau',
    },
    keyStats: [
      { value: '+15%', label: 'Puissance de percussion développée' },
      { value: '94%', label: 'Efficacité aux plaquages défensifs' },
      { value: '12 sem.', label: 'Conditioning intensif de match' },
    ],
    modules: [
      {
        title: 'Module 1 : Renforcement Fonctionnel & Armure Musculaire',
        description: 'Renforcement du cou, des trapèzes et de la ceinture scapulaire pour résister et absorber les chocs.',
      },
      {
        title: 'Module 2 : Technique de Plaquage & Sécurité au Contact',
        description: 'Placement de la tête, engagement de l\'épaule, enserrage des jambes et contest licite dans le ruck.',
      },
      {
        title: 'Module 3 : Passes Rapides & Attaque des Intervalles',
        description: 'Passes vissées des deux mains sous haute vitesse, leurres, timing de course et fixation défensive.',
      },
      {
        title: 'Module 4 : Vitesse de Replacement & Endurance Cardio-Lactique',
        description: 'Enchaînement d\'efforts intermittents haute intensité, relevés rapides du sol et présence aux phases statiques.',
      },
    ],
    benefits: [
      'Protocoles de prévention des commotions et renforcement cervical',
      'Programme de musculation explosive (haltérophilie fonctionnelle)',
      'Suivi de la composition corporelle et conseils nutrition de masse sèche',
      'Ateliers spécifiques par postes (avants / trois-quarts)',
    ],
  },
  {
    id: 'baseball',
    number: '08',
    badge: 'Program',
    sport: 'Baseball',
    title: 'Baseball & Réactivité Explosive',
    headline: 'Vitesse de rotation au bâton, précision des lancers et réflexes défensifs',
    shortDescription:
      'Améliorez votre puissance de frappe, la vitesse de votre bras au monticule et votre explosivité lors des courses sur bases.',
    fullDescription:
      'Un programme dédié à la précision biomécanique du geste de frappe et à la mécanique de lancer sécurisée. Développez une vitesse de réaction ultra-aiguisée pour dominer chaque manche au marbre et sur le terrain.',
    image: '/baseball.webp',
    category: 'Précision',
    duration: '8 semaines',
    level: 'Découverte à Confirmé',
    intensity: 'Moyenne',
    coach: {
      name: 'David Renaud',
      role: 'Coach FFBS & Ancien Joueur Division Élite',
      avatar: '/perso3.webp',
      credentials: 'Spécialiste de la biomécanique de frappe & lancer',
    },
    keyStats: [
      { value: '+14 mph', label: 'Vitesse de sortie de balle à la batte' },
      { value: '0.22s', label: 'Temps de réaction moyen au marbre' },
      { value: '8 sem.', label: 'Programme technique complet' },
    ],
    modules: [
      {
        title: 'Module 1 : Biomécanique du Swing & Vitesse de Batte',
        description: 'Transfert d\'énergie du sol au bâton, rotation du bassin, point de contact optimal et suivi de trajectoire.',
      },
      {
        title: 'Module 2 : Mécanique de Lancer & Protection de l\'Épaule',
        description: 'Kinetic chain du lancer, extension du bras, variété des effets (balle rapide, glissante) et protocole d\'échauffement.',
      },
      {
        title: 'Module 3 : Défense de Champ & Réflexes de Réception',
        description: 'Lecture du rebond, maniement rapide du gant, transition gant-main et lancers précis vers les bases.',
      },
      {
        title: 'Module 4 : Agilité sur Bases & Anticipation Stratégique',
        description: 'Départs volés explosifs, lecture du compte du lanceur, glissades au marbre et communication d\'équipe.',
      },
    ],
    benefits: [
      'Radar de mesure de vitesse de swing et de lancer inclus',
      'Programme de renforcement de la coiffe des rotateurs et de l\'épaule',
      'Exercices de réactivité visuelle et de perception oculaire rapide',
      'Sessions d\'entraînement pratiques avec machines à lancer',
    ],
  },
];
