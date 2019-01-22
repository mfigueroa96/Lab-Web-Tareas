import {MDCRipple} from '@material/ripple/index';
import {MDCTextField} from '@material/textfield';

const ripple = new MDCRipple(document.querySelector('.foo-button'));
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const passwordField = new MDCTextField(document.querySelector('.mdc-password-field'));

console.log('hello world');