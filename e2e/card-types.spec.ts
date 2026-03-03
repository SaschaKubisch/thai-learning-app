import { test, expect } from '@playwright/test'

// Helper: advance through steps until we reach a practice step
async function advanceToPractice(page: import('@playwright/test').Page): Promise<void> {
  for (let i = 0; i < 30; i++) {
    const practiceLabel = page.locator('text=Practice')
    if (await practiceLabel.isVisible().catch(() => false)) {
      return
    }

    const continueBtn = page.locator('button:has-text("Continue")')
    if (await continueBtn.isVisible().catch(() => false)) {
      await continueBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    const nextBtn = page.locator('button:has-text("Next")')
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    const doneBtn = page.locator('button:has-text("Done")')
    if (await doneBtn.isVisible().catch(() => false)) {
      await doneBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    const nextCardBtn = page.locator('button:has-text("Next card")')
    if (await nextCardBtn.isVisible().catch(() => false)) {
      await nextCardBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    await page.waitForTimeout(500)
  }
}

test.describe('Exercise Types Verification', () => {
  test('multiple choice exercise shows prompt and options', async ({ page }) => {
    test.setTimeout(60_000)

    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    // Start first lesson
    await page.click('button:has-text("Next Lesson")')
    await advanceToPractice(page)

    // Should have answer buttons
    const buttons = page.locator('.flex.flex-col.gap-3 button')
    await expect(buttons.first()).toBeVisible({ timeout: 5000 })
    const buttonCount = await buttons.count()
    expect(buttonCount).toBeGreaterThanOrEqual(2)
    expect(buttonCount).toBeLessThanOrEqual(4)

    await page.screenshot({ path: 'e2e/screenshots/card-type-multiple-choice.png', fullPage: true })
  })

  test('exercise shows correct and incorrect feedback colors', async ({ page }) => {
    test.setTimeout(60_000)

    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    await page.click('button:has-text("Next Lesson")')
    await advanceToPractice(page)

    // Click an answer and capture feedback
    const buttons = page.locator('.flex.flex-col.gap-3 button')
    await buttons.first().click()

    // Wait a moment for feedback to show
    await page.waitForTimeout(300)

    // Check for green (correct) or red (incorrect) feedback
    const greenBorder = await page.locator('button[class*="border-green"]').count()
    const redBorder = await page.locator('button[class*="border-red"]').count()

    // There should always be exactly one green-bordered button (the correct answer)
    expect(greenBorder).toBe(1)

    if (redBorder > 0) {
      await page.screenshot({ path: 'e2e/screenshots/card-feedback-incorrect.png', fullPage: true })
    } else {
      await page.screenshot({ path: 'e2e/screenshots/card-feedback-correct.png', fullPage: true })
    }
  })
})
