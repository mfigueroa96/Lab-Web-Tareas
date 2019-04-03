import React, { Component } from 'react';

export default class Result extends Component {
    
    render() {
        return (
                <div className="result-item-wrap">
                    <div className="result-item-degrees">{this.props.element.name}</div>
                    <div className="result-item-condition">{this.props.element.uuid}</div>
                </div>
        );
    }
}