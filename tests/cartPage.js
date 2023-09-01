export class cartPage {

    constructor(page) {
        this.page = page;
        // XPath selector for the number of products in the cart
        this.noOfProducts =   '//tbody[@id="tbodyid"]/tr/td[2]'; 
        
        // Selector for the "Delete" link 
        this.removeItem =  page.getByRole('link', { name: 'Delete' }).nth(0); 
    }

    async checkProductInCart(productName) {
        const productsInCart = await this.page.$$(this.noOfProducts);

        // Iterate through the products in the cart
        for (const product of productsInCart) {
            console.log(await product.textContent());

            if (productName === await product.textContent()) {
                return true; // Return true if the product is found in the cart
            }
        }
        
        // If the product is not found, it will return undefined, indicating that the product is not in the cart
    }

    async removeProduct() {
        // Click on the "Delete" link to remove the product from the cart
        await this.removeItem.click(); 
    }
}
