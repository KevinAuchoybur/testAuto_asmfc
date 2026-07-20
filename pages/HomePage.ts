import {type Page, type Locator} from '@playwright/test';

export class Homepage {
  readonly page : Page;
  readonly header : Locator;
  readonly galaxyBar: Locator;
  readonly carousel : Locator;
  readonly nextMatch : Locator;
  readonly componentStories : Locator;

constructor(page : Page){
  this.page = page;
  this.header = page.getByRole('banner');
  this.galaxyBar = page.locator('[data-component="GalaxyBar"]');
  this.carousel = page.locator ('[data-component="InfoSlider"]');
  this.nextMatch = page.locator ('[data-component="MatchPresentationBanner"]');
  this.componentStories = page.locator ('.join-widget-list');

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

blocNews(): Locator {
  return this.page.getByRole('heading', {name : 'ACTUALITÉS'})
}

buttonSeeNews(): Locator {
  return this.page.getByRole('link', {name: 'Voir toutes les actualités'} )
}

newsLink(): Locator {
return this.page.getByRole('link', { name: 'Voir toutes les actualités', exact: true });

}
}



