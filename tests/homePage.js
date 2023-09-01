export class homePage {

    constructor(page) {

        this.page = page;
        // XPath selector for the product list
        this.productList =  '//*[@id="tbodyid"]/div/div/div/h4/a'; 

        // CSS selector for the "Add to Cart" button
        this.addToCartBtn =  '.btn-success'; 
        
        // CSS selector for the cart icon
        this.cart =  '#cartur'; 
        
    }

    async addProductToCart(productName) {

        // Get all product elements on the page
        const productList = await this.page.$$(this.productList);

        // Iterate through the product elements
        for (const product of productList) {
            if (productName === await product.textContent()) {
                // Click on the product with a matching name
                await product.click(); 
                break;
            }
        }

        // Wait for the "Add to Cart" button to become available
        await this.page.waitForSelector(this.addToCartBtn);

        // Handle any dialog that appears, typically indicating the product was added
        await this.page.on('dialog', async dialog => {
            if (dialog.message().includes("added")) {
                await dialog.accept(); // Accept the dialog
            }
        });

        // Click the "Add to Cart" button
        await this.page.locator(this.addToCartBtn).click();
    }

    async gotoCart() {
        // Click on the cart icon to go to the cart page
        await this.page.locator(this.cart).click(); 
    }

}
