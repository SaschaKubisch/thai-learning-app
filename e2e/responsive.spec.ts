import { test, expect } from '@playwright/test'

test.describe('Responsive Design', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
  })

  test('mobile viewport (320px)', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 })
    await page.waitForTimeout(500)

    await expect(page.locator('h1')).toContainText('Thai Reading')
    await page.screenshot({ path: 'e2e/screenshots/responsive-mobile-320-home.png', fullPage: true })

    // Navigate to lesson
    await page.click('button:has-text("Next Lesson")')
    await expect(page).toHaveURL(/\/lesson\/R01/)
    // Should show the first text step
    await expect(page.locator('text=Welcome to Thai reading')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/responsive-mobile-320-lesson.png', fullPage: true })
  })

  test('tablet viewport (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.waitForTimeout(500)

    await expect(page.locator('h1')).toContainText('Thai Reading')
    await page.screenshot({ path: 'e2e/screenshots/responsive-tablet-768-home.png', fullPage: true })

    // Navigate to lesson
    await page.click('button:has-text("Next Lesson")')
    await expect(page).toHaveURL(/\/lesson\/R01/)
    await expect(page.locator('text=Welcome to Thai reading')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/responsive-tablet-768-lesson.png', fullPage: true })
  })

  test('desktop viewport (1440px)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.waitForTimeout(500)

    await expect(page.locator('h1')).toContainText('Thai Reading')
    await page.screenshot({ path: 'e2e/screenshots/responsive-desktop-1440-home.png', fullPage: true })

    // Navigate to lesson
    await page.click('button:has-text("Next Lesson")')
    await expect(page).toHaveURL(/\/lesson\/R01/)
    await expect(page.locator('text=Welcome to Thai reading')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/responsive-desktop-1440-lesson.png', fullPage: true })
  })
})
