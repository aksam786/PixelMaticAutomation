const { TestUITitlePage } = require('../page-objects/title-check/test-ui-title.page');
const { TestHomePage } = require('../page-objects/home-page-validation/home-page-validation.page');
const { TestFormPage } = require('../page-objects/form-page-validation/form-page-validation');
const { TestErrorPage } = require('../page-objects/error-page-validation/error-page-validation')
const { UITestingButtonPage } = require('../page-objects/ui-testing-button-validation/ui-testing-button-validation')
const { TestLogoPage } = require('../page-objects/company-logo-validation/company-logo-validation')
const conf = require('../conf/conf');
const { test } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto(conf.websiteURL);
});
test.describe('Pixel Matic Main Title Validation', () => {
    test('verify the Title of Site', async ({ page }) => {
      await test.step('verifying the title of site', async () => {
        const testUITitlePage = new TestUITitlePage(page)
        await testUITitlePage.checkUiTitle()
      });
    });
  });

  test.describe('Validate Company Logo on Each Page', () => {
    test('verify that Company Logo is present on each page', async ({ page }) => {
        const testLogoPage = new TestLogoPage(page)
        await testLogoPage.validateLogoOnEachPage()
    });
  });

  test.describe('Home Page Validation', () => {
    test('verify that Home page is reached when Home Button is clicked', async ({ page }) => {
        const testHomePage = new TestHomePage(page)
        await testHomePage.clickHomeButton()
    });
    test('verify that Home page is active when Home Button is clicked', async ({ page }) => {
        const testHomePage = new TestHomePage(page)
        await testHomePage.checkFocusedHomeButton()
    });
    test('verify that Home page H1 Tag contains text welcome to pixelmatic QA department', async ({ page }) => {
        const testHomePage = new TestHomePage(page)
        await testHomePage.homePageH1TagValidation()
    });
    test('verify that Home page P tag text', async ({ page }) => {
        const testHomePage = new TestHomePage(page)
        await testHomePage.homePagePTagValidation()
    });
  });

  test.describe('Form Page Validation', () => {
    test('verify that Form page is reached when Form Button is clicked', async ({ page }) => {
        const testFormPage = new TestFormPage(page)
        await testFormPage.clickFormButton()
    });
    test('verify that Form button is active when Form Button is clicked', async ({ page }) => {
      const testFormPage = new TestFormPage(page)
      await testFormPage.checkFocusedFormButton()
    });
    test('verify that on Form page form field and button is visible', async ({ page }) => {
      const testFormPage = new TestFormPage(page)
      await testFormPage.validateFormOnFormPage()
    });
    test('verify Hello Page on Form', async ({ page }) => {
      const testFormPage = new TestFormPage(page)
      await testFormPage.validateHelloPage()
    });
  });

  test.describe('Error Page Validation', () => {
    test('verify that 404 response is recevived when Error Button is clicked', async ({ page }) => {
        const testErrorPage = new TestErrorPage(page)
        await testErrorPage.validateErrorPageResponse()
    });
  });

  test.describe('UI Testing Button Validation', () => {
    test('verify that Home page is reached when UI Testing Button is clicked', async ({ page }) => {
        const uiTestingButtonPage = new UITestingButtonPage(page)
        await uiTestingButtonPage.validateUITestingButton()
    });
  });
