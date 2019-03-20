import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Result.scss';

export default class Result extends Component {
    
    render() {
        var date_info = this.props.element.date.split('-');
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = months[+date_info[1] - 1] + ' ' + date_info[2] + ', ' + date_info[0];

        return (
            <Grid item lg={2} md={4} sm={6} xs={12} className="result-item">
                <div className="result-item-wrap">
                    <div className="result-item-date">{date}</div>
                    <img src={this.props.element.day.condition.icon} alt="Weather icon" />
                    <div className="result-item-degrees">{this.props.element.day.avgtemp_c} °C</div>
                    <div className="result-item-condition">{this.props.element.day.condition.text}</div>
                </div>
            </Grid>
        );
    }
}