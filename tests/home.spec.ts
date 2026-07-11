import { test,expect } from '@playwright/test';

// Titre de l'onglet n°1
test('Titre de l\'onglet',async({ page }) => {
 // Arrange : on va sur le site
 await page.goto('/fr/');
 // Assert : Le titre contient AS Monaco, AS Monaco ne sera pas modifié...
 await expect(page).toHaveTitle(/AS Monaco/);  
 // Assert : Le lien 'Actualités' doit etre visible
 await expect( 
 page.getByRole('banner').getByRole('link', { name: 'ACTUALITÉS' })
  ).toBeVisible(); 
});

test('Clic sur Actualités mène à la page News', async({ page }) => {
// Arrange : On va sur le site
 await page.goto('/fr/');
 //Act : On clic sur le lien
await page.getByRole('banner').getByRole('link', { name: 'ACTUALITÉS' }).click();
  //Assert : L'url contient 'news'
await expect(page).toHaveURL(/news/)
});