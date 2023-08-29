export class cartPage {

    constructor(page){
        this.page= page;
        this.noOfProducts= '//tbody[@id="tbodyid"]/tr/td[2]'
        this.removeItem = page.getByRole('link',{name:'Delete'}).nth(1);

    }

    async checkProductInCart(productName) {
        const productsInCart = await this.page.$$(this.noOfProducts)
        for (const product of productsInCart){
            console.log(await product.textContent())

            if (productName === await product.textContent()){
                return true;
               //break;
            }
        }
        
    }
    async removeProduct(){
        await this.removeItem.click();
    }
}