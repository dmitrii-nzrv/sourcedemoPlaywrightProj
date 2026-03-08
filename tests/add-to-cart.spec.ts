import { test, expect } from '../fixtures/pages';
import { products } from '../data/products';

test.describe('Add products to cart', () => {
  for (const product of products) {
    test(`user can add ${product.label} to cart`, async ({ inventoryPage, cartPage }) => {
      await inventoryPage.goto();

      await inventoryPage.addItemToCart(product.dataTest);

      await inventoryPage.openCart();

      await expect(cartPage.getItemByName(product.label)).toBeVisible();
    });
  }

  test('user can add multiple products to cart', async ({ inventoryPage, cartPage }) => {
    await inventoryPage.goto();

    for (const product of products) {
      await inventoryPage.addItemToCart(product.dataTest);
    }

    await inventoryPage.openCart();

    for (const product of products) {
      await expect(cartPage.getItemByName(product.label)).toBeVisible();
    }
  });
});
