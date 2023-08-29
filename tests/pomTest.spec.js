import { test, expect } from '@playwright/test';
// delete require.cache[require.resolve('./tests/homePage.js')];

import { homePage } from './homePage';
import { cartPage } from './cartPage';
import { loginPage } from './loginPage';

test.beforeEach(async ({ page }) => {

    const login = new loginPage(page);
    await login.gotoLoginPage();
    await login.login();
    await page.waitForTimeout(3000);

  });


test('Test case: using Page Object Model', async ({ page }) => {
    

      //HomePage

    const home = new homePage(page);
    await home.addProductToCart("HTC One M9");
    await page.waitForTimeout(3000);
    await home.gotoCart();

    //CartPage

    const cart = new cartPage(page);
    await page.waitForTimeout(3000)
    const status = await cart.checkProductInCart('HTC One M9')
    expect (status).toBe(true);
    await cart.removeProduct()


})

test.afterEach(async ({ page }) => {

    const login = new loginPage(page);
    
    await login.logOutBtn();
  });