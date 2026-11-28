import { test, expect } from '@playwright/test';

test('homepage loads and shows hero section', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('MAI NGUYEN');
  await expect(page.locator('#projects')).toBeVisible();
});

test('role-based pages load', async ({ page }) => {
  await page.goto('/roles/backend');
  await expect(page.locator('h1')).toBeVisible();
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
