import { test, expect } from '@playwright/test';
import { homePage } from './homePage';
import { cartPage } from './cartPage';
import { loginPage } from './loginPage';

// This beforeEach hook runs before each test case
test.beforeEach(async ({ page }) => {

    // Initialize the login page
    const login = new loginPage(page);

    // Navigate to the login page
    await login.gotoLoginPage();

    // Log in using predefined credentials
    await login.login();

    // Wait for 3 seconds 
    await page.waitForTimeout(3000);

});

// This is your test case
test('Test case: using Page Object Model', async ({ page }) => {

    // Initialize the home page
    const home = new homePage(page);

    // Add a product to the cart on the home page
    await home.addProductToCart("HTC One M9");

    // Wait for 3 seconds 
    await page.waitForTimeout(3000);

    // Navigate to the cart page
    await home.gotoCart();

    // Initialize the cart page
    const cart = new cartPage(page);

    // Wait for 3 seconds 
    await page.waitForTimeout(3000)

    // Check if the product "HTC One M9" is in the cart and store the result in the 'status' variable
    const status = await cart.checkProductInCart('HTC One M9')

    // Assert that the 'status' is true (product is in the cart)
    expect(status).toBe(true);

    // Remove the product from the cart
    await cart.removeProduct()

})

// This afterEach hook runs after each test case
test.afterEach(async ({ page }) => {

    // Initialize the login page
    const login = new loginPage(page);

    // Log out from the application
    await login.logOutBtn();
});
