import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import TodoStore from "../stores/Store"
import TodoActions from "../actions/Action"
//var TodoActions = require('../actions/Action.js');
//var TodoStore = require('../stores/Store.js').default;
import '../styles/Tequila.scss';
import { Grid } from '@material-ui/core';
import TequilaAttribute from './TequilaAttribute';
import SectionHeader from './SectionHeader';
import NotFound from './NotFound';

export default class Tequila extends Component {
    state = {
        listTequila: TodoStore.getListTequila(),
        tequila_exists: false
    }

    getInitialState =() => {
        this.setState({listTequila: TodoActions.getTequilaInfo(this.props.match.params.tequilaKey) });
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
        TodoActions.getTequilaInfo(this.props.match.params.tequilaKey);

        if (this.getCookie('__session').length != 0) {
            this.setState({user: true});
            console.log(this.props.match.params.tequilaKey)
            TodoActions.addTequilaToUser(localStorage.getItem('user'),this.props.match.params.tequilaKey);
        }
    }

    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

    _onChange = () => {
        this.setState({listTequila: TodoStore.getListTequila()});
        console.log(this.state)
    }
    

    render() {
        var img = this.state.listTequila.tequila.uuid !== undefined ? this.state.listTequila.tequila.uuid.split('-').join('') : '';
        var provider_img = this.state.listTequila.tequila.provider_uuid !== undefined ? this.state.listTequila.tequila.provider_uuid.split('-').join('')  : '';

        return (this.state.listTequila.exist) ?
            <div className='tequila-section'>
                <SectionHeader />
                <Grid container className='tequila-info' align='stretch' direction='row'>
                    <Grid item xl={6} lg={6} md={12} sm={12} className='tequila-info-left'>
                        <div className='tequila-description'>
                            <div className='tequila-name'>{this.state.listTequila.tequila.name}</div>
                            <div className='tequila-brand'>Esta bebida es producida por {this.state.listTequila.tequila.brand}</div>
                            <div className='tequila-serial-no'>{this.state.listTequila.tequila.provider}</div>
                            <div className='tequila-attributes'>
                                <TequilaAttribute prop='Pureza' value={this.state.listTequila.tequila.purity} />
                                <TequilaAttribute prop='Salida de barrica' value={this.state.listTequila.tequila.date_of_release} />
                                <TequilaAttribute prop='Destilación' value={this.state.listTequila.tequila.distillation} />
                                <TequilaAttribute prop='Año de destilación' value={this.state.listTequila.tequila.year_of_distillation} />
                                <TequilaAttribute prop='Lugar de destilación' value={this.state.listTequila.tequila.place_of_distillation} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xl={6} lg={6} md={12} sm={12} className='tequila-info-right'>
                        <div className='tequila-img-container'>
                            <img id='tequila-img' src={`/assets/tequila/${img}.png`} />
                        </div>
                    </Grid>
                </Grid>
                <div className='goto-provider'>
                    <a href={`/provider/${this.state.listTequila.tequila.provider_uuid}`}>
                        Este artículo fue registrado y verificado por
                        <img src={`/assets/provider/${provider_img}.png`} />
                    </a>
                </div>
            </div>
        : <NotFound />
    }
}