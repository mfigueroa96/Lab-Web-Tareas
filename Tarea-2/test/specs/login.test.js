var assert = require('assert');

describe('Login', () => {
    before(() => {
        console.log('Signin test running...');
    });

    it('Successfull Login', () => {
        browser.url('/');
        var username = $('#username-field');
        username.setValue('user01');
        var password = $('#password-field');
        password.setValue('class');
        var button = $('#login-btn');
        button.click();
        var target = browser.getTitle();
        assert.equal(target, 'Welcome!');
    });

    after(() => {
        console.log('Signin test ending...');
    });
});