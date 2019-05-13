import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import TodoStore from "../stores/Store"
import TodoActions from "../actions/Action"
import Grid from '@material-ui/core/Grid';
import ResultItem from "../components/ResultItem"
import SectionHeader from './SectionHeader';
import '../styles/UserHistory.scss';

export default class Provider extends Component {
    state = {
        listUser: TodoStore.getListUser(),
        timeout: false
    }

    getInitialState =() => {
        this.setState({listUser: TodoActions.getUserHistory(this.props.match.params.userKey) });
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
        TodoActions.getUserHistory(this.props.match.params.userKey, '0');

        // firebase.database().ref('users').child(localStorage.getItem('firebase-user'));

        // console.log(firebase.auth().currentUser.metadata.lastSignInTime);

        if (this.getCookie('__session').length == 0) {
            this.setState({timeout: true});
        }

        // var logoutTimer = setInterval(() => {
        //     var last = new Date(firebase.auth().currentUser.metadata.lastSignInTime)
        //     var d = new Date();
        //     var diff = (d.getTime() - last.getTime()) / 1000 / 60;
        //     if (diff >= 1) {
        //         firebase.auth().signOut();
        //         this.setState({timeout: true});
        //         clearInterval(logoutTimer);
        //     }
        // }, 1000 * 10);
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
        this.setState({listUser: TodoStore.getListUser()});
        console.log(this.state.listUser)
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

        return !this.state.timeout ? (
            <div className='user-section'>
                <SectionHeader />
                <div className='user-container'>
                    <h1>Bienvenido, {this.state.listUser.list.name} {this.state.listUser.list.lastName}</h1>
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
        ) : <Redirect to='/' />
    }
}
