import React, { Component } from 'react';
import Header from './Header';
import '../styles/Home.scss';

export default class Home extends Component {
    render() {
        return <div>
            <Header />
            <div style={{height: '1000px'}}></div>
        </div>
    }
}