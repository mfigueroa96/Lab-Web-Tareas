import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goto: false,
            tequila_key: ''
        };
    }

    tequilaInput_KeyUp = (e) => {
        if (e.keyCode == 13) {
            this.setState({
                tequila_key: document.getElementById('tequila-serial-num').value,
                goto: true
            });
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
                            <input onKeyUp={this.tequilaInput_KeyUp} id='tequila-serial-num' />
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