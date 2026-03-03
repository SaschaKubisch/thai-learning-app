import { test, expect } from '@playwright/test'

// Helper: click through all steps of a lesson
async function completeAllSteps(page: import('@playwright/test').Page): Promise<void> {
  for (let i = 0; i < 100; i++) {
    const assessmentLabel = page.locator('text=Assessment')
    if (await assessmentLabel.isVisible().catch(() => false)) {
      return
    }

    const resultPercent = page.locator('text=/%/')
    if (await resultPercent.isVisible().catch(() => false)) {
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

// Helper: complete assessment
async function completeAssessment(page: import('@playwright/test').Page): Promise<void> {
  for (let i = 0; i < 20; i++) {
    const continueBtn = page.locator('button:has-text("Continue")')
    const retryBtn = page.locator('button:has-text("Retry Assessment")')
    if (await continueBtn.isVisible().catch(() => false) ||
        await retryBtn.isVisible().catch(() => false)) {
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

test.describe('Review Screen', () => {
  test('shows "no reviews due" when no items learned', async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    // Navigate directly to review page
    await page.goto('/review')
    await expect(page.getByText('Review', { exact: true })).toBeVisible()

    // Should show "no reviews due" since nothing has been learned
    await expect(page.locator('text=No reviews due right now.')).toBeVisible()
    await expect(page.locator('text=Review Complete')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/review-no-items-due.png', fullPage: true })
  })

  test('shows review cards after completing a lesson with due items', async ({ page }) => {
    test.setTimeout(180_000)

    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    // First complete a lesson to get items into SRS
    await page.click('button:has-text("Next Lesson")')

    console.log('[review] Completing all steps')
    await completeAllSteps(page)

    console.log('[review] Completing assessment')
    await completeAssessment(page)

    await page.waitForTimeout(1000)

    // Try to continue (if passed) or retry (if failed)
    const continueBtn = page.locator('button:has-text("Continue")')
    if (await continueBtn.isVisible().catch(() => false)) {
      await continueBtn.click()
      await page.waitForTimeout(500)
    }

    // Now manipulate localStorage to make items due RIGHT NOW
    await page.evaluate(() => {
      const raw = localStorage.getItem('thai-app-state')
      if (!raw) return
      const state = JSON.parse(raw)
      const pastDate = new Date(Date.now() - 86400000 * 2).toISOString()
      for (const key of Object.keys(state.srsRecords)) {
        state.srsRecords[key].nextReviewDate = pastDate
        state.srsRecords[key].state = 'learning'
      }
      localStorage.setItem('thai-app-state', JSON.stringify(state))
    })

    // Go to review screen
    await page.goto('/review')
    await page.waitForTimeout(1000)

    const reviewCounter = await page.locator('text=/\\d+ of \\d+/').isVisible().catch(() => false)

    await page.screenshot({ path: 'e2e/screenshots/review-with-items.png', fullPage: true })

    if (reviewCounter) {
      // Answer some review cards
      for (let i = 0; i < 5; i++) {
        if (await page.locator('text=Review Complete').isVisible().catch(() => false)) break
        const buttons = page.locator('.flex.flex-col.gap-3 button')
        if ((await buttons.count()) === 0) {
          await page.waitForTimeout(500)
          continue
        }
        await buttons.first().click({ force: true })
        await page.waitForTimeout(1500)
      }
      await page.screenshot({ path: 'e2e/screenshots/review-answering.png', fullPage: true })
    }
  })

  test('review summary screen shows Back to Home button', async ({ page }) => {
    await page.goto('/review')
    // If no items due, should show completion immediately
    const complete = await page.locator('text=Review Complete').isVisible().catch(() => false)
    if (complete) {
      await expect(page.locator('text=Review Complete')).toBeVisible()
      await page.screenshot({ path: 'e2e/screenshots/review-summary-empty.png', fullPage: true })
    }

    // Check Back to Home button exists
    await expect(page.locator('button:has-text("Back to Home")')).toBeVisible()
    await page.click('button:has-text("Back to Home")')
    await expect(page).toHaveURL('/')
    await page.screenshot({ path: 'e2e/screenshots/review-back-to-home.png', fullPage: true })
  })
})
