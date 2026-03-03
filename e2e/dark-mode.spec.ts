import { test, expect } from '@playwright/test'

test.describe('Dark Mode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
  })

  test('toggles dark class on html element', async ({ page }) => {
    // Should not have dark class initially
    const html = page.locator('html')
    await expect(html).not.toHaveClass(/dark/)

    // Click dark mode toggle
    await page.click('button[aria-label="Toggle dark mode"]')
    await expect(html).toHaveClass(/dark/)

    // Click again to disable
    await page.click('button[aria-label="Toggle dark mode"]')
    await expect(html).not.toHaveClass(/dark/)
  })

  test('persists dark mode preference across reload', async ({ page }) => {
    // Enable dark mode
    await page.click('button[aria-label="Toggle dark mode"]')
    await expect(page.locator('html')).toHaveClass(/dark/)

    // Reload page
    await page.reload()

    // Should still be dark
    await expect(page.locator('html')).toHaveClass(/dark/)
  })

  test('dark mode applies to lesson screen', async ({ page }) => {
    // Enable dark mode
    await page.click('button[aria-label="Toggle dark mode"]')

    // Navigate to a lesson
    await page.click('button:has-text("Next Lesson")')
    await expect(page).toHaveURL(/\/lesson\//)

    // html should still have dark class
    await expect(page.locator('html')).toHaveClass(/dark/)
  })
})
