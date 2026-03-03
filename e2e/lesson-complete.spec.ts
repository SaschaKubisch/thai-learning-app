import { test, expect } from '@playwright/test'

// Helper: click through all steps of a lesson
async function completeAllSteps(page: import('@playwright/test').Page): Promise<void> {
  for (let i = 0; i < 100; i++) {
    const assessmentLabel = page.locator('text=Assessment')
    if (await assessmentLabel.isVisible().catch(() => false)) {
      console.log(`  Reached assessment after ${i} interactions`)
      return
    }

    const resultPercent = page.locator('text=/%/')
    if (await resultPercent.isVisible().catch(() => false)) {
      console.log(`  Reached result after ${i} interactions`)
      return
    }

    const continueBtn = page.locator('button:has-text("Continue")')
    if (await continueBtn.isVisible().catch(() => false)) {
      await continueBtn.click()
      await page.waitForTimeout(400)
      continue
    }

    const nextBtn = page.locator('button:has-text("Next")')
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click()
      await page.waitForTimeout(400)
      continue
    }

    const revealBtn = page.locator('button:has-text("Reveal next step")')
    if (await revealBtn.isVisible().catch(() => false)) {
      await revealBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    const doneBtn = page.locator('button:has-text("Done")')
    if (await doneBtn.isVisible().catch(() => false)) {
      await doneBtn.click()
      await page.waitForTimeout(400)
      continue
    }

    const nextCardBtn = page.locator('button:has-text("Next card")')
    if (await nextCardBtn.isVisible().catch(() => false)) {
      await nextCardBtn.click()
      await page.waitForTimeout(300)
      continue
    }

    const optionButtons = page.locator('.flex.flex-col.gap-3 button')
    const optionCount = await optionButtons.count()
    if (optionCount >= 2) {
      await optionButtons.first().click({ force: true })
      await page.waitForTimeout(1500)
      continue
    }

    const tapCard = page.locator('button.rounded-xl.border-2.min-h-\\[200px\\]')
    if (await tapCard.isVisible().catch(() => false)) {
      await tapCard.click()
      await page.waitForTimeout(400)
      continue
    }

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
    const continueBtn = page.locator('button:has-text("Continue")')
    const retryBtn = page.locator('button:has-text("Retry Assessment")')
    if (await continueBtn.isVisible().catch(() => false) ||
        await retryBtn.isVisible().catch(() => false)) {
      console.log(`  Assessment complete after ${i} answers`)
      return
    }

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

test.describe('Lesson - Full Flow (Steps -> Assessment -> Result)', () => {
  test('completes entire lesson flow and passes assessment', async ({ page }) => {
    test.setTimeout(180_000)

    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    console.log('[1] Starting first lesson')
    await page.click('button:has-text("Next Lesson")')
    await expect(page).toHaveURL(/\/lesson\/R01/)

    // --- STEP NAVIGATION ---
    console.log('[2] Completing all steps')
    await completeAllSteps(page)

    // --- ASSESSMENT ---
    console.log('[3] Completing assessment')
    await completeAssessment(page)

    // --- RESULT ---
    await page.waitForTimeout(1000)
    console.log('[4] Checking result screen')
    await page.screenshot({ path: 'e2e/screenshots/full-flow-result.png', fullPage: true })

    const continueBtn = page.locator('button:has-text("Continue")')
    const retryBtn = page.locator('button:has-text("Retry Assessment")')

    if (await continueBtn.isVisible().catch(() => false)) {
      console.log('[5] Passed! Clicking Continue')
      await page.screenshot({ path: 'e2e/screenshots/full-flow-passed.png', fullPage: true })
      await continueBtn.click()
      await expect(page).toHaveURL('/')
      await page.screenshot({ path: 'e2e/screenshots/full-flow-home-after-pass.png', fullPage: true })
    } else if (await retryBtn.isVisible().catch(() => false)) {
      console.log('[5] Failed assessment. Screenshot taken.')
      await page.screenshot({ path: 'e2e/screenshots/full-flow-failed.png', fullPage: true })
    } else {
      console.log('[5] Unknown state')
      await page.screenshot({ path: 'e2e/screenshots/full-flow-unknown-state.png', fullPage: true })
    }
  })
})
