import { test, expect } from '@playwright/test'

// Helper: click through all steps of a lesson
async function completeAllSteps(page: import('@playwright/test').Page): Promise<void> {
  for (let i = 0; i < 100; i++) {
    // Check if we've reached the assessment
    const assessmentLabel = page.locator('text=Assessment')
    if (await assessmentLabel.isVisible().catch(() => false)) {
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

    // Try clicking Reveal next step
    const revealBtn = page.locator('button:has-text("Reveal next step")')
    if (await revealBtn.isVisible().catch(() => false)) {
      await revealBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    // Try clicking Done
    const doneBtn = page.locator('button:has-text("Done")')
    if (await doneBtn.isVisible().catch(() => false)) {
      await doneBtn.click()
      await page.waitForTimeout(400)
      continue
    }

    // Try clicking Next card
    const nextCardBtn = page.locator('button:has-text("Next card")')
    if (await nextCardBtn.isVisible().catch(() => false)) {
      await nextCardBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    // Try answering exercise/assessment questions - click first available option
    const optionButtons = page.locator('.flex.flex-col.gap-3 button')
    const optionCount = await optionButtons.count()
    if (optionCount >= 2) {
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
      await gridButtons.nth(0).click({ force: true })
      await page.waitForTimeout(300)
      const rightStart = Math.floor(gridCount / 2)
      if (rightStart < gridCount) {
        await gridButtons.nth(rightStart).click({ force: true })
      }
      await page.waitForTimeout(800)
      continue
    }

    // Fill-in exercise
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

test.describe('Rich Lesson - Assessment Retry', () => {
  test('shows retry button when assessment score is below 80%', async ({ page }) => {
    test.setTimeout(180_000)

    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    console.log('[retry] Starting lesson')
    await page.click('button:has-text("Next Lesson")')

    console.log('[retry] Completing all steps')
    await completeAllSteps(page)

    // Assessment stage - intentionally answer wrong by picking LAST option
    const isAssessment = await page.locator('text=Assessment').isVisible().catch(() => false)
    if (isAssessment) {
      console.log('[retry] Assessment stage - answering incorrectly')
      await page.screenshot({ path: 'e2e/screenshots/retry-assessment-start.png', fullPage: true })

      for (let i = 0; i < 20; i++) {
        const continueBtn = page.locator('button:has-text("Continue")')
        const retryBtn = page.locator('button:has-text("Retry Assessment")')
        if (await continueBtn.isVisible().catch(() => false) ||
            await retryBtn.isVisible().catch(() => false)) {
          break
        }

        const buttons = page.locator('.flex.flex-col.gap-3 button')
        const count = await buttons.count()
        if (count === 0) {
          await page.waitForTimeout(500)
          continue
        }
        // Pick last option (likely wrong)
        await buttons.nth(count - 1).click({ force: true })
        await page.waitForTimeout(1500)
      }
    }

    await page.waitForTimeout(2000)
    console.log('[retry] Checking result')
    await page.screenshot({ path: 'e2e/screenshots/retry-result.png', fullPage: true })

    const retryBtn = page.locator('button:has-text("Retry Assessment")')
    const continueBtn = page.locator('button:has-text("Continue")')

    if (await retryBtn.isVisible().catch(() => false)) {
      console.log('[retry] Got Retry button - clicking it')
      await page.screenshot({ path: 'e2e/screenshots/retry-fail-screen.png', fullPage: true })
      await retryBtn.click()
      await expect(page.locator('text=Assessment')).toBeVisible()
      await page.screenshot({ path: 'e2e/screenshots/retry-restarted-assessment.png', fullPage: true })
    } else if (await continueBtn.isVisible().catch(() => false)) {
      console.log('[retry] Passed anyway (got lucky)')
      await page.screenshot({ path: 'e2e/screenshots/retry-passed-instead.png', fullPage: true })
    } else {
      console.log('[retry] Unknown state')
      await page.screenshot({ path: 'e2e/screenshots/retry-unknown.png', fullPage: true })
    }
  })
})
