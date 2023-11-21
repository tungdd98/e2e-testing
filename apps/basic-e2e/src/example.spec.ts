import { test, expect } from '@playwright/test';

test('Verify that title is "Login Screen"', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(new RegExp('Login Screen'));
});

test('Verify that the "login-button" is inactive', async ({ page }) => {
  await page.goto('/');
  const elm = page.getByTestId('login-button');

  await expect(elm).toBeDisabled();
});
