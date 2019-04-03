import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TodoStore from "../stores/Store"
import TodoActions from "../actions/Action"

export default class Tequila extends Component {
    state = {
        listProvider: TodoStore.getListProvider(),
    }

    getInitialState =() => {
        this.setState({listTequila: TodoActions.getProviderInfo(this.props.match.params.providerKey) });
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
        TodoActions.getProviderInfo(this.props.match.params.providerKey);
    }

    _onChange = () => {
        this.setState({listProvider: TodoStore.getListProvider()});
        console.log(this.state)
    }
    

    render() {
        return (
            <div>{this.state.listProvider.provider.name}</div>
        )
    }
}