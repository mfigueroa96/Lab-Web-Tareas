import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'typeface-roboto';
import './App.scss';
import Main from './components/Main';
import Weather from './components/Weather';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path='/' exact component={Main} />
                    <Route path='/:city' exact component={Weather} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;