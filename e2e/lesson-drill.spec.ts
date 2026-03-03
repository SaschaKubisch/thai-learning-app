import { test, expect } from '@playwright/test'

// Helper: advance through steps until we reach a practice step
async function advanceToPractice(page: import('@playwright/test').Page): Promise<void> {
  for (let i = 0; i < 30; i++) {
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

    // Try clicking Done (for tap-to-reveal)
    const doneBtn = page.locator('button:has-text("Done")')
    if (await doneBtn.isVisible().catch(() => false)) {
      await doneBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    // Try clicking Next card (for tap-to-reveal)
    const nextCardBtn = page.locator('button:has-text("Next card")')
    if (await nextCardBtn.isVisible().catch(() => false)) {
      await nextCardBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    await page.waitForTimeout(500)
  }
}

test.describe('Rich Lesson - Practice Exercises', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
    // Navigate to first lesson
    await page.click('button:has-text("Next Lesson")')
  })

  test('shows exercise with prompt and answer options', async ({ page }) => {
    test.setTimeout(60_000)

    await advanceToPractice(page)

    // Should show multiple choice answer buttons (at least 2)
    const buttons = page.locator('.flex.flex-col.gap-3 button')
    await expect(buttons.first()).toBeVisible({ timeout: 5000 })
    const count = await buttons.count()
    expect(count).toBeGreaterThanOrEqual(2)

    await page.screenshot({ path: 'e2e/screenshots/lesson-drill-flashcard.png', fullPage: true })
  })

  test('shows feedback on answer click', async ({ page }) => {
    test.setTimeout(60_000)

    await advanceToPractice(page)

    // Take screenshot before answering
    await page.screenshot({ path: 'e2e/screenshots/lesson-drill-before-answer.png', fullPage: true })

    // Click the first answer option
    const buttons = page.locator('.flex.flex-col.gap-3 button')
    await buttons.first().click()

    // Should show feedback (green or red border)
    await page.waitForTimeout(300)
    const hasGreen = await page.locator('button[class*="border-green"]').count()
    const hasRed = await page.locator('button[class*="border-red"]').count()
    expect(hasGreen + hasRed).toBeGreaterThan(0)

    await page.screenshot({ path: 'e2e/screenshots/lesson-drill-answer-feedback.png', fullPage: true })
  })
})
