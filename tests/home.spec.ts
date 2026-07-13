import { test,expect } from '@playwright/test';
import { Homepage } from '../pages/HomePage';

let home : Homepage;

test.beforeEach(async ({ page }) => {
  home = new Homepage (page);
  await home.goto();
});

// Titre de l'onglet
test('Titre de l\'onglet',async({ page }) => {
await expect(page).toHaveTitle(/AS Monaco/);  
});

//Visibilité de chaque item sur la navigation
test('Visibilité  de l\'item  Billeterie', async ({ page }) => {
await expect (home.menuLink('BILLETERIE')).toBeVisible;
});

test('Visibilité  de l\'item  Boutique', async ({ page }) => {
await expect (home.menuLink('BOUTIQUE')).toBeVisible;
}); 

test('Visibilité  de l\'item  Hospitalités', async ({ page }) => {
await expect (home.menuLink('HOSPITALITÉS')).toBeVisible;
});

test('Visibilité  de l\'item  Actualités', async ({ page }) => {
await expect (home.menuLink('ACTUALITÉS')).toBeVisible;
});

test('Visibilité  de l\'item  Effectif', async ({ page }) => {
await expect (home.menuLink('EFFECTIF')).toBeVisible;
});

test('Visibilité  de l\'item  Calendrier & résultats', async ({ page }) => {
await expect (home.menuLink('CALENDRIER & RÉSULTATS')).toBeVisible;
});

test('Visibilité  de l\'item  Classement', async ({ page }) => {
await expect (home.menuLink('CLASSEMENT')).toBeVisible;
});

test('Visibilité  de l\'item  Vidéos', async ({ page }) => {
await expect (home.menuLink('VIDÉOS')).toBeVisible;
});

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

test('Le carousel est affiché', async() => {
await expect (home.carousel).toBeVisible();
})
