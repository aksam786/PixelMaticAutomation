const { expect } = require('@playwright/test')
const locators = require('./company-logo-validation.locators.json')

class TestLogoPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
      this.page = page;
    }
    async validateLogoOnEachPage() {
        try {
          await this.page.click(locators.CompanyLogoLocators.UITestingPage)
          const Logo = await this.page.locator(locators.CompanyLogoLocators.Logo)
          await expect(Logo).toBeVisible()
          await this.page.click(locators.CompanyLogoLocators.HomePage)
          const LogoOnHomePage = await this.page.locator(locators.CompanyLogoLocators.Logo)
          await expect(LogoOnHomePage).toBeVisible()
          await this.page.click(locators.CompanyLogoLocators.FormPage)
          const LogoOnFormPage = await this.page.locator(locators.CompanyLogoLocators.Logo)
          await expect(LogoOnFormPage).toBeVisible()
        } catch (error) {
          console.log('Error in validateLogoOnEachPage function ', error);
        }
    }
}
module.exports.TestLogoPage = TestLogoPage;
