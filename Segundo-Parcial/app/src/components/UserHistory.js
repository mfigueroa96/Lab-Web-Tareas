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
        TodoActions.getUserHistory(this.props.match.params.userKey, '0');
    }

    _onChange = () => {
        this.setState({listUser: TodoStore.getListUser()});
        console.log(this.state.listUser.list)
    }



    sorter_ValueChange = (e) => {
        TodoActions.getUserHistory(this.props.match.params.userKey, document.getElementById('sorter').value);
    }


    render() {
        var rows = [];
        var data = this.state.listUser.list;
        // console.log(data)
        if(data != undefined && data.length > 0){
            data.forEach((item, i) => {
                // console.log(item)
            rows.push(<ResultItem key={i} element={item} user={this.props.match.params.userKey}></ResultItem>);
            });
        }

        return (
            <div className='user-section'>
                <SectionHeader />
                <div className='user-container'>
                    <h1>Bienvenido, {this.props.match.params.userKey}</h1>
                    <div className='user-sorting'>
                        <p>Ordenar por</p>
                        <select id='sorter' onChange={this.sorter_ValueChange}>
                            <option value='0'>fecha</option>
                            <option value='1'>fabricación</option>
                            <option value='2'>marca</option>
                            <option value='3'>submarca</option>
                            <option value='4'>tipo</option>
                        </select>
                    </div>
                    <div className='user-history'>
                        <h2>Tus tequilas registrados:</h2>
                        <Grid container>
                            {rows}
                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}
