import React, { Component } from 'react';
import TodoStore from "../stores/Store"
import TodoActions from "../actions/Action"
import Grid from '@material-ui/core/Grid';
import ResultItem from "../components/ResultItem"
import SectionHeader from './SectionHeader';
import '../styles/UserHistory.scss';

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
        var data = this.state.listUser.list[0];
        console.log(data)
        if(data != undefined && data.length > 0){
            data.forEach((item, i) => {
                console.log(item)
            rows.push(<ResultItem key={i} element={item}></ResultItem>);
            });
        }

        return (
            <div className='user-section'>
                <SectionHeader />
                <div className='user-container'>
                    <h1>Bienvenido, {this.props.match.params.userKey}</h1>
                    <div className='user-history'>
                        {rows}
                    </div>
                </div>
            </div>

            // <div className="table-responsive">
            // <Grid container align="stretch" direction="row">
            //     {rows}
            //     </Grid>
            // </div>
        )
    }
}
