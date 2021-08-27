const { expect } = require('@playwright/test')
const locators = require('./error-page-validation.locators.json')

class TestErrorPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
      this.page = page;
    }
  
  async validateErrorPageResponse() {
      try {
        await this.page.click(locators.ErrorPageLocators.ErrorButton)
        const locator = await this.page.locator('//h1');
        await expect(locator).toHaveText('404 Error: File not found :-(');
      } catch (error) {
        console.log('Error in validateErrorPageResponse function ', error);
      }
    }
}
module.exports.TestErrorPage = TestErrorPage;
