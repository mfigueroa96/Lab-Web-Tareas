import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tequila from './components/Tequila';
import Provider from './components/Provider';
import Home from './components/Home';
import './App.css';
import UserHistory from './components/UserHistory'

export default class App extends Component {
    render() {
        return <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/tequila/:tequilaKey' component={Tequila} />
            <Route exact path='/provider/:providerKey' component={Provider} />
            <Route exact path='/user/:userKey' component={UserHistory} />
        </Router>
    }
}