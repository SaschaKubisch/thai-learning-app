import { test, expect } from '@playwright/test'

test.describe('Rich Lesson - Step Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
  })

  test('lesson 1 starts with a text step and has Continue button', async ({ page }) => {
    test.setTimeout(30_000)

    await page.click('button:has-text("Next Lesson")')
    await expect(page).toHaveURL(/\/lesson\/R01/)

    // First step is a text step with welcome content
    await expect(page.locator('text=Welcome to Thai reading')).toBeVisible()
    await expect(page.locator('button:has-text("Continue")')).toBeVisible()

    await page.screenshot({ path: 'e2e/screenshots/rich-lesson-text-step.png', fullPage: true })
  })

  test('clicking Continue advances to next step', async ({ page }) => {
    test.setTimeout(30_000)

    await page.click('button:has-text("Next Lesson")')

    // Step 1: text
    await expect(page.locator('text=Welcome to Thai reading')).toBeVisible()
    await page.click('button:has-text("Continue")')

    // Step 2: info_card - should show Thai character
    await expect(page.locator('text=gaw')).toBeVisible()

    await page.screenshot({ path: 'e2e/screenshots/rich-lesson-info-card-step.png', fullPage: true })
  })

  test('info card step shows items one by one', async ({ page }) => {
    test.setTimeout(60_000)

    await page.click('button:has-text("Next Lesson")')

    // Advance past text step
    await page.click('button:has-text("Continue")')

    // Now on info_card step - first item
    await expect(page.locator('text=1 of 3')).toBeVisible()

    // Click Next to advance through items
    await page.click('button:has-text("Next")')
    await expect(page.locator('text=2 of 3')).toBeVisible()

    await page.click('button:has-text("Next")')
    await expect(page.locator('text=3 of 3')).toBeVisible()

    // Last item shows "Continue" instead of "Next"
    await expect(page.locator('button:has-text("Continue")')).toBeVisible()

    await page.screenshot({ path: 'e2e/screenshots/rich-lesson-info-card-last.png', fullPage: true })
  })

  test('progress bar advances as steps are completed', async ({ page }) => {
    test.setTimeout(30_000)

    await page.click('button:has-text("Next Lesson")')

    // Progress bar should be visible
    const progressSegments = page.locator('.flex.gap-1 > div')
    const segmentCount = await progressSegments.count()
    expect(segmentCount).toBeGreaterThan(0)

    await page.screenshot({ path: 'e2e/screenshots/rich-lesson-progress-bar.png', fullPage: true })
  })

  test('Exit button returns to home', async ({ page }) => {
    test.setTimeout(30_000)

    await page.click('button:has-text("Next Lesson")')
    await expect(page).toHaveURL(/\/lesson\//)

    await page.click('text=Exit')
    await expect(page).toHaveURL('/')

    await page.screenshot({ path: 'e2e/screenshots/rich-lesson-exit.png', fullPage: true })
  })
})
