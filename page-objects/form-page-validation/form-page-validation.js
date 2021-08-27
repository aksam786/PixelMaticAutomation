const { expect } = require('@playwright/test')
const locators = require('./form-page-validation.locators.json')

class TestFormPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
      this.page = page;
    }
  
    async clickFormButton() {
      try {
        await this.page.click(locators.FormPageLocators.FormButton)
        await expect(this.page.url()).toBe('http://127.0.0.1:8080/form.html')
      } catch (error) {
        console.log('Error in clickFormButton function ', error);
      }
    }
    async checkFocusedFormButton() {
        try {
          await this.page.click(locators.FormPageLocators.FormButton)
          const formLocator = await this.page.locator("(//li)[2]");
          await expect(formLocator).toHaveClass('active');
        } catch (error) {
          console.log('Error in checkFocusedHomeButton function ', error);
        }
      }
    async validateFormOnFormPage() {
        try {
          await this.page.click(locators.FormPageLocators.FormButton)
          const FormField = await this.page.locator(locators.FormPageLocators.FormId)
          await expect(FormField).toBeVisible()
          const FormGoButton = await this.page.locator(locators.FormPageLocators.FormGoButton)
          await expect(FormGoButton).toBeVisible()
        } catch (error) {
          console.log('Error in validateFormOnFormPage function ', error);
        }
    }
    async validateHelloPage() {
        try {
          await this.page.click(locators.FormPageLocators.FormButton)
          const FormField = await this.page.locator(locators.FormPageLocators.FormId)
          await FormField.type('John')
          const FormGoButton = await this.page.locator(locators.FormPageLocators.FormGoButton)
          await FormGoButton.click()
          const FormText = await this.page.locator(locators.FormPageLocators.FormResult)
          await expect(FormText).toHaveText('Hello John!')
        } catch (error) {
          console.log('Error in validateHelloPage function ', error);
        }
    }
}
module.exports.TestFormPage = TestFormPage;
