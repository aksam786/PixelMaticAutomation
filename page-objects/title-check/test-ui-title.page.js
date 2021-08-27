const { expect } = require('@playwright/test')
class TestUITitlePage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
      this.page = page;
    }
  
    async checkUiTitle() {
      try {
        const pageTitle = await this.page.title();
        await expect(pageTitle).toBe('UI Testing Site');
      } catch (error) {
        console.log('Error in checkUiTitle function ', error);
      }
    }
}

module.exports.TestUITitlePage = TestUITitlePage;