import { test, expect } from '@playwright/test'

test.describe('Rich Lesson - First Steps', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
    // Navigate to first lesson
    await page.click('button:has-text("Next Lesson")')
    await expect(page).toHaveURL(/\/lesson\/R01/)
  })

  test('shows first text step with welcome content', async ({ page }) => {
    // First step is a text step with welcome content
    await expect(page.locator('text=Welcome to Thai reading')).toBeVisible()
    // Should show Continue button
    await expect(page.locator('button:has-text("Continue")')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/lesson-intro-first-step.png', fullPage: true })
  })

  test('advances through steps with Continue button', async ({ page }) => {
    // First step - text
    await expect(page.locator('text=Welcome to Thai reading')).toBeVisible()
    await page.click('button:has-text("Continue")')

    // Second step - info card (introducing Thai characters)
    await expect(page.locator('text=gaw')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/lesson-intro-second-step.png', fullPage: true })
  })

  test('info card shows items one by one with counter', async ({ page }) => {
    // Advance to info card step
    await page.click('button:has-text("Continue")')

    // Should show item counter
    await expect(page.locator('text=1 of 3')).toBeVisible()
    // Should show Next button
    await expect(page.locator('button:has-text("Next")')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/lesson-intro-info-card.png', fullPage: true })
  })

  test('Exit button returns to home', async ({ page }) => {
    await page.click('text=Exit')
    await expect(page).toHaveURL('/')
    await expect(page.locator('h1')).toContainText('Thai Reading')
    await page.screenshot({ path: 'e2e/screenshots/lesson-exit-to-home.png', fullPage: true })
  })
})
