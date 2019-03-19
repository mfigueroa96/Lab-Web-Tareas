import React, { Component } from 'react';
import './Weather.scss';
import Heading from './Heading';
import WeatherSearch from './WeatherSearch';
import TodoActions from '../actions/Action';

export default class Weather extends Component {
    componentDidMount() {
        console.log(this.props.match.params.city);
    }

    render() {
        return (
            <div className="main">
                <Heading city={this.props.match.params.city} />
                <WeatherSearch city={this.props.match.params.city}></WeatherSearch>
            </div>
        );
    }
}