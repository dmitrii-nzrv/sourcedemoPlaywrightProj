import { test, expect } from '../fixtures/pages';
import { users } from '../data/users';

test('user can login with valid credentials', async ({ loginPage, page }) => {
  await loginPage.goto();

  await loginPage.login(users.standard.username, users.standard.password);

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
