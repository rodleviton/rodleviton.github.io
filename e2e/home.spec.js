import { test, expect } from "@playwright/test"

test.describe("home", () => {
  test("should navigate user to the home page", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000")

    await expect(page.locator("h1")).toContainText(
      "Rod Leviton"
    )
  })
})
