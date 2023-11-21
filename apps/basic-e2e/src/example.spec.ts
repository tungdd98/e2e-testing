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

test('Set "admin" to "login-input-email"', async ({ page }) => {
  await page.goto('/');
  const inputEmail = page.getByTestId('login-input-email');
  const errorEmail = page.getByTestId('login-input-email-error');
  const loginBtn = page.getByTestId('login-button');
  await inputEmail.fill('admin');

  await expect(errorEmail).toBeVisible();
  await expect(loginBtn).toBeDisabled();
});

test('Set "admin@gmail.com" to "login-input-email" and Set "123" to "login-input-password"', async ({
  page,
}) => {
  await page.goto('/');
  const inputEmail = page.getByTestId('login-input-email');
  const errorEmail = page.getByTestId('login-input-email-error');
  const inputPassword = page.getByTestId('login-input-password');
  const errorPassword = page.getByTestId('login-input-password-error');
  const loginBtn = page.getByTestId('login-button');
  await inputEmail.fill('admin@gmail.com');
  await inputPassword.fill('123');

  await expect(errorEmail).toBeHidden();
  await expect(errorPassword).toBeHidden();
  await expect(loginBtn).toBeEnabled();
});
