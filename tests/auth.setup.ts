import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { users } from '../data/users';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await page.context().storageState({ path: 'storageState.json' });
});
