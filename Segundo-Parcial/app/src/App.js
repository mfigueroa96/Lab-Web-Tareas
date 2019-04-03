import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Tequila from './components/Tequila';
import Provider from './components/Provider'

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
            <Route exact path='/tequila/:tequilaKey' component={Tequila} />
            <Route exact path='/tequila/:providerKey' component={Provider} />
        </Router>
    }
}