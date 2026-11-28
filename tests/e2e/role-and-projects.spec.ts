import { expect, test } from '@playwright/test';

const rolePages = [
  ['backend', 'Backend Engineering'],
  ['devops', 'Cloud & Platform Engineering'],
  ['ai', 'Applied AI Engineering'],
  ['network', 'Network & Infrastructure Automation'],
  ['bank', 'Banking & Financial Systems'],
  ['erp', 'Enterprise ERP Systems'],
] as const;

for (const [role, heading] of rolePages) {
  test(`${role} role page presents its intended content`, async ({ page }) => {
    const response = await page.goto(`/roles/${role}`);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible();
  });
}

test('an unknown project returns a not-found response', async ({ page }) => {
  const response = await page.goto('/projects/not-a-real-project');
  expect(response?.status()).toBe(404);
});
