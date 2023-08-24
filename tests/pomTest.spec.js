const { test, expect } = require('@playwright/test');
// delete require.cache[require.resolve('./tests/homePage.js')];

const { HomePage } = require( './homePage');
const { CartPage } = require('./cartPage');
const { LoginPage } = require('./loginPage');


test('Test case: using Page Object Model', async ({ page }) => {

    //LoginPage

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('Niharika Verma','Testing');
    await page.waitForTimeout(3000);

    //HomePage

    const home = new HomePage(page);
    await home.addProductToCart("Nokia lumia 1520");
    await page.waitForTimeout(3000);
    await home.gotoCart();

    //CartPage

    const cart = new CartPage(page);
    await page.waitForTimeout(3000)
    const status = await cart.checkProductInCart('Nokia lumia 1520')
    expect (status).toBe(true);


})