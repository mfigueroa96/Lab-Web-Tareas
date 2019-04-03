import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tequila from './components/Tequila';
import Home from './components/Home';
import './App.css';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import NavBar from './components/NavBar';
import AgregarElementoComponent from './components/AgregarElementoComponent';
import ItemsList from './components/ItemList';
import MenuRouter from './components/MenuRouter';

export default class App extends Component {
    render() {
        return <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/tequila/:tequilaKey' component={Tequila} />
        </Router>
    }
}