import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import Heading from './Heading';
import { Grid } from '@material-ui/core';
import './Main.scss';

export default class Main extends Component {
    state = { showCity: false, city: '' };

    goSearch = () => {
        this.setState({city: document.getElementById('city-input').value,
            showCity: true});
    }

    goToCity = () => {
        if (this.state.showCity) {
            return <Redirect to={'/' + this.state.city} />
        }
    }

    searchKeyDown = (e) => {
        if (e.keyCode == 13) {
            this.goSearch();
        }
    }

    render() {
        return (
            <div>
                {this.goToCity()}
                <Grid container>
                    <Grid item lg={4} xs={12}>
                    </Grid>
                    <Grid item lg={4} xs={12} className="container">
                        <h1>Weather Storm or Sun</h1>
                        <Input id="city-input" onKeyDown={this.searchKeyDown} />
                        <Button onClick={this.goSearch}>Search</Button>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                    </Grid>
                </Grid>
                
            </div>
        );
    }
}