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

test('Le bandeau du prochain match est affiché', async() => {
await expect (home.nextMatch).toBeVisible();
});

test('Le composant des stories est affiché', async() => {
await expect (home.componentStories).toBeVisible();
});

test('Le bloc Actualités est affiché', async() => {
await expect (home.blocNews()).toBeVisible();
});

test('Le bouton Voir toutes les actualités est affiché ', async() => {
await expect (home.buttonSeeNews()).toBeVisible();
});

test('Le bouton Voir toutes les actualités pointe sur les actualités ', async() => {
await expect(home.newsLink()).toHaveAttribute('href', /news/);
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
