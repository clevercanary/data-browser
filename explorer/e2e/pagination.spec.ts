import { expect, test } from "@playwright/test";

const PaginationSelector = "_react=Pagination";
//TODO: Could use _react=IconButton >> nth=0/1, not sure what's best
const BackButtonSelector = "data-testid=WestRoundedIcon";
const ForwardButtonSelector = "data-testid=EastRoundedIcon";

test.beforeEach(async ({ page }) => {
  //TODO: Stop using this I think it has some weird race conditions
  await page.goto("localhost:3000/explore/");
  // Start by going to the first tab, just because the first tab often only has one page
  let i = 0;
  let PageText = await page.locator(PaginationSelector).innerText();
  while (PageText == "Page 1 of 1") {
    // Find a page with multiple entries
    i = i + 1;
    const OldUrl = page.url();
    await page.locator(`_react=Tabs >> button >> nth=${i}`).click();
    await expect(page).not.toHaveURL(OldUrl, { timeout: 10000 });
    await expect(page.locator("_react=TableComponent")).toBeVisible();
    PageText = await page.locator(PaginationSelector).innerText(); //TODO: this is broken somehow, occasionally will click one tab too far
  }
});

test("Check first page has correct buttons", async ({ page }) => {
  // Should start on first page
  await expect(page.locator(PaginationSelector)).toContainText("Page 1 of ");
  // Back Button should start disabled
  await expect(page.locator(BackButtonSelector).locator("..")).toBeDisabled();
  // Forward button should start enabled
  await expect(page.locator(ForwardButtonSelector).locator("..")).toBeEnabled();
});

test("Check last page has correct buttons and that forward pagination increases the page count", async ({
  page,
}) => {
  const TestTwoPageText = await page.locator(PaginationSelector).innerText();
  // Should start on first page
  await expect(page.locator(PaginationSelector)).toContainText("Page 1 of ");
  // TODO: Come up with something for really long tables since this will time out
  const SplitStartingPageText = TestTwoPageText.split(" ");
  const max_pages = parseInt(
    SplitStartingPageText[SplitStartingPageText.length - 1]
  );

  // Paginate forwards
  for (let i = 2; i < max_pages + 1; i++) {
    await page.locator(ForwardButtonSelector).click();
    // Expect the page count to have incremented
    await expect(page.locator(PaginationSelector)).toContainText(
      `Page ${i} of ${max_pages}`
    );
  }
  // Expect to be on the last page
  await expect(page.locator(PaginationSelector)).toContainText(
    `Page ${max_pages} of ${max_pages}`
  );
  // Expect the back button to be enabled on the last page
  await expect
    .soft(page.locator(BackButtonSelector).locator(".."))
    .toBeEnabled();
  // Expect the forward button to be disabled
  await expect
    .soft(page.locator(ForwardButtonSelector).locator(".."))
    .toBeDisabled();
});

test("Check forward and backwards pagination causes values to change", async ({
  page,
}) => {
  const TestThreePageText = await page.locator(PaginationSelector).innerText();
  // Should start on first page
  await expect(page.locator(PaginationSelector)).toContainText("Page 1 of ");
  const SplitStartingPageText = TestThreePageText.split(" ");
  const max_pages = parseInt(
    SplitStartingPageText[SplitStartingPageText.length - 1]
  );

  const FirstTableEntries = [];

  // Paginate forwards
  const FirstTableEntrySelector = "_react=TableComponent >> td >> nth=0";
  for (let i = 2; i < max_pages + 1; i++) {
    const OriginalFirstTableEntry = await page
      .locator(FirstTableEntrySelector)
      .innerText();
    // Click the next button
    await page.locator(ForwardButtonSelector).click();
    // Expect the page count to have incremented
    await expect(page.locator(PaginationSelector)).toContainText(
      `Page ${i} of ${max_pages}`
    );
    // Expect the back button to be enabled
    await expect
      .soft(page.locator(BackButtonSelector).locator(".."))
      .toBeEnabled(); //TODO: When finalized this should not be soft
    // Expect the forwards button to be enabled
    await expect
      .soft(page.locator(ForwardButtonSelector).locator(".."))
      .toBeEnabled(); //TODO: When finalized this should not be soft
    // Expect the first entry to have changed on the new page(THIS IS NOT A GOOD WAY TO DO THIS)
    await expect
      .soft(page.locator(FirstTableEntrySelector))
      .not.toHaveText(OriginalFirstTableEntry); //TODO: will fail if entries happen to be the same, that's bad. Also not checked on last page
    // Remember the first entry
    FirstTableEntries.push(OriginalFirstTableEntry);
  }

  // Paginate backwards
  for (let i = 0; i < max_pages - 1; i++) {
    const OldFirstTableEntry = FirstTableEntries[max_pages - i - 2];
    await page.locator(BackButtonSelector).click();
    // Expect page number to be correct
    await expect(page.locator(PaginationSelector)).toContainText(
      `Page ${max_pages - i - 1} of ${max_pages}`
    );
    // Expect page entry to be consistent with forward pagination
    await expect(page.locator(FirstTableEntrySelector)).toHaveText(
      OldFirstTableEntry
    );
  }
});
