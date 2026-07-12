# 🔴⚪ AS Monaco – Tests automatisés (Playwright)

![Playwright Tests](https://github.com/TON-PSEUDO/asmfc-playwright/actions/workflows/playwright.yml/badge.svg)

Projet personnel de QA : automatisation de tests end-to-end sur le site officiel de l'AS Monaco avec **Playwright + TypeScript**.

## 🎯 Ce que couvrent les tests
- Chargement de la page d'accueil et titre
- Présence du menu principal
- Navigation vers la page Actualités

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
- ♻️ Réutilisabilité : une méthode paramétrée (`menuLink(name)`) cible n'importe quel item du menu.

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