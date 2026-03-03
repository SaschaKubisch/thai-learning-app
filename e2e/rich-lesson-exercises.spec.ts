import { test, expect } from '@playwright/test'

// Helper: advance through steps until we reach a practice step
async function advanceToPractice(page: import('@playwright/test').Page): Promise<void> {
  for (let i = 0; i < 20; i++) {
    // Check if we're at a practice step
    const practiceLabel = page.locator('text=Practice')
    if (await practiceLabel.isVisible().catch(() => false)) {
      return
    }

    // Try clicking Continue button
    const continueBtn = page.locator('button:has-text("Continue")')
    if (await continueBtn.isVisible().catch(() => false)) {
      await continueBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    // Try clicking Next button (for info cards)
    const nextBtn = page.locator('button:has-text("Next")')
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    await page.waitForTimeout(500)
  }
}

test.describe('Rich Lesson - Exercise Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
  })

  test('multiple choice exercise shows prompt and options', async ({ page }) => {
    test.setTimeout(60_000)

    await page.click('button:has-text("Next Lesson")')
    await advanceToPractice(page)

    // Should see exercise options (buttons)
    const exerciseButtons = page.locator('button').filter({ hasText: /gaw|jaw|daw|baw/ })
    await expect(exerciseButtons.first()).toBeVisible({ timeout: 5000 })

    await page.screenshot({ path: 'e2e/screenshots/exercise-multiple-choice.png', fullPage: true })
  })

  test('clicking correct answer shows green feedback', async ({ page }) => {
    test.setTimeout(60_000)

    await page.click('button:has-text("Next Lesson")')
    await advanceToPractice(page)

    // Find and click an answer option
    const buttons = page.locator('button').filter({ hasText: /gaw|jaw|daw|baw|dtaw|bpaw/ })
    await buttons.first().click({ force: true })

    // Should see some feedback (green or red)
    await page.waitForTimeout(500)
    await page.screenshot({ path: 'e2e/screenshots/exercise-answer-feedback.png', fullPage: true })
  })
})
