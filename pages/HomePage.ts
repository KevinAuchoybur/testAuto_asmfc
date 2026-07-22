import {type Page, type Locator} from '@playwright/test';

export class Homepage {
  readonly page : Page;
  readonly header : Locator;
  readonly galaxyBar: Locator;
  readonly carousel : Locator;
  readonly nextMatch : Locator;
  readonly componentStories : Locator;
  readonly ranking : Locator;
  readonly imgStadium : Locator;

constructor(page : Page){
  this.page = page;
  this.header = page.getByRole('banner');
  this.galaxyBar = page.locator('[data-component="GalaxyBar"]');
  this.carousel = page.locator ('[data-component="InfoSlider"]');
  this.nextMatch = page.locator ('[data-component="MatchPresentationBanner"]');
  this.componentStories = page.locator ('.join-widget-list');
  this.ranking = page.locator('[data-component="TeamRankStats"]');
  this.imgStadium = page.locator('.bannerImage');

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

blocAcademy(): Locator {
return this.page.getByRole('heading', {name: '50 ans de l\'Academy'});
}

academyLink(): Locator {
return this.page.getByRole('link', {name : 'Voir le dossier spécial'});
}

blocLastMatch(): Locator {
  return this.page.getByRole('heading', {name: 'Dernier match'});
}

afterMatch(): Locator {
  return this.page.getByRole('link', {name : 'Après-match'})
}

blocNextMatch(): Locator {
  return this.page.getByRole('heading', {name: 'Match à venir'});
}

blocPlayers(): Locator {
  return this.page.getByRole('heading', {name: 'Nos joueurs'});
}

playersLink(): Locator {
return this.page.getByRole('link', {name : 'Voir tous les joueurs '});
}

blocCentenarian(): Locator {
return this.page.getByRole('heading', {name: '100 ans de passion'});
}

centenarianLink(): Locator {
return this.page.getByRole('link', {name : 'Découvrir l\'histoire'});
}

blocHonours(): Locator {
return this.page.getByRole('heading', {name: 'Le Palmarès'});
}

honoursLink(): Locator {
return this.page.getByRole('link', {name : 'Voir le palmarès'});
}

}





