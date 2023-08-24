import { test, expect } from '@playwright/test';
// delete require.cache[require.resolve('./tests/homePage.js')];

import { homePage } from './homePage';
import { cartPage } from './cartPage';
import { loginPage } from './loginPage';

test.beforeEach(async ({ page }) => {

    const login = new loginPage(page);
    await login.gotoLoginPage();
    await login.login('Niharika Verma','Testing');
    await page.waitForTimeout(3000);

  });


test('Test case: using Page Object Model', async ({ page }) => {
    

    const login = new loginPage(page);
    await login.gotoLoginPage();
    await login.login('Niharika Verma','Testing');
    await page.waitForTimeout(3000);

    //HomePage

    const home = new homePage(page);
    await home.addProductToCart("Nokia lumia 1520");
    await page.waitForTimeout(3000);
    await home.gotoCart();

    //CartPage

    const cart = new cartPage(page);
    await page.waitForTimeout(3000)
    const status = await cart.checkProductInCart('Nokia lumia 1520')
    expect (status).toBe(true);
    await cart.removeProduct()


})

test.afterEach(async ({ page }) => {

    const login = new loginPage(page);
    
    await login.logOutBtn();
  });