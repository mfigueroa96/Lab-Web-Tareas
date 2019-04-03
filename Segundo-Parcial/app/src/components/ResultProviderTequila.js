import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import '../styles/ResultItem.scss';

export default class Result extends Component {

    render() {
        return (
            <Grid item lg={4} md={4} sm={6} xs={12} className="result-item">
                <div className="result-item-wrap">
                    <div className="result-item-brand">{this.props.element.name}</div>
                </div>
            </Grid>
        );
    }
}
