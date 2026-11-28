import { test, expect } from '@playwright/test';

test('homepage loads and shows hero section', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('MAI NGUYEN');
  await expect(page.locator('#projects')).toBeVisible();
});

for (const role of ['backend', 'devops', 'ai', 'network', 'bank', 'erp']) {
  test(`${role} role page shows relevant projects`, async ({ page }) => {
    const response = await page.goto(`/roles/${role}`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('article').first()).toBeVisible();
    await expect(page.locator('body')).not.toContainText('border-primary text-primary');
  });
}

test('unknown role returns 404', async ({ page }) => {
  const response = await page.goto('/roles/not-a-role');
  expect(response?.status()).toBe(404);
});

test('mode switch announces its next action', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Switch to Technical Lead Mode' }).click();
  await expect(page.getByRole('button', { name: 'Switch to Recruiter Mode' })).toBeVisible();
});

test('project detail page loads', async ({ page }) => {
  await page.goto('/projects/flashsale');
  await expect(page.locator('h1')).toContainText('FlashSale');
});

test('career center page loads', async ({ page }) => {
  await page.goto('/cv');
  await expect(page.locator('h1')).toBeVisible();
});

test('immersive page loads', async ({ page }) => {
  await page.goto('/immersive');
  await expect(page.locator('h1')).toBeVisible();
});

test('skills page loads', async ({ page }) => {
  await page.goto('/skills');
  await expect(page.locator('h1')).toBeVisible();
});
