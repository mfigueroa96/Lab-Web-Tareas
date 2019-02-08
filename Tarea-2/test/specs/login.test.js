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

describe('Font', () => {
    before(() => {
        console.log('First css test starting');
    });

    it('font correcta',function(done){
        browser.url('/');
        var classF = $('.mdc-typography--headline4');
        browser.call(done);
        var fontFamily = classF.getCSSProperty('font-family');
        console.log(fontFamily);
        assert.equal(fontFamily.value, 'roboto');
    });

    after(() => {
        console.log('First css test ending');
    });
});

