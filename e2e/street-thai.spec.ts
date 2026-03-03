import { test, expect } from '@playwright/test'

test.describe('Street Thai Mode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
  })

  test('toggles to street thai mode and shows 10 chapters', async ({ page }) => {
    // Should show normal mode initially
    await expect(page.locator('h1')).toContainText('Thai Reading')

    // Click street thai toggle
    await page.click('button[aria-label="Toggle street thai mode"]')

    // Should show street thai header
    await expect(page.locator('h1')).toContainText('Street Thai')
    await expect(page.locator('text=Learn the Thai they don\'t teach in school.')).toBeVisible()

    // Should show 10 of 10 in progress
    await expect(page.locator('text=/\\d+ of 10 completed/')).toBeVisible()
  })

  test('all street thai chapters are clickable (none locked)', async ({ page }) => {
    // Enable street thai mode
    await page.click('button[aria-label="Toggle street thai mode"]')

    // S01 should be visible and clickable
    const s01 = page.locator('button:has-text("Forget Everything Your Teacher Taught You")')
    await expect(s01).toBeVisible()

    // Click it -- should navigate to lesson
    await s01.click()
    await expect(page).toHaveURL(/\/lesson\/S01/)
  })

  test('can navigate to any chapter without progression gating', async ({ page }) => {
    // Enable street thai mode
    await page.click('button[aria-label="Toggle street thai mode"]')

    // Click the last chapter (S10) -- should be directly accessible
    const s10 = page.locator('button:has-text("High Risk, High Reward")')
    await expect(s10).toBeVisible()
    await s10.click()
    await expect(page).toHaveURL(/\/lesson\/S10/)
  })

  test('toggling back shows normal 30 lessons', async ({ page }) => {
    // Enable street thai
    await page.click('button[aria-label="Toggle street thai mode"]')
    await expect(page.locator('h1')).toContainText('Street Thai')

    // Toggle back
    await page.click('button[aria-label="Toggle street thai mode"]')
    await expect(page.locator('h1')).toContainText('Thai Reading')

    // Should show 30 lessons again
    await expect(page.locator('text=/\\d+ of 30 completed/')).toBeVisible()

    // First normal lesson should be visible
    await expect(page.locator('text=Your First Thai Letters')).toBeVisible()
  })

  test('street thai mode hides Next Lesson and Review buttons', async ({ page }) => {
    // Enable street thai mode
    await page.click('button[aria-label="Toggle street thai mode"]')

    // Next Lesson should not be visible
    await expect(page.locator('button:has-text("Next Lesson")')).not.toBeVisible()
  })

  test('street thai preference persists across reload', async ({ page }) => {
    // Enable street thai mode
    await page.click('button[aria-label="Toggle street thai mode"]')
    await expect(page.locator('h1')).toContainText('Street Thai')

    // Reload
    await page.reload()

    // Should still be in street thai mode
    await expect(page.locator('h1')).toContainText('Street Thai')
  })

  test('S01 lesson loads and shows content', async ({ page }) => {
    // Enable street thai mode
    await page.click('button[aria-label="Toggle street thai mode"]')

    // Navigate to S01
    await page.locator('button:has-text("Forget Everything Your Teacher Taught You")').click()
    await expect(page).toHaveURL(/\/lesson\/S01/)

    // Should show lesson content (first step is a text step)
    await expect(page.locator('text=Continue')).toBeVisible()
  })
})
