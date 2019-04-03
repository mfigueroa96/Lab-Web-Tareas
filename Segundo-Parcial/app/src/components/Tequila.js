import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TodoStore from "../stores/Store"
import TodoActions from "../actions/Action"

export default class Tequila extends Component {
    state = {
        listTequila: TodoStore.getListTequila(),
    }

    getInitialState =() => {
        this.setState({listTequila: TodoActions.getTequilaInfo(this.props.match.params.tequilaKey) });
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
        TodoActions.getTequilaInfo(this.props.match.params.tequilaKey);
    }

    _onChange = () => {
        this.setState({listTequila: TodoStore.getListTequila()});
        console.log(this.state)
    }
    

    render() {
        return (this.state.listTequila.exist) ?
            <div>{this.state.listTequila.tequila.uuid}</div>
        : <div><p>Your Tequila is chafa</p></div>
    }
}