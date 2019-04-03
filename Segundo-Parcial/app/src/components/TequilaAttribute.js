import React, { Component } from 'react';

export default class TequilaAttribute extends Component {
    render() {
        return <div className='tequila-attribute'>
            <div className='tequila-attribute-prop'>{this.props.prop}</div>
            <div className='tequila-attribute-value'>{this.props.value}</div>
        </div>
    }
}