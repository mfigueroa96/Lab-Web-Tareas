import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Heading.scss';

export default class Heading extends Component {
    render() {
        return (
            <div className="heading">
                <Grid container>
                    <Grid item xs={12} lg={6} className="left-item">
                        <h1>Weather Storm or Sun</h1>
                    </Grid>
                    <Grid item xs={12} lg={6} className="right-item">
                        <h2>{this.props.city}</h2>
                    </Grid>
                </Grid>
            </div>
        );
    }
}