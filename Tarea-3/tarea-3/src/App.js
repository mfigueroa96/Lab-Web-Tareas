import React, { Component } from 'react';
import './App.scss';

import Login from './Login';
import Register from './Register';
import SubContainer from './SubContainer';
import Grid from '@material-ui/core/Grid';

class App extends Component {
    render() {
        return (
            <Grid container direction="row" justify="center" alignItems="center" className="main-container">
                <SubContainer>
                    <Login />
                </SubContainer>
                <SubContainer>
                    <Register />
                </SubContainer>
            </Grid>
        );
    }
}

export default App;
