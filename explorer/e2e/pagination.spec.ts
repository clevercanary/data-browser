import { expect, test } from "@playwright/test";

test.describe("Pagination", () => {
  const paginationSelector = "_react=Pagination";
  const backButtonSelector = "data-testid=WestRoundedIcon";
  const forwardButtonSelector = "data-testid=EastRoundedIcon";

  test.beforeEach(async ({ page }) => {
    await page.goto("localhost:3000/explore/");
    // Start by going to the first tab, just because the first tab often only has one page
    let i = 0;
    let page_text = await page.locator(paginationSelector).innerText();
    while (page_text == "Page 1 of 1") {
      // Find a page with multiple entries
      i = i + 1;
      await page.locator(`_react=Tabs >> button >> nth=${i}`).click();
      await expect(
        page.locator(`_react=Tabs >> button >> nth=${i}`)
      ).toHaveAttribute("aria-selected", "true");
      await page.waitForTimeout(5000);
      page_text = await page.locator(paginationSelector).innerText();
    }
  });
  test("Check first page works properly", async ({ page }) => {
    // Back Button should start disabled
    await expect(page.locator(backButtonSelector).locator("..")).toBeDisabled();
    // Forward button should start enabled
    await expect(
      page.locator(forwardButtonSelector).locator("..")
    ).toBeEnabled();
    await page.waitForTimeout(5000);
  });

  test("Check last page works properly", async ({ page }) => {
    // Start by going to the first tab, just because the first tab often only has one page
    const page_text = await page.locator(paginationSelector).innerText();
    // Should start on first page
    await expect(page.locator(paginationSelector)).toContainText("Page 1 of ");
    // TODO: Come up with something for really long tables since this will time out
    const split_starting_page_text = page_text.split(" ");
    const max_pages = parseInt(
      split_starting_page_text[split_starting_page_text.length - 1]
    );

    // Paginate forwards
    for (let i = 2; i < max_pages + 1; i++) {
      await page.locator(forwardButtonSelector).click();
      // Expect the page count to have incremented
      await expect(page.locator(paginationSelector)).toContainText(
        `Page ${i} of ${max_pages}`
      );
    }
    // Expect to be on the last page
    await expect(page.locator(paginationSelector)).toContainText(
      `Page ${max_pages} of ${max_pages}`
    );
    // Expect the back button to be enabled on the last page
    await expect
      .soft(page.locator(backButtonSelector).locator(".."))
      .toBeEnabled();
    // Expect the forward button to be disabled
    await expect
      .soft(page.locator(forwardButtonSelector).locator(".."))
      .toBeDisabled();
    // Expect clicking the forward button not to do anything
    await page.locator(forwardButtonSelector).click();
    await expect(page.locator(paginationSelector)).toContainText(
      `Page ${max_pages} of ${max_pages}`
    );
  });

  test("Check forward and backwards pagination causes values to change", async ({
    page,
  }) => {
    const page_text = await page.locator(paginationSelector).innerText();
    // Should start on first page
    await expect(page.locator(paginationSelector)).toContainText("Page 1 of ");
    const split_starting_page_text = page_text.split(" ");
    const max_pages = parseInt(
      split_starting_page_text[split_starting_page_text.length - 1]
    );

    const first_table_entries = [];

    // Paginate forwards
    const FirstTableEntrySelector = "_react=TableComponent >> td >> nth=0";
    for (let i = 2; i < max_pages + 1; i++) {
      const original_first_table_entry = await page
        .locator(FirstTableEntrySelector)
        .innerText();
      // Click the next button
      await page.locator(forwardButtonSelector).click(); //TODO: Could use _react=IconButton >> nth=1, not sure what's best
      // Expect the page count to have incremented
      await expect(page.locator(paginationSelector)).toContainText(
        `Page ${i} of ${max_pages}`
      );
      // Expect the back button to be enabled
      await expect
        .soft(page.locator(backButtonSelector).locator(".."))
        .toBeEnabled(); //TODO: When finalized this should not be soft
      // Expect the forwards button to be enabled
      await expect
        .soft(page.locator(forwardButtonSelector).locator(".."))
        .toBeEnabled(); //TODO: When finalized this should not be soft
      // Expect the first entry to have changed on the new page(THIS IS NOT A GOOD WAY TO DO THIS)
      await expect
        .soft(page.locator(FirstTableEntrySelector))
        .not.toHaveText(original_first_table_entry); //TODO: will fail if entries happen to be the same, that's bad. Also not checked on last page
      // Remember the first entry
      first_table_entries.push(original_first_table_entry);
    }

    // Paginate backwards
    for (let i = 0; i < max_pages - 1; i++) {
      const old_first_table_entry = first_table_entries[max_pages - i - 2];
      await page.locator(backButtonSelector).click();
      await expect(page.locator(paginationSelector)).toContainText(
        `Page ${max_pages - i - 1} of ${max_pages}`
      );
      await expect(page.locator(FirstTableEntrySelector)).toHaveText(
        old_first_table_entry
      );
    }
  });
});
