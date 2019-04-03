import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TodoStore from "../stores/Store"
import TodoActions from "../actions/Action"
import ResultItem from "../components/ResultItem"

export default class Provider extends Component {
    state = {
        listUser: TodoStore.getListUser()
    }

    getInitialState =() => {
        this.setState({listUser: TodoActions.getUserHistory(this.props.match.params.userKey) });
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
        TodoActions.getUserHistory(this.props.match.params.userKey);
    }

    _onChange = () => {
        this.setState({listUser: TodoStore.getListUser()});
        console.log(this.state.listUser.list[0])
    }
    

    render() {
        var rows = [];
        var data = this.state.listUser.list[0]
        console.log(data)
        if(this.state.listUser.list[0] > 0){
            data.forEach((item => {
                console.log(item)
                rows.push(<div><div key="i">{item.uui}</div>
                <div key="i">{item.name}</div>
                <div key="i">{item.itemdate_of_release}</div></div>);
            }));
        }

        return (
            <div>
                {rows}
            </div>
        )
    }
}