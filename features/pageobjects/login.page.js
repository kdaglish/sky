const { Browser } = require('selenium-webdriver');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get accept_pop_up () { return $('button[title="Agree"]') }
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }
    get dealsSubmit () { return $('a[href="https://www.sky.com/shop/offers"]') }
    get signInLink () { return $('a[class="tab-focus sign-in-link"]') }
    get signInUsername () { return $('input[id="username"]') }
    get signInPassword () { return $('input[id="password"]') }
    get btnSignIn () { return $('button[id="signinButton"]') }
    get signInError () { return $('//li[text()="Sorry, we did not recognise either your username or password"]') }
    get btnShowSearch () { return $('svg[class="search-toggle__icon"]') }
    get inputSearch () { return $('input[type="search"]') }
    get btnSearch () { return $('button[data-test-id="submit-button"]') }
    get titleSkyshop () { return $('//a[@class= "c-editorial-layer__title" and text()="Sky Shop"]') }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        // browser.setCookies({ name, value, path, domain, secure, httpOnly, expiry, sameSite })
        // browser.deleteAllCookies()
        return super.open('login');
    }

    accept_cookies () {
        // browser.maximizeWindow()
        // browser.setCookies([
        //     {name: 'test', value: '123'},
        //     {name: 'test2', value: '456'}
        // ])
        // const testCookie = browser.getCookies(['test'])
        // console.log(testCookie);
        // browser.deleteAllCookies()
        // console.log(browser.isAlertOpen()); 
        // browser.switchToFrame('sp_message_iframe_450949')
        // browser.switchToParentFrame()
        // var my_frame = $('iframe[id="sp_message_iframe_450949"]').value;
        // console.log(my_frame)
        // browser.frame(my_frame);
        // browser.switchToFrame('sp_message_iframe_450949')
        // this.accept_pop_up.click();
        // browser.pause(1000)
        // console.log(browser.getWindowHandles());
        // browser.switchToFrame(id)
        // browser.pause(3000)
        // this.accept_pop_up.click();
        // browser.acceptAlert()
        // browser.dismissAlert()
    }

    click_deals() {
        this.dealsSubmit.click(); 
    }

    assert_offers_page() {
        console.log(super.get_url());
        expect(super.get_url()).toBe('https://www.sky.com/deals');
    }

    attempt_sky_sign_in() {
        console.log('next test');
        this.signInLink.click();
        console.log(this.signInError);
        this.signInUsername.setValue('failure');
        this.signInPassword.setValue('failure');
        this.btnSignIn.click();
    }

    assert_sign_in_error() {
        console.log(this.signInError);
        expect(this.signInError).toBeDisplayed();
    }
    
    go_to_offers_page() {
        return browser.url('https://www.sky.com/shop/offers');
    }

    assert_offers(price) {
        var str1 = '//span[text()="Now, "]//..//..//span[text()="£';
        var str2 = price;
        var str3 = '"]';
        var locator = str1.concat(str2, str3)
        // get checkPrice () { return $('locator')}
        console.log(locator)
        expect($(locator)).toBeDisplayed()
    }

    search_website(search) {
        this.btnShowSearch.click();
        this.inputSearch.setValue(search);
        // this.btnSearch.waitForClickable({ timeout: 3000 });
        browser.pause(3000)
        this.btnSearch.click();
    }
    
    assert_sky_shop_page() {
        expect(this.titleSkyshop).toBeDisplayed()
    }
}

module.exports = new LoginPage();