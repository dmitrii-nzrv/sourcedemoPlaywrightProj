// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/login.page';
// import { InventoryPage } from '../pages/inventory.page';
// import { CartPage } from '../pages/cart.page';
// import { users } from '../data/users';
// import { products } from '../data/products';

// test('user can an item to cart', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const inventoryPage = new InventoryPage(page);
//   const cartPage = new CartPage(page);

//   // Login
//   await loginPage.goto();
//   await loginPage.login(users.standard.username, users.standard.password);

//   await inventoryPage.addItemToCart(products.bikeLight.dataTest);

//   // todo: убрать хардкодинг если это возможно в рамках учебного сайта
//   await expect(inventoryPage.getCartBadge()).toHaveText('1');

//   await inventoryPage.openCart();

//   await expect(cartPage.getItemByName(products.bikeLight.label)).toBeVisible();
// });

import { test, expect } from '../fixtures/pages';

import { users } from '../data/users';
import { products } from '../data/products';

test.describe('Add products to cart', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
  });

  for (const product of products) {
    test(`user can add ${product.label} to cart`, async ({ inventoryPage, cartPage }) => {
      await inventoryPage.addItemToCart(product.dataTest);

      await inventoryPage.openCart();

      await expect(cartPage.getItemByName(product.label)).toBeVisible();
    });
  }

  test('user can add multiple products to cart', async ({ inventoryPage, cartPage }) => {
    for (const product of products) {
      await inventoryPage.addItemToCart(product.dataTest);
    }

    await inventoryPage.openCart();

    for (const product of products) {
      await expect(cartPage.getItemByName(product.label)).toBeVisible();
    }
  });
});
