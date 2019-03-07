import React, { Component } from 'react';
import '../App.css';
import EditTodo from '../components/Search';
import {Grid} from '@material-ui/core';
import TodoList from '../components/List';
var TodoStore = require('../stores/Store.js');

class WeatherSearch extends Component {
    state={
        list: TodoStore.getList()
    };
    
    getInitialState =() => {
        return TodoStore.getList();
    }

    componentDidMount = () =>{
        TodoStore.addChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState({list: TodoStore.getList()});
    }
    

    render() {
        return (
            <div>
            <Grid container direction="row" justify="center" alignItems="center" className="main-container">
                <EditTodo></EditTodo>
            </Grid>
            <Grid>
                <TodoList list={this.state.list}/>
            </Grid>
            </div>
        );
    }
}

export default WeatherSearch;