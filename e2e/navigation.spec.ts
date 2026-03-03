import { test, expect } from '@playwright/test'

test.describe('Navigation and Routing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
  })

  test('navigates from home to lesson and back', async ({ page }) => {
    // Home -> Lesson
    await page.click('button:has-text("Next Lesson")')
    await expect(page).toHaveURL(/\/lesson\//)
    await page.screenshot({ path: 'e2e/screenshots/nav-home-to-lesson.png', fullPage: true })

    // Lesson -> Home via Exit
    await page.click('text=Exit')
    await expect(page).toHaveURL('/')
    await page.screenshot({ path: 'e2e/screenshots/nav-lesson-to-home.png', fullPage: true })
  })

  test('navigates from home to review and back', async ({ page }) => {
    // Navigate directly to review
    await page.goto('/review')
    await expect(page.getByText('Review', { exact: true })).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/nav-review-screen.png', fullPage: true })

    // Review -> Home via Back to Home
    await page.click('button:has-text("Back to Home")')
    await expect(page).toHaveURL('/')
    await page.screenshot({ path: 'e2e/screenshots/nav-review-to-home.png', fullPage: true })
  })

  test('review Exit button returns to home', async ({ page }) => {
    await page.goto('/review')
    await page.click('text=Exit')
    await expect(page).toHaveURL('/')
    await page.screenshot({ path: 'e2e/screenshots/nav-review-exit.png', fullPage: true })
  })

  test('direct URL to lesson page works', async ({ page }) => {
    await page.goto('/lesson/R01')
    await page.waitForTimeout(500)
    // Should show the lesson title
    await expect(page.locator('text=Your First Thai Letters')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/nav-direct-lesson-url.png', fullPage: true })
  })

  test('invalid lesson URL shows not found', async ({ page }) => {
    await page.goto('/lesson/nonexistent_lesson_xyz')
    await page.waitForTimeout(500)
    await expect(page.locator('text=Lesson not found.')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/nav-invalid-lesson.png', fullPage: true })
  })
})
