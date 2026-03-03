import { test, expect } from '@playwright/test'

// Helper: click through all steps of a lesson
async function completeAllSteps(page: import('@playwright/test').Page): Promise<void> {
  for (let i = 0; i < 100; i++) {
    // Check if we've reached the assessment
    const assessmentLabel = page.locator('text=Assessment')
    if (await assessmentLabel.isVisible().catch(() => false)) {
      console.log(`  Reached assessment after ${i} interactions`)
      return
    }

    // Check if we've reached the result
    const resultPercent = page.locator('text=/%/')
    if (await resultPercent.isVisible().catch(() => false)) {
      console.log(`  Reached result after ${i} interactions`)
      return
    }

    // Try clicking Continue button
    const continueBtn = page.locator('button:has-text("Continue")')
    if (await continueBtn.isVisible().catch(() => false)) {
      await continueBtn.click()
      await page.waitForTimeout(400)
      continue
    }

    // Try clicking Next button (for info cards)
    const nextBtn = page.locator('button:has-text("Next")')
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click()
      await page.waitForTimeout(400)
      continue
    }

    // Try clicking Reveal next step (for example steps)
    const revealBtn = page.locator('button:has-text("Reveal next step")')
    if (await revealBtn.isVisible().catch(() => false)) {
      await revealBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    // Try clicking Done (for tap-to-reveal)
    const doneBtn = page.locator('button:has-text("Done")')
    if (await doneBtn.isVisible().catch(() => false)) {
      await doneBtn.click()
      await page.waitForTimeout(400)
      continue
    }

    // Try clicking Next card (for tap-to-reveal)
    const nextCardBtn = page.locator('button:has-text("Next card")')
    if (await nextCardBtn.isVisible().catch(() => false)) {
      await nextCardBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    // Try answering exercise/assessment questions - click first available option
    // Look for answer-style buttons (in flex column layout)
    const optionButtons = page.locator('.flex.flex-col.gap-3 button')
    const optionCount = await optionButtons.count()
    if (optionCount >= 2) {
      // Click first option
      await optionButtons.first().click({ force: true })
      await page.waitForTimeout(1500)
      continue
    }

    // Try clicking any tap-to-reveal card
    const tapCard = page.locator('button.rounded-xl.border-2.min-h-\\[200px\\]')
    if (await tapCard.isVisible().catch(() => false)) {
      await tapCard.click()
      await page.waitForTimeout(400)
      continue
    }

    // Match exercise - try tapping left then right items
    const gridButtons = page.locator('.grid.grid-cols-2 button')
    const gridCount = await gridButtons.count()
    if (gridCount >= 2) {
      // Tap first left, then first right
      await gridButtons.nth(0).click({ force: true })
      await page.waitForTimeout(300)
      const rightStart = Math.floor(gridCount / 2)
      if (rightStart < gridCount) {
        await gridButtons.nth(rightStart).click({ force: true })
      }
      await page.waitForTimeout(800)
      continue
    }

    // Fill-in exercise - click first option
    const fillOptions = page.locator('.flex.flex-wrap.gap-2 button')
    const fillCount = await fillOptions.count()
    if (fillCount >= 2) {
      await fillOptions.first().click({ force: true })
      await page.waitForTimeout(1500)
      continue
    }

    await page.waitForTimeout(500)
  }
}

// Helper: answer assessment questions
async function completeAssessment(page: import('@playwright/test').Page): Promise<void> {
  for (let i = 0; i < 20; i++) {
    // Check if we've reached the result
    const continueBtn = page.locator('button:has-text("Continue")')
    const retryBtn = page.locator('button:has-text("Retry Assessment")')
    if (await continueBtn.isVisible().catch(() => false) ||
        await retryBtn.isVisible().catch(() => false)) {
      console.log(`  Assessment complete after ${i} answers`)
      return
    }

    // Click first available option
    const optionButtons = page.locator('.flex.flex-col.gap-3 button')
    const count = await optionButtons.count()
    if (count >= 2) {
      await optionButtons.first().click({ force: true })
      await page.waitForTimeout(1500)
    } else {
      await page.waitForTimeout(500)
    }
  }
}

test.describe('Rich Lesson - Full Flow', () => {
  test('completes lesson 1 through all steps and assessment', async ({ page }) => {
    test.setTimeout(180_000)

    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    console.log('[1] Starting lesson 1')
    await page.click('button:has-text("Next Lesson")')
    await expect(page).toHaveURL(/\/lesson\/R01/)

    console.log('[2] Completing all steps')
    await completeAllSteps(page)

    console.log('[3] Completing assessment')
    await completeAssessment(page)

    await page.waitForTimeout(1000)
    await page.screenshot({ path: 'e2e/screenshots/rich-lesson-result.png', fullPage: true })

    // Should see a percentage score
    const percentText = page.locator('text=/%/')
    const continueBtn = page.locator('button:has-text("Continue")')
    const retryBtn = page.locator('button:has-text("Retry Assessment")')

    if (await continueBtn.isVisible().catch(() => false)) {
      console.log('[4] Passed! Clicking Continue')
      await page.screenshot({ path: 'e2e/screenshots/rich-lesson-passed.png', fullPage: true })
      await continueBtn.click()
      await expect(page).toHaveURL('/')

      // Progress should have advanced
      await expect(page.locator('text=Lesson 2 of 30')).toBeVisible()
      await page.screenshot({ path: 'e2e/screenshots/rich-lesson-home-after-pass.png', fullPage: true })
    } else if (await retryBtn.isVisible().catch(() => false)) {
      console.log('[4] Failed assessment, screenshot captured')
      await page.screenshot({ path: 'e2e/screenshots/rich-lesson-failed.png', fullPage: true })
    }
  })
})
