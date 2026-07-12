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

//Visibilité de chaque item
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

test('Clic sur Actualités mène à la page News', async({ page }) => {
// Arrange : On va sur le site
 //await page.goto('/fr/');
 //Act : On clic sur le lien
await page.getByRole('banner').getByRole('link', { name: 'ACTUALITÉS' }).click();
  //Assert : L'url contient 'news'
await expect(page).toHaveURL(/news/)
});