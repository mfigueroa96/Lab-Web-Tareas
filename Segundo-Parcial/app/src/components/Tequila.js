import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TodoStore from "../stores/Store"
import TodoActions from "../actions/Action"
//var TodoActions = require('../actions/Action.js');
//var TodoStore = require('../stores/Store.js').default;

export default class Tequila extends Component {
    state = {
        listTequila: TodoStore.getListTequila(),
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

        return (this.state.tequila_exists) ?
            <div>
                
            </div>
        : <Redirect to='/' />
    }
}