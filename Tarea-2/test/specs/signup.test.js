var assert = require('assert');

describe('Login', () => {
    before(() => {
        console.log('Signup test running...');
    });
    
    it('Successfull Login', () => {
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
        var country = $('#country-field');
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
        country.setValue('Argentina');
        button.click();

        var target = browser.getTitle();
        assert.equal(target, 'Welcome!');
    });

    after(() => {
        console.log('Signup test ending...');
    });
});