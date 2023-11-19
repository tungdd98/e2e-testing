/* eslint-disable playwright/no-wait-for-timeout */
import { createBdd } from 'playwright-bdd';

const { When } = createBdd();

/**
 * Waiting for {int} milliseconds
 * @param {int} time
 */
When('Wait for {int} ms', async ({ page }, time) => {
  await page.waitForTimeout(time);
});

/**
 * Set input blank
 * @param {string} selector
 */
When('Set {string} blank', async ({ page }, selector) => {
  const elm = page.getByTestId(selector);
  await elm.fill('');
});

/**
 * Set value for input
 * @param {string} value
 * @param {string} selector
 */
When('Set {string} to {string}', async ({ page }, value, selector) => {
  const elm = page.getByTestId(selector);
  await elm.fill(value);
});
