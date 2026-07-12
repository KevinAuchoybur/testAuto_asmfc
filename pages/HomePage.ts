import {type Page, type Locator} from '@playwright/test';

export class Homepage {
    readonly page : Page;
    readonly header : Locator;

constructor(page : Page){
    this.page = page;
    this.header = page.getByRole('banner')
}

async goto(){
    await this.page.goto('/fr/');
}

// Un lien du menu principal, ciblé par son nom (réutilisable pour tous les items)
  menuLink(name: string): Locator {
    return this.header.getByRole('link', { name });
  }
}