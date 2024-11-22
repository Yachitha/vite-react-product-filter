import { test, expect } from "@playwright/test";

test.describe("Products", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display all products initially", async ({ page }) => {
    const productsRows = page.locator("tbody tr");
    await expect(productsRows).toHaveCount(8);
  });

  test("should filter products by name", async ({ page }) => {
    const searchInput = page.getByPlaceholder("Search...");
    await searchInput.fill("apple");
    const productsRows = page.locator("tbody tr");
    await expect(productsRows).toHaveCount(2);
  });

  test("should filter products based on stock checkbox", async ({ page }) => {
    const stockCheckBox = page.getByLabel("Only show products in stock");
    await stockCheckBox.check();
    const productsRows = page.locator("tbody tr");
    await expect(productsRows).toHaveCount(6);
  });

  test("Should filter products by in stock and name", async ({ page }) => {
    await page.getByLabel("Only show products in stock").check();
    await page.getByPlaceholder("Search...").click();
    await page.getByPlaceholder("Search...").fill("S");
    await expect(page.locator("tbody tr")).toHaveCount(3);
  });

});
