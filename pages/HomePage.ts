import {type Page, type Locator} from '@playwright/test';

export class Homepage {
  readonly page : Page;
  readonly header : Locator;
  readonly galaxyBar: Locator;
  readonly carousel : Locator;

constructor(page : Page){
  this.page = page;
  this.header = page.getByRole('banner');
  this.galaxyBar = page.locator('[data-component="GalaxyBar"]');
  this.carousel = page.locator ('[data-component="InfoSlider"]');
}

async goto(){
  await this.page.goto('/fr/');
}

galaxyBarLink(name: string): Locator {
  return this.galaxyBar.getByRole('link', { name, exact: true });
}

// Un lien du menu principal, ciblé par son nom (réutilisable pour tous les items)
menuLink(name: string): Locator {
  return this.header.getByRole('link', { name });
}

billetterieLink(): Locator {
return this.page.getByRole('link', { name: 'BILLETTERIE', exact: true });
}

boutiqueLink(): Locator {
return this.galaxyBar.getByRole('link', { name: 'BOUTIQUE', exact: true });
}


hospitaliteLink(): Locator {
return this.page.getByRole('link', { name: 'HOSPITALITÉS', exact: true });
}
}


