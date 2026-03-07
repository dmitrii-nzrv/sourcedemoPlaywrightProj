import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addItemToCart(dataTest: string) {
    await this.page.locator(`[data-test="${dataTest}"]`).click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  getCartBadge() {
    return this.cartBadge;
  }
}
