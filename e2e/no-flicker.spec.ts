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

test.describe('No Flickering / Stable Rendering', () => {
  test('exercise does not flicker on answer', async ({ page }) => {
    test.setTimeout(60_000)

    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    // Navigate to first lesson
    await page.click('button:has-text("Next Lesson")')
    await advanceToPractice(page)

    // Track DOM mutations during exercise transitions
    await page.evaluate(() => {
      (window as Record<string, unknown>).__layoutChanges = 0
      const observer = new MutationObserver(() => {
        (window as Record<string, unknown>).__layoutChanges =
          ((window as Record<string, unknown>).__layoutChanges as number) + 1
      })
      const target = document.querySelector('.flex-1') || document.body
      observer.observe(target, { childList: true, subtree: true })
    })

    // Answer an exercise and measure changes
    const buttons = page.locator('.flex.flex-col.gap-3 button')
    await page.evaluate(() => { (window as Record<string, unknown>).__layoutChanges = 0 })

    await buttons.first().click({ force: true })

    // Wait for feedback + auto-advance
    await page.waitForTimeout(2000)

    const layoutChanges = await page.evaluate(
      () => (window as Record<string, unknown>).__layoutChanges as number
    )
    console.log(`Layout changes after one answer: ${layoutChanges}`)

    // Some DOM changes are expected (feedback display, color transitions)
    // but excessive changes would indicate flickering
    expect(layoutChanges).toBeLessThan(20)

    await page.screenshot({ path: 'e2e/screenshots/no-flicker-after-answer.png', fullPage: true })
  })

  test('lesson shows exactly one stage at a time', async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    await page.click('button:has-text("Next Lesson")')
    await expect(page).toHaveURL(/\/lesson\/R01/)

    // First step should be a text step - only step content visible, no assessment
    await expect(page.locator('text=Welcome to Thai reading')).toBeVisible()
    const assessmentVisible = await page.locator('text=Assessment').isVisible().catch(() => false)
    expect(assessmentVisible).toBe(false)

    await page.screenshot({ path: 'e2e/screenshots/no-flicker-single-stage.png', fullPage: true })
  })
})
