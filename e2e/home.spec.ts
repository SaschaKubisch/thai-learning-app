import { test, expect } from '@playwright/test'

test.describe('Home Screen', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
  })

  test('displays app title and subtitle', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Thai Reading')
    await expect(page.locator('text=Learn to read Thai script from day one.')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/home-initial.png', fullPage: true })
  })

  test('shows progress section with phase and lesson count', async ({ page }) => {
    // Should show "Consonants" phase (first phase)
    await expect(page.getByText('Consonants', { exact: true })).toBeVisible()
    // Should show lesson count (30 rich lessons)
    await expect(page.locator('text=/Lesson \\d+ of 30/')).toBeVisible()
    // Should show mastered/learned counts
    await expect(page.locator('text=0 mastered')).toBeVisible()
    await expect(page.locator('text=0 learned')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/home-progress-section.png', fullPage: true })
  })

  test('shows lesson preview card with title and goal', async ({ page }) => {
    await expect(page.locator('text=Your First Thai Letters')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/home-lesson-preview.png', fullPage: true })
  })

  test('shows Next Lesson button when no reviews are due', async ({ page }) => {
    await expect(page.locator('button:has-text("Next Lesson")')).toBeVisible()
    await expect(page.locator('button:has-text("Review")')).not.toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/home-next-lesson-button.png', fullPage: true })
  })

  test('clicking Next Lesson navigates to lesson page', async ({ page }) => {
    await page.click('button:has-text("Next Lesson")')
    await expect(page).toHaveURL(/\/lesson\//)
    // Should show the lesson title in header
    await expect(page.locator('text=Your First Thai Letters')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/home-to-lesson-navigation.png', fullPage: true })
  })
})
