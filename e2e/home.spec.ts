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

  test('shows progress section with lesson count', async ({ page }) => {
    // Should show progress with lesson count
    await expect(page.locator('text=/\\d+ of 30 completed/')).toBeVisible()
    // Should show mastered/learned counts
    await expect(page.locator('text=0 mastered')).toBeVisible()
    await expect(page.locator('text=0 learned')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/home-progress-section.png', fullPage: true })
  })

  test('shows all lessons grouped by phase', async ({ page }) => {
    // Phase headers should be visible
    await expect(page.locator('h2:has-text("Consonants")')).toBeVisible()
    await expect(page.locator('h2:has-text("Vowels")')).toBeVisible()
    await expect(page.locator('h2:has-text("Reading Practice")')).toBeVisible()
    // First lesson should be visible
    await expect(page.locator('text=Your First Thai Letters')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/home-lesson-list.png', fullPage: true })
  })

  test('shows Next Lesson button when no reviews are due', async ({ page }) => {
    await expect(page.locator('button:has-text("Next Lesson")')).toBeVisible()
    await expect(page.locator('button:has-text("Review ("):visible')).not.toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/home-next-lesson-button.png', fullPage: true })
  })

  test('clicking Next Lesson navigates to lesson page', async ({ page }) => {
    await page.click('button:has-text("Next Lesson")')
    await expect(page).toHaveURL(/\/lesson\//)
    // Should show the lesson title in header
    await expect(page.locator('text=Your First Thai Letters')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/home-to-lesson-navigation.png', fullPage: true })
  })

  test('future lessons show skill preview on click', async ({ page }) => {
    // Click a future lesson (R02 should be future since we haven't completed R01)
    await page.locator('button:has-text("More Mid-Class Consonants")').click()
    // Should show the skill preview modal
    await expect(page.locator('text=Start from Your First Thai Letters')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/home-skill-preview.png', fullPage: true })
  })
})
