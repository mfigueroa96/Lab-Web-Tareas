var assert = require('assert');

describe('Signin', () => {
    before(() => {
        console.log('Signup test running...');
    });
    
    it('Successfull Signup', () => {
        browser.url('/');
        var name = $('#name-field');
        var lastname = $('#lastname-field');
        var email = $('#email-field');
        var username = $('#new-username-field');
        var password = $('#new-password-field');
        var address = $('#address-field');
        var barrio = $('#barrio-field');
        var cp = $('#cp-field');
        var city = $('#city-field');
        var state = $('#state-field');
        var button = $('#signup-field');
        name.setValue('Nombre');
        lastname.setValue('Apellido');
        email.setValue('email@email.com');
        username.setValue('user');
        password.setValue('pass');
        address.setValue('Avenida kul');
        barrio.setValue("Barrio Loco");
        cp.setValue('312');
        city.setValue('Córdoba');
        state.setValue('Córdoba');
        button.click();

        var target = browser.getTitle();
        assert.equal(target, 'Welcome!');
    });

    after(() => {
        console.log('Signup test ending...');
    });
});

describe('NumCP', () => {
    before(() => {
        console.log('CP test running...');
    });

    it('CP cannot be a number', () => {
        browser.url('/');
        var cp = $('#cp-field');
        cp.setValue('test');
        var button = $('#signup-field');
        button.click();

        var target = browser.getTitle();
        assert.equal(target, 'Login / Sign in');
    });

    after(() => {
        console.log('CP test ending...');
    });
});