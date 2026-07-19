import { test,expect } from '@playwright/test';
import { Homepage } from '../pages/HomePage';

let home : Homepage;

test.beforeEach(async ({ page }) => {
  home = new Homepage (page);
  await home.goto();
});

test.describe('Page d\'acceuil : Contenu', () => {

  // Titre de l'onglet
test('Titre de l\'onglet',async({ page }) => {
await expect(page).toHaveTitle(/AS Monaco/);  
});

test('Le carousel est affiché', async() => {
await expect (home.carousel).toBeVisible();
});

});

test.describe('Page d\'acceuil : Navigations et liens', () => {

const GALAXYBAR_ITEMS = ['BILLETTERIE', 'BOUTIQUE', 'HOSPITALITÉS'];
for (const item of GALAXYBAR_ITEMS) {
  test(`Visibilité de l'item ${item}`, async () => {
    await expect(home.galaxyBarLink(item)).toBeVisible();
  });
}

const NAVBAR_ITEMS = ['ACTUALITÉS', 'EFFECTIF', 'CALENDRIER & RÉSULTATS','CLASSEMENT', 'VIDÉOS'];
for (const item of NAVBAR_ITEMS) {
test(`Visibilité de l'item ${item}`, async () => {
    await expect(home.menuLink(item)).toBeVisible();
  });
}


// Clic sur chaque items ET bonne redirection sur la page cible

test('Le lien Billeterie pointe vers la billeterie en ligne', async() => {
await expect(home.billetterieLink()).toHaveAttribute('href', /billetterie/);
});

test('Le lien Boutique pointe vers la boutique en ligne', async() => {
await expect(home.boutiqueLink()).toHaveAttribute('href', /shop\.asmonaco\.com/);
});

test('Le lien Hospitalité pointe vers l\'experience VIP', async() => {
await expect(home.hospitaliteLink()).toHaveAttribute('href', /business/);
});

});
