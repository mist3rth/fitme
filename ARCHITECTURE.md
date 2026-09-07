# Architecture Document - FiTME

## 1. Stack Technique
- **Framework** : React 18 + Vite (SPA)
- **Routage** : react-router-dom
- **Style** : Tailwind CSS
- **Animations** : framer-motion (pour l'UI React) & gsap (pour les animations complexes au scroll)
- **Smooth Scroll** : lenis
- **SEO** : react-helmet-async

## 2. Structure (Atomique & S2P)
```text
src/
├── layouts/
│   └── MainLayout.tsx (Navbar, Footer, Lenis Provider)
├── pages/ (ex-sections autonomes de App.tsx)
│   ├── Home.tsx
│   ├── Formations.tsx
│   ├── Coachs.tsx
│   ├── Tarifs.tsx
│   └── Blog.tsx
├── components/
│   ├── ui/ (Composants atomiques: Button, LetterDropText, TextFlip3D)
│   └── sections/ (Hero, Stats, Testimonials...)
```

## 3. Sécurité & Performance
- Lazy loading des images.
- Optimisation des nœuds DOM pour les animations de texte.
- Utilisation de React.memo pour les composants statiques (Footer, Logo) si nécessaire.
