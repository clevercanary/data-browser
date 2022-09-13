import { expect, test } from "@playwright/test";

// TODO: Currently Anvil specific, fixable if we can tell which pages have notable filters and if the Hero components were removed
test("Select a filter and expect it to change displayed components", async ({
  page,
}) => {
  // Go to the biosamples page
  await page.goto("localhost:3000/explore/biosamples");
  // Select the filter dropdown
  await page.locator("_react=Filter >> nth=0").click();
  // Get the name of the first and second filter dropdown
  const FirstFilter = await page.locator("_react=FilterMenu >> nth=0");
  const FilterNames = (await FirstFilter.innerText()).split("\n");
  const FirstFilterName = FilterNames[0];
  const SecondFilterName = FilterNames[2];
  // Get the entries matching the first and second filter entries
  const FirstFilterEntries = await page
    .locator(`_react=TableComponent >> text=${FirstFilterName} >> visible=true`)
    .allInnerTexts();
  const SecondFilterEntries = await page
    .locator(
      `_react=TableComponent >> text=${SecondFilterName} >> visible=true`
    )
    .allInnerTexts();

  // Get the current number of donors
  const HeroLocator = await page.locator("_react=Hero >> div");
  const OldDonorNumber = parseInt(
    (await HeroLocator.allInnerTexts())[3].split("\n")[0]
  );
  // Click the first filter button
  await page.locator(`_react=FilterMenu >> text=${SecondFilterName}`).click();
  // Expect the names matching the selected filter button to be visible
  // but the names from the non-selected filter button to be invisible
  for (let i = 0; i < FirstFilterEntries.length; i++) {
    await expect(
      page.locator(
        `_react=TableComponent >> text=${FirstFilterName} >> nth=${i}`
      )
    ).toBeHidden();
  }
  for (let i = 0; i < SecondFilterEntries.length; i++) {
    await expect(
      page.locator(
        `_react=TableComponent >> text=${SecondFilterName} >> nth=${i}`
      )
    ).toBeVisible;
  }
  // Get new number of donors
  const NewDonorNumber = parseInt(
    (await HeroLocator.allInnerTexts())[3].split("\n")[0]
  );

  // Expect the Hero to show fewer donors than before
  test.fail(OldDonorNumber <= NewDonorNumber, "Summary donor unchanged");
  await expect(page.locator("_react=Hero >> div")).not.toContainText(
    [`${OldDonorNumber}`, "Donors"],
    {
      useInnerText: true,
    }
  );
});

//TODO: Currently Anvil specific solely based on the columns that cause a change, unsure how to fix right now
test("Check that changing sort order changes certain columns", async ({
  page,
}) => {
  // Go to the biosamples page
  await page.goto("localhost:3000/explore/biosamples");
  // Iterate through the first 2 tabs
  await expect(page.locator("_react=TableComponent")).toBeVisible();
  const NumberTabs = 2;
  for (let i = 0; i < NumberTabs; i++) {
    // Find the value of the first row in the correct column
    const CurrentTopEntry =
      (await (
        await page.$(`_react=TableComponent >> td >> nth=${i}`)
      )?.innerText()) ?? "";
    // Click on the sort header
    await page.locator(`_react=TableComponent >> th >> nth=${i}`).click();
    // Expect the first row in the correct column to have changes
    await expect(
      page.locator(`_react=TableComponent >> td >> nth=${i}`)
    ).not.toHaveText(CurrentTopEntry);
    // Click the next one(if there is a next one) to sort it
    if (i < NumberTabs - 1) {
      await page.locator(`_react=TableComponent >> th >> nth=${i + 1}`).click();
    }
  }
});
