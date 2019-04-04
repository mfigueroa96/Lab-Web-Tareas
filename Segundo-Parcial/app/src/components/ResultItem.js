import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import '../styles/ResultItem.scss';

export default class Result extends Component {
    
    render() {
        console.log(this.props.element)
        return (
            <Grid item lg={4} md={4} sm={6} xs={12} className="result-item">
                <div className="result-item-wrap">
                    <div className="result-item-degrees">
                        <Link to={'/user/' + this.props.user + '/tequila/' + this.props.element.my_serial}>
                            {this.props.element.name}
                        </Link>
                    </div>
                    <div className="result-item-condition">{this.props.element.alcohol_degrees}</div>
                    <div className="result-item-condition">{this.props.element.date_of_releas}</div>
                    <div className="result-item-condition">{this.props.element.brand}</div>
                    <div className="result-item-condition">{this.props.element.place_of_distillation}</div>
                    <div className="result-item-condition">{this.props.element.purity}</div>
                    <div className="result-item-condition">{this.props.element.my_serial}</div>
                    <img className='result-item-img' src={`/assets/tequila/${this.props.element.uuid.split('-').join('')}.png`} />
                </div>
            </Grid>
        );
    }
}
