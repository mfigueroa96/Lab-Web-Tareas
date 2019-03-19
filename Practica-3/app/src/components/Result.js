import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Result.scss';

export default class Result extends Component {
    render() {
        var date_info = this.props.element.date.split('-');
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = months[+date_info[1] - 1] + ' ' + date_info[2] + ', ' + date_info[0];

        return (
            <Grid item className="result-item">
                <div className="result-item-wrap">
                    <div className="result-item-date">{date}</div>
                    <div className="result-item-condition">{this.props.element.day.condition.text}</div>
                </div>
            </Grid>
        );
    }
}