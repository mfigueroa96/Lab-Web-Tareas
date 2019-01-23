import {MDCRipple} from '@material/ripple/index';
import {MDCTextField} from '@material/textfield';
import {MDCSelect} from '@material/select';

const ripple = new MDCRipple(document.querySelector('.foo-button'));
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const passwordField = new MDCTextField(document.querySelector('.password-field'));
const nameField = new MDCTextField(document.querySelector('.name-field'));
const lastnameField = new MDCTextField(document.querySelector('.lastname-field'));
const emailField = new MDCTextField(document.querySelector('.email-field'));
const regPasswordField = new MDCTextField(document.querySelector('.register-password-field'));
const regUsernameField = new MDCTextField(document.querySelector('.register-username-field'));
const addressField = new MDCTextField(document.querySelector('.address-field'));
const hoodField = new MDCTextField(document.querySelector('.hood-field'));
const cpField = new MDCTextField(document.querySelector('.cp-field'));
const cityField = new MDCTextField(document.querySelector('.city-field'));
const stateField = new MDCTextField(document.querySelector('.state-field'));
const countryField = new MDCSelect(document.querySelector('.select-field'));
const registerBtn = new MDCRipple(document.querySelector('.register-btn'));

console.log('hello world');