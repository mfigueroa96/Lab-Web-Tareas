import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SectionHeader.scss';

export default class SectionHeader extends Component {
    render() {
        return <div className='tequila-header'>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <a href='/'>
                    <img src='/assets/back.png' />
                    Regresar al inicio
                </a>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img id='tequila-icon-2' src='/assets/tequila-icon-2.png' />
                <h1>Tequilas de México S.A. de C.V.</h1>
            </div>
        </div>
    }
}