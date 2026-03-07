import { Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getItemByName(productName: string) {
    return this.page.getByText(productName);
  }
}
