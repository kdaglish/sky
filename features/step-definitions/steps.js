const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');


const pages = {
    login: LoginPage
}

Given(/^I am on the login page$/, () => {
    LoginPage.open()
});

When(/^I login with (\w+) and (.+)$/, (username, password) => {
    LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Given(/^I am on the home page$/, () => {
    LoginPage.open()
});

Given(/^I am on the offers page$/, () => {
    LoginPage.go_to_offers_page()
});

When(/^I navigate to Deals$/, () => {
    LoginPage.click_deals()
});

When(/^I try to sign in with invalid credentials$/, function() {
    LoginPage.attempt_sky_sign_in()
});

When(/^I search (\w+) in the search bar$/, (search) => {
    LoginPage.search_website(search)
});

Then('the user should be on the offers page', () => {
    LoginPage.assert_offers_page()
});

Then('I should see a text saying that Sorry, we did not recognise either your username or password',function(){
    LoginPage.assert_sign_in_error()
});

Then(/^I see a list of offers with a (\w+) to it$/, (price) => {
    LoginPage.assert_offers(price)
});

Then('I should see an editorial section', function() {
    LoginPage.assert_sky_shop_page()
});