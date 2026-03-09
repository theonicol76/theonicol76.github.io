# La Cuisine de Jeanine - PRD

## Problème Original
Refaire le site web "La Cuisine de Jeanine" en version 100% frontend (React), sans backend. Formulaire de contact via Formspree (ID: xzdjdkyd). Deux livrables : version GitHub Pages puis version Hostinger.

## Architecture
- **Tech Stack** : React 19, Tailwind CSS, React Router (HashRouter), Formspree
- **Pages** : Accueil, Nos Solutions, À Propos, Contact
- **Routing** : HashRouter pour compatibilité GitHub Pages
- **Formulaire** : Formspree POST (name, company, email, phone, need_type, message)
- **Déploiement** : GitHub Pages → https://theonicol76.github.io/

## Personas
- Entreprises de Seine-Maritime cherchant un traiteur d'entreprise
- DRH / Office managers recherchant des solutions de restauration

## Exigences Principales
- Design identique au site original (snow-yak-700495.hostingersite.com)
- Aucun backend requis
- Formulaire de contact fonctionnel via Formspree
- Compatible GitHub Pages (HashRouter + homepage dans package.json)

## Ce qui a été implémenté (Jan 2026)
- [x] Page Accueil : Hero, logos clients, solutions, cuisine, pourquoi nous choisir, CTA
- [x] Page Solutions : Frigo Connecté, Plateaux Repas, Prestations & Événements
- [x] Page À Propos : Histoire, Vision, Exigence produit
- [x] Page Contact : Formulaire Formspree avec 6 champs
- [x] Navigation responsive (desktop + mobile hamburger)
- [x] Footer avec infos contact et navigation
- [x] Build GitHub Pages configuré (homepage + HashRouter)
- [x] Accents français corrects partout
- [x] Images CDN du site original réutilisées
- [x] Tests passés (navigation, formulaire, responsive)

## Backlog
- P0 : Validation utilisateur sur GitHub Pages
- P1 : Version Hostinger (fichiers statiques + .htaccess)
- P2 : Ajout d'un favicon personnalisé
- P2 : Optimisation SEO meta tags par page

## Prochaines étapes
1. Utilisateur teste le site sur GitHub Pages
2. Fournir version Hostinger avec .htaccess pour URL propres
