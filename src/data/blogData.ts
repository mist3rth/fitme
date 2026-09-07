export interface ArticleSection {
  heading: string;
  body: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  sections: ArticleSection[];
  category: string;
  categoryBadge: string;
  date: string;
  dateFormatted: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const FEATURED_BLOG_POST: BlogPost = {
  id: 'building-skills-confidence-game-intelligence',
  slug: 'building-skills-confidence-game-intelligence',
  title: "Développer les compétences, la confiance et l'intelligence de jeu",
  subtitle: "Le basketball est un sport dynamique qui exige technique, discipline et prises de décision rapides et réfléchies.",
  summary: "Le basketball est un sport dynamique et intense qui exige technique, discipline et prises de décision rapides et réfléchies.",
  sections: [
    {
      heading: "Maîtriser les fondamentaux",
      body: "Des bases solides constituent l'épine dorsale de tout grand joueur de basketball. Le contrôle du dribble, la mécanique de tir, le jeu de jambes et la posture défensive créent un socle propice à la progression. Lorsque les athlètes se concentrent sur la maîtrise de ces bases, l'apprentissage des gestes techniques complexes devient plus fluide et efficace."
    },
    {
      heading: "L'importance de l'intelligence de jeu",
      body: "Le basketball ne se résume pas aux seules qualités athlétiques : il s'agit avant tout de lire le jeu. Comprendre les espacements (spacing), le timing et le placement permet aux joueurs de faire des choix plus judicieux et de réagir avec un temps d'avance sur le parquet."
    },
    {
      heading: "S'entraîner avec un objectif précis",
      body: "Un entraînement efficace va bien au-delà de la simple répétition mécanique. Des exercices ciblés, des séances structurées et des objectifs clairs aident les joueurs à progresser rapidement tout en évitant les mauvaises habitudes. La régularité est le secret de la réussite sur le long terme."
    },
    {
      heading: "Esprit d'équipe et mental d'acier",
      body: "Les grands athlètes tirent leurs coéquipiers vers le haut. La communication, la confiance mutuelle et la résilience mentale jouent un rôle prépondérant dans la performance. Rester confiant et lucide sous pression fait toute la différence entre les bons joueurs et les champions."
    },
    {
      heading: "Élevez votre niveau de jeu",
      body: "Chez FiTME, nos programmes de basketball sont conçus pour former des athlètes complets : techniques, confiants et prêts pour la compétition. Que vous débutiez ou souhaitiez performer au plus haut niveau, un entraînement adapté transforme durablement votre jeu."
    }
  ],
  category: 'Basketball',
  categoryBadge: 'Basketball',
  date: '2025-10-19',
  dateFormatted: '19 oct. 2025',
  readTime: '4 min de lecture',
  image: '/basket.webp',
  author: {
    name: 'Richard Williams',
    role: 'Coach Basketball & Performance',
    avatar: '/perso1.webp'
  }
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'builds-leadership-decisive-action',
    slug: 'builds-leadership-decisive-action',
    title: "Développer le leadership : les coachs font confiance aux athlètes qui agissent avec détermination",
    subtitle: "Qu'est-ce que l'esprit d'initiative et pourquoi est-il déterminant pour la performance et le quotidien ?",
    summary: "Qu'est-ce que l'esprit d'initiative et pourquoi est-il déterminant pour la performance et le quotidien ?",
    sections: [
      {
        heading: "Le courage de prendre des décisions sous pression",
        body: "Sur le parcours de golf comme dans les moments décisifs de la compétition, l'hésitation est l'ennemie du geste parfait. Les coachs de haut niveau recherchent avant tout des athlètes capables d'assumer leurs choix stratégiques sans douter."
      },
      {
        heading: "La clarté mentale et la routine pré-coup",
        body: "Une routine bien ancrée permet d'isoler l'esprit du bruit extérieur. En visualisant chaque trajectoire et en calibrant sa respiration, l'athlète transforme l'anxiété en concentration pure."
      },
      {
        heading: "Un leadership silencieux et exemplaire",
        body: "Le leadership ne s'exprime pas uniquement par les mots, mais par la rigueur de la préparation et la posture corporelle. Un athlète déterminé inspire naturellement son entourage et installe un climat de confiance."
      },
      {
        heading: "Transformer les erreurs en leviers de progression",
        body: "Accepter l'échec technique fait partie de la courbe d'apprentissage. Savoir se recentrer immédiatement après un coup manqué est la marque des grands champions."
      }
    ],
    category: 'Golf & Mental',
    categoryBadge: 'Golf',
    date: '2025-10-07',
    dateFormatted: '7 oct. 2025',
    readTime: '3 min de lecture',
    image: '/golf.webp',
    author: {
      name: 'Claire Vasseur',
      role: 'Préparatrice Mentale & Coach Golf',
      avatar: '/perso2.webp'
    }
  },
  {
    id: 'importance-of-choosing-the-right-tennis-ball',
    slug: 'importance-of-choosing-the-right-tennis-ball',
    title: "L'importance de choisir la balle de tennis adaptée à son jeu",
    subtitle: "Une balle de tennis peut sembler anodine, mais elle influence directement le rebond, le contrôle de trajectoire et la qualité du match.",
    summary: "Une balle de tennis peut sembler anodine, mais elle influence directement le rebond, le contrôle de trajectoire et la qualité du match.",
    sections: [
      {
        heading: "Comprendre les caractéristiques techniques d'une balle",
        body: "Pression interne, densité du feutre et composition du caoutchouc : chaque paramètre modifie le temps de contact avec le cordage, la vitesse de rotation (spin) et la vivacité du rebond. Choisir le bon matériel est essentiel pour maximiser son potentiel technique."
      },
      {
        heading: "Adapter sa balle à la surface de jeu",
        body: "Sur terre battue, une balle au feutre plus épais ralentit légèrement le jeu et résiste à l'abrasion. Sur surface dure (hard court), des balles plus vives permettent d'exploiter la rapidité du terrain tout en conservant une trajectoire stable."
      },
      {
        heading: "Préservation articulaire et confort de frappe",
        body: "Jouer avec des balles dépressurisées ou trop lourdes augmente les contraintes mécaniques sur le poignet, le coude (tennis elbow) et l'épaule. Renouveler régulièrement ses balles garantit une absorption optimale des chocs."
      },
      {
        heading: "Le choix des professionnels pour l'entraînement",
        body: "Nos coachs recommandent de s'entraîner avec le même type de balles que celles utilisées en tournoi afin d'ancrer des repères de vitesse et de hauteur de rebond infaillibles."
      }
    ],
    category: 'Tennis & Matériel',
    categoryBadge: 'Tennis',
    date: '2025-11-26',
    dateFormatted: '26 nov. 2025',
    readTime: '5 min de lecture',
    image: '/tennis.webp',
    author: {
      name: 'Marc Duprès',
      role: 'Entraîneur Elite Tennis',
      avatar: '/perso3.webp'
    }
  },
  {
    id: 'elite-career-management-and-strategy',
    slug: 'elite-career-management-and-strategy',
    title: "Stratégie, impact et gestion des transferts au plus haut niveau",
    subtitle: "Analyse des choix de carrière, de la gestion de la pression médiatique et de la pérennité physique des athlètes d'élite.",
    summary: "Analyse des choix de carrière, de la gestion de la pression médiatique et de la pérennité physique des athlètes d'élite.",
    sections: [
      {
        heading: "L'équilibre entre ambition sportive et opportunités",
        body: "À l'ère des transferts internationaux et des sollicitations financières majeures, un joueur doit peser chaque décision en fonction de son temps de jeu, de son épanouissement tactique et de son plan de carrière à long terme."
      },
      {
        heading: "Gestion de la charge mentale et médiatique",
        body: "L'exposition permanente sur les réseaux sociaux et la pression des supporters exigent une préparation psychologique solide. Savoir compartimenter sa vie privée et rester concentré sur les objectifs collectifs est primordial."
      },
      {
        heading: "Nutrition, sommeil et longévité athlétique",
        body: "La pérennité au sommet repose sur une discipline invisible irréprochable : alimentation ciblée, suivi des cycles de sommeil et protocoles de récupération avancés pour éviter le surentraînement."
      },
      {
        heading: "L'importance d'un staff multidisciplinaire",
        body: "S'entourer d'experts de confiance (préparateurs physiques, nutritionnistes, conseillers juridiques) permet à l'athlète de se focaliser à 100% sur sa performance sur le terrain."
      }
    ],
    category: 'Football & Stratégie',
    categoryBadge: 'Football',
    date: '2025-12-03',
    dateFormatted: '3 déc. 2025',
    readTime: '4 min de lecture',
    image: '/foot.webp',
    author: {
      name: 'Yannick N’Diaye',
      role: 'Conseiller Performance & Football',
      avatar: '/perso4.webp'
    }
  },
  {
    id: 'building-speed-endurance-and-consistency',
    slug: 'building-speed-endurance-and-consistency',
    title: "Développer la vitesse, l'endurance et la régularité",
    subtitle: "La course à pied est l'une des disciplines les plus puissantes pour transformer sa condition physique et sa résistance.",
    summary: "La course à pied est l'une des disciplines les plus accessibles et puissantes pour transformer sa condition physique.",
    sections: [
      {
        heading: "La règle de la progressivité",
        body: "Vouloir courir trop vite ou trop longtemps dès les premières semaines expose au risque de blessure. Augmenter le volume kilométrique de 10% maximum par semaine permet aux tendons et aux muscles de s'adapter sans surcharge."
      },
      {
        heading: "L'art du fractionné et des allures variées",
        body: "Alterner sorties en endurance fondamentale à basse fréquence cardiaque et séances de VMA (vitesse maximale aérobie) stimule le métabolisme et développe la puissance cardiorespiratoire."
      },
      {
        heading: "Le renforcement du pied et la technique de foulée",
        body: "Une foulée médio-pied économique et un travail proprioceptif réduisent les impacts verticaux traumatisants et améliorent le rendement énergétique à chaque kilomètre."
      },
      {
        heading: "Construire une routine durable",
        body: "La clé de l'endurance est la constance : trois entraînements modérés et bien structurés chaque semaine procurent des gains bien supérieurs à un effort isolé et épuisant."
      }
    ],
    category: 'Running & Cardio',
    categoryBadge: 'Running',
    date: '2025-10-29',
    dateFormatted: '29 oct. 2025',
    readTime: '4 min de lecture',
    image: '/course.webp',
    author: {
      name: 'Sarah Benali',
      role: 'Coach Running & Demi-fond',
      avatar: '/perso1.webp'
    }
  }
];

export const ALL_ARTICLES: BlogPost[] = [
  FEATURED_BLOG_POST,
  ...BLOG_POSTS
];

export function getArticleBySlug(slug: string): BlogPost | undefined {
  return ALL_ARTICLES.find((post) => post.slug === slug || post.id === slug);
}

export function getRelatedArticles(currentSlug: string, count: number = 2): BlogPost[] {
  const others = ALL_ARTICLES.filter((post) => post.slug !== currentSlug && post.id !== currentSlug);
  return others.slice(0, count);
}

