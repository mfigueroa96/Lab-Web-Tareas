import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase';
import Tequila from './components/Tequila';
import Provider from './components/Provider';
import Home from './components/Home';
import './App.css';
import UserHistory from './components/UserHistory'


export default class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyDnt_wEFS56XBct5cxhRE-wh9iJ1kvkMtY",
            authDomain: "labweb-239421.firebaseapp.com",
            databaseURL: "https://labweb-239421.firebaseio.com",
            projectId: "labweb-239421",
            storageBucket: "labweb-239421.appspot.com",
            messagingSenderId: "19237448659",
            appId: "1:19237448659:web:a7e55125ce9cf96a"
        };

        firebase.initializeApp(config);
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
    }

    render() {
        return <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/tequila/:tequilaKey' component={Tequila} />
            <Route exact path='/provider/:providerKey' component={Provider} />
            <Route exact path='/user/:userKey' component={UserHistory} />
        </Router>
    }
}