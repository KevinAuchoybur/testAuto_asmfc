# 🔴⚪ AS Monaco – Tests automatisés (Playwright)

![Playwright Tests](https://github.com/TON-PSEUDO/asmfc-playwright/actions/workflows/playwright.yml/badge.svg)

Projet personnel de QA : automatisation de tests end-to-end sur le site officiel de l'AS Monaco avec **Playwright + TypeScript**.

## 🎯 Ce que couvrent les tests
- Chargement de la page d'accueil et titre
- Présence du menu principal
- Navigation vers la page Actualités

## 🛠️ Stack
Playwright · TypeScript · GitHub Actions (CI)

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