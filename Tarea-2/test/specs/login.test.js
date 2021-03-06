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
        assert.equal(fontFamily.value, 'roboto');
    });

    after(() => {
        console.log('First css test ending');
    });
});

describe('checkFocus', ()=>{
    before(()=>{
      console.log('Switching Focus test...');
    });

    it('Foucus Test',function(done){
        browser.url('/');
        var classColor = $('.mdc-text-field__input');
        browser.call(done);
        var colorFocus = classColor.getCSSProperty('caret-color');
        console.log(colorFocus);
        assert.equal(colorFocus.value, 'rgb(98,0,238)');
        browser.call(done);
    });

    after(()=>{
      console.log('Focus test finished...');
    });
});

describe('WidthFrame', ()=>{
    before(()=>{
      console.log('Switching Frame Width test...');
    });

    it('Frame Width Test',function(done){
        browser.url('/');
        var loginFrame = $('.login-content');
        var loginFramePix = loginFrame.getCSSProperty('width');
        assert.equal(loginFramePix.value, '400px');
        browser.call(done);
    });

    after(()=>{
      console.log('Frame Width test finished...');
    });
});
