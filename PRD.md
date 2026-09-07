# Product Requirements Document (PRD) - FiTME

## 1. Objectif du Projet
Le projet FiTME est une plateforme web pour un service de coaching sportif haut de gamme. L'objectif est l'industrialisation (S2P) avec un rendu esthétique "Premium".

## 2. Problématiques actuelles
- **Navigation non-standard** : Utilisation de `window.history.pushState`.
- **Lag sur mobile** : L'animation d'apparition du texte est trop gourmande (LetterDropText -> layer explosion).
- **Bug visuel Navbar** : Le "active pill" se désynchronise au scroll (Framer Motion).
- **Expérience de scroll** : Absence de Smooth Scroll.

## 3. Spécifications S2P
- **Routage & SEO** : Utiliser `react-router-dom` et `react-helmet-async`.
- **Webperf** : Animation WordDrop au lieu de LetterDrop.
- **Smooth Scroll** : Intégration de `lenis`.
- **A11Y** : Liens HTML `<Link>` et `<a href>`.

## 4. Hors Périmètre
- Modifications du design originel (couleurs, typo, etc.).
