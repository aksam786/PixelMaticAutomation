const { expect } = require('@playwright/test')
const locators = require('./ui-testing-button-validation.locators.json')

class UITestingButtonPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
      this.page = page;
    }
  
  async validateUITestingButton() {
      try {
        await this.page.click(locators.UITestingButton.UiTestingButton)
        const locator = await this.page.locator('//h1');
        await expect(locator).toHaveText('Welcome to Pixelmatic QA department');
      } catch (error) {
        console.log('Error in clickFormButton function ', error);
      }
    }
}
module.exports.UITestingButtonPage = UITestingButtonPage;