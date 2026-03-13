import { Given, When, Then } from "@wdio/cucumber-framework";
import Page from "../pageobjects/page.js";

const index = new Page();

Given(/^I am on the (.+) page$/, async (page) => {
  await index.open(page);
});

Given("I am at the index page", async () => {
  await index.open();
});

When(/^I click the (.+) link$/, async function (page) {
  this.page = page;

  const currentUrl = await browser.getUrl();

  await index.click(page);

  await browser.waitUntil(async () => (await browser.getUrl()) !== currentUrl, {
    timeout: 10000,
  });
});

Then("I should be driected to the selected page", async function () {
  const expectedPath = index.paths[this.page];

  await browser.waitUntil(
    async () => (await browser.getUrl()).includes(expectedPath),
    {
      timeout: 15000,
      timeoutMsg: `URL did not navigate to ${expectedPath}`,
    },
  );
});