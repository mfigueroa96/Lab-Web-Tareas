import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TodoStore from "../stores/Store"
import TodoActions from "../actions/Action"

export default class Provider extends Component {
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
        var data = this.state.listProvider.provider
        return (
            <div>{data.brand}</div>
        )
    }
}