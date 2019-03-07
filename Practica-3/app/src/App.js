import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import 'typeface-roboto';
import './App.scss';
import Heading from './Heading';
import Content from './Content';

class App extends Component {
    render() {
        return (
            <div className="main">
                <Heading />
                <Content />
            </div>
        );
    }
}

export default App;
