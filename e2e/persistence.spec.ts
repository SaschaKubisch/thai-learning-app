import { test, expect } from '@playwright/test'

test.describe('Progress Persistence', () => {
  test('localStorage contains state data with version 2', async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    // Check that state is saved to localStorage
    const hasState = await page.evaluate(() => {
      return localStorage.getItem('thai-app-state') !== null
    })
    expect(hasState).toBe(true)

    // Verify the state structure
    const state = await page.evaluate(() => {
      const raw = localStorage.getItem('thai-app-state')
      return raw ? JSON.parse(raw) : null
    })
    expect(state).not.toBeNull()
    expect(state.version).toBe(2)
    expect(state.currentLesson).toBe(0)
    expect(state.srsRecords).toBeDefined()
    expect(state.lessonResults).toBeDefined()

    await page.screenshot({ path: 'e2e/screenshots/persistence-localstorage-check.png', fullPage: true })
  })

  test('progress persists across page reload', async ({ page }) => {
    test.setTimeout(30_000)

    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    // Verify initial state
    await expect(page.locator('text=0 mastered')).toBeVisible()
    await expect(page.locator('text=0 learned')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/persistence-before.png', fullPage: true })

    // Reload and verify state persists (same zeros)
    await page.reload()
    await page.waitForTimeout(1000)

    await expect(page.locator('text=0 mastered')).toBeVisible()
    await expect(page.locator('text=0 learned')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/persistence-after-reload.png', fullPage: true })
  })

  test('v1 state is migrated to v2', async ({ page }) => {
    await page.goto('/')

    // Set a v1 state
    await page.evaluate(() => {
      const v1State = {
        version: 1,
        currentLesson: 10,
        lastSessionDate: new Date().toISOString(),
        srsRecords: {
          kor_kai: {
            itemId: 'kor_kai',
            itemType: 'consonant',
            state: 'learning',
            interval: 1,
            nextReviewDate: new Date().toISOString(),
            correctStreak: 0,
          },
        },
        lessonResults: {},
      }
      localStorage.setItem('thai-app-state', JSON.stringify(v1State))
    })

    await page.reload()
    await page.waitForTimeout(1000)

    // Verify migration happened
    const state = await page.evaluate(() => {
      const raw = localStorage.getItem('thai-app-state')
      return raw ? JSON.parse(raw) : null
    })

    expect(state.version).toBe(2)
    // Old lesson 10 of 117 should map proportionally to new system
    expect(state.currentLesson).toBeLessThan(30)
    // SRS records should be preserved
    expect(state.srsRecords.kor_kai).toBeDefined()

    await page.screenshot({ path: 'e2e/screenshots/persistence-v1-migration.png', fullPage: true })
  })
})
