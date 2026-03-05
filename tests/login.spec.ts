import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('succesful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto(page);
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
