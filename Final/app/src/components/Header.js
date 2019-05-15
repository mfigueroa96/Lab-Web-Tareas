import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactDOM from "react-dom";
import App from "../App";
import $ from "jquery";
import ReactTestUtils from 'react-test-utils';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goto: false,
            tequila_key: ''
        };

    }

    perform

    tequilaInput_KeyUp = function (e) {
        if (e.keyCode == 13) {
            if (document.getElementById('tequila-serial-num').value.length < 32) {
                e.preventDefault();
                window.alert('Length incorrecto.');
            }
            else {
                this.setState({
                    tequila_key: document.getElementById('tequila-serial-num').value,
                    goto: true
                });
            }
        }
    }

    render() {
        if (this.state.goto) return <Redirect to={`/tequila/${this.state.tequila_key}`} />

        return <div className='header'>
            <div className='header-container'>
                <div className='left-box'>
                    <div className='left-box-content'>
                        <h1>Tequilas de<br/>México S.A. de C.V.</h1>
                        <div className='search-box'>
                            <input autoComplete='off' onKeyUp={this.tequilaInput_KeyUp} id='tequila-serial-num' />
                        </div>
                    </div>
                </div>
                <div className='right-box'>
                    <img src='/assets/header-tequila.png' id='header-tequila-img' />
                </div>
            </div>
        </div>
    }
}