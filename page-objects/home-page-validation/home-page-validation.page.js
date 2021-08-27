const { expect } = require('@playwright/test')
const locators = require('./home-page-validation.locators.json')

class TestHomePage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
      this.page = page;
    }
  
  async clickHomeButton() {
      try {
        await this.page.click(locators.HomePageLocators.HomeButton)
        await expect(this.page.url()).toBe('http://127.0.0.1:8080/')
      } catch (error) {
        console.log('Error in clickHomeButton function ', error);
      }
    }
  async checkFocusedHomeButton() {
      try {
        await this.page.click(locators.HomePageLocators.HomeButton)
        const homeLocator = await this.page.locator("//li").first();
        await expect(homeLocator).toHaveClass('active');
      } catch (error) {
        console.log('Error in checkFocusedHomeButton function ', error);
      }
    }

  async homePageH1TagValidation() {
      try {
        await this.page.click(locators.HomePageLocators.HomeButton)
        const locator = await this.page.locator('//h1');
        await expect(locator).toHaveText('Welcome to Pixelmatic QA department');
      } catch (error) {
        console.log('Error in homePageH1TagValidation function ', error);
      }
    }
  async homePagePTagValidation() {
      try {
        await this.page.click(locators.HomePageLocators.HomeButton)
        const locator = await this.page.locator('//p');
        await expect(locator).toHaveText('This site is dedicated to perform some exercises and demonstrate automated web testing.');
      } catch (error) {
        console.log('Error in homePagePTagValidation function ', error);
      }
    }
}

module.exports.TestHomePage = TestHomePage;