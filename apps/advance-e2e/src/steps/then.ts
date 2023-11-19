import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Then } = createBdd();

/**
 * Verify that title page has value
 * @param {string} title
 */
Then('Verify that title is {string}', async ({ page }, title) => {
  await expect(page).toHaveTitle(new RegExp(title));
});

/**
 * Verify that element (button, input,...) is inactive
 * @param {string} selector
 */
Then('Verify that the {string} is inactive', async ({ page }, selector) => {
  const elm = page.getByTestId(selector);
  await elm.isDisabled();
});

/**
 * Verify that element (button, input,...) is active
 * @param {string} selector
 */
Then('Verify that the {string} is active', async ({ page }, selector) => {
  const elm = page.getByTestId(selector);
  await elm.isEnabled();
});

/**
 * Verify that element is displayed
 * @param {string} selector
 */
Then('Verify that the {string} is displayed', async ({ page }, selector) => {
  const elm = page.getByTestId(selector);
  await elm.isVisible();
});

/**
 * Verify that element is hidden
 * @param {string} selector
 */
Then('Verify that the {string} is hidden', async ({ page }, selector) => {
  const elm = page.getByTestId(selector);
  await elm.isHidden();
});
