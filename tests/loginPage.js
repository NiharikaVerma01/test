import userData from "../data";

export class loginPage{

    constructor(page){
        this.page = page;
        this.loginLink = "#login2";
        this.usernameInput='#loginusername';
        this.passwordInput= '#loginpassword';
        this.loginButton='//button[normalize-space()="Log in"]';
        this.logoutButton = "#logout2";
    }

    async gotoLoginPage(){
        await this.page.goto('https://demoblaze.com/index.html');
    }
    
    async login(){
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(userData.username);
        await this.page.locator(this.passwordInput).fill(userData.password);
        await this.page.locator(this.loginButton).click();
    }
    async logOutBtn(){
        await this.page.locator(this.logoutButton).click();
    }

}