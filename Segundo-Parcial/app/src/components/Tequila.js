import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import serviceCnts from '../constants/service';
import axios from 'axios';

export default class Tequila extends Component {
    state = {
        tequila_exists: true,
        tequila: {
            name: ''
        }
    }

    componentDidMount() {
        axios.get(`${serviceCnts.API}/tequila/${this.props.match.params.tequilaKey}`)
        .then(response => {
            if (response.data.my_tequila != null) {
                console.log(response.data.my_tequila);
                this.setState({
                    tequila: response.data.my_tequila
                });
            }
            else {
                this.setState({
                    tequila_exists: false
                });
            }
        });
    }

    render() {
        return (this.state.tequila_exists) ?
            <div>
                
            </div>
        : <Redirect to='/' />
    }
}