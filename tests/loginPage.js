import userData from "../data";

export class loginPage {

    constructor(page){
        this.page = page;
        // Locator for the login link element
        this.loginLink = "#login2";      

        // Locator for the username input element
        this.usernameInput = '#loginusername';
        
        // Locator for the password input element
        this.passwordInput = '#loginpassword';   

        // Locator for the login button element
        this.loginButton = '//button[normalize-space()="Log in"]';  

        // Locator for the logout button element
        this.logoutButton =  "#logout2";    
    }

    async gotoLoginPage(){
        // Navigates to the homepage of the application
        await this.page.goto('/');   
    }
    
    async login(){
        // Clicks on the login link to open the login form
        await this.page.locator(this.loginLink).click();

        // Enters the username from the 'userData' object
        await this.page.locator(this.usernameInput).fill(userData.username);  

        // Enters the password from the 'userData' object
        await this.page.locator(this.passwordInput).fill(userData.password);  
        
        // Clicks the login button to log in
        await this.page.locator(this.loginButton).click(); 
    }
    
    async logOutBtn(){
        // Clicks the logout button to log out
        await this.page.locator(this.logoutButton).click();  
    }
}
