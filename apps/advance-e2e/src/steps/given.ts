import { createBdd } from 'playwright-bdd';

const { Given } = createBdd();

/**
 * Open the URL
 * @param {string} url
 */
Given('Open url {string}', async ({ page }, url) => {
  await page.goto(url);
});
