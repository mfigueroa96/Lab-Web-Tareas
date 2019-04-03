import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TodoStore from "../stores/Store"
import TodoActions from "../actions/Action"
//var TodoActions = require('../actions/Action.js');
//var TodoStore = require('../stores/Store.js').default;
import '../styles/Tequila.scss';
import { Grid } from '@material-ui/core';
import TequilaAttribute from './TequilaAttribute';

export default class Tequila extends Component {
    state = {
        listTequila: TodoStore.getListTequila(),
        tequila_exists: false
    }

    getInitialState =() => {
       return TodoStore.getListTequila();
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
        TodoActions.getTequilaInfo(this.props.match.params.tequilaKey);
    }

    _onChange = () => {
        this.setState({listTequila: TodoStore.getListTequila()});
        console.log(this.state.listTequila)
    }
    

    render() {
        // return (this.state.tequila_exists) ?
        return <div className='tequila-section'>
            <div className='tequila-header'>
                <h1>Tequilas de México S.A. de C.V.</h1>
            </div>
            <Grid container className='tequila-info'>
                <Grid row xl={6} lg={6} md={6} sm={4} className='tequila-info-left'>
                    <div className='tequila-description'>
                        <div className='tequila-name'>Tequila 1800 Reposado</div>
                        <div className='tequila-brand'>Esta bebida es producida por {1800}</div>
                        <div className='tequila-serial-no'>NUM-SERIE-OK?</div>
                        <div className='tequila-attributes'>
                            <TequilaAttribute prop='Pureza' value='' />
                            <TequilaAttribute prop='Salida de barrica' value='' />
                            <TequilaAttribute prop='Destilación' value='' />
                            <TequilaAttribute prop='Año de destilación' value='' />
                            <TequilaAttribute prop='Lugar de destilación' value='' />
                        </div>
                    </div>
                </Grid>
                <Grid row xl={6} lg={6} md={6} sm={4} className='tequila-info-right'>
                    <div className='tequila-img-container'>
                        <img id='tequila-img' src={'/assets/tequila/1.png'} />
                    </div>
                </Grid>
            </Grid>
        </div>
        // : <Redirect to='/' />
    }
}