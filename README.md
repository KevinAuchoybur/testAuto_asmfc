# 🔴⚪ AS Monaco – Tests automatisés (Playwright)

![Playwright Tests](https://github.com/TON-PSEUDO/asmfc-playwright/actions/workflows/playwright.yml/badge.svg)

Projet personnel de QA : automatisation de tests end-to-end sur le site officiel de l'AS Monaco avec **Playwright + TypeScript**.

## 🎯 Ce que couvrent les tests

Tests end-to-end sur la page d'accueil, organisés en suites (`test.describe`) :

**Page d'accueil : Contenu**
- Titre de l'onglet
- Affichage du carrousel
- Affichage du bandeau prochain match
- Affichage du composant stories
- Affichage du bloc Actualités (titre + bouton "Voir toutes les actualités" + lien vers les actualités)
- Affichage du bloc Academy (titre + bouton "Voir le dossier spécial" + lien vers l'Academy)
- Affichage du bloc Dernier match (titre + bouton "Après-match" + lien vers le calendrier)
- Affichage du bloc Prochain match (titre "Match à venir")
- Affichage du bloc Classement
- Affichage du bloc des joueurs (titre + bouton "Voir tous les joueurs" + lien vers les joueurs)
- Affichage du bloc Centenaire (titre + bouton "Découvrir l'histoire" + lien vers l'histoire du club)
- Affichage du bloc Palmarès (titre + bouton "Voir le palmarès" + lien vers le palmarès)
- Affichage de l'image du stade


**Page d'accueil : Navigation & liens**
- Visibilité des items du menu, générée **data-driven** via des boucles `for...of` sur
  deux groupes (locators différents) : menu principal (Actualités, Effectif,
  Calendrier & résultats, Classement, Vidéos) et GalaxyBar (Billetterie, Boutique,
  Hospitalités)
- Liens externes vers la bonne destination : Billetterie, Boutique (shop.asmonaco.com),
  Hospitalités (expérience VIP)

> 31 tests exécutés sur Chromium, Firefox et WebKit (93 exécutions).

## 🛠️ Stack
Playwright · TypeScript · GitHub Actions (CI)

## 🏗️ Architecture (Page Object Model)

Le projet suit le pattern **Page Object Model (POM)** : les locators et les
actions de chaque page sont regroupés dans une classe dédiée, séparée des tests.

\`\`\`
asmfc-playwright/
├─ pages/          # Page Objects (locators + actions)
│  └─ HomePage.ts  # page d'accueil : menu, navigation
├─ tests/          # les tests (scénarios)
│  └─ home.spec.ts
└─ playwright.config.ts
\`\`\`

**Pourquoi ce pattern ?**
- 🔧 Maintenabilité : si le site change, on corrige le locator à **un seul endroit** (la classe), pas dans chaque test.
- 📖 Lisibilité : les tests décrivent l'intention (`home.menuLink('ACTUALITÉS')`) plutôt que la mécanique.
- ♻️ Réutilisabilité : des méthodes paramétrées (`menuLink(name)`, `galaxyBarLink(name)`) ciblent n'importe quel item, ce qui permet de générer les tests de visibilité **dynamiquement** via des boucles `for...of` plutôt que de dupliquer un test par item.

## ▶️ Lancer les tests
\`\`\`bash
npm install
npx playwright test          # tous les tests
npx playwright test --ui     # mode interactif
npx playwright show-report   # rapport HTML
\`\`\`

## 🛠️ Écrire de nouveaux tests
\`\`\`bash
npx playwright codegen https://www.asmonaco.com/fr/
\`\`\`

## ⚠️ Automatisation responsable
Projet à but pédagogique. Les tests ciblent le comportement public du site, en volume raisonnable, sans contournement de protections.