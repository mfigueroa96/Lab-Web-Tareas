import React, { Component } from 'react';
import firebase from 'firebase';
import { Input } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import '../styles/Home.scss';

export default class Home extends Component {
    state = {
        access: false,
        username: ''
    }

    accessBtn_Click = (e) => {
        e.preventDefault();
        var username = document.querySelector('#login-username').value;
        var password = document.querySelector('#login-password').value;
        console.log(username, password);
        firebase.auth().signInWithEmailAndPassword(username, password).then(user => {
            return firebase.auth().currentUser.getIdToken(true).then(token => {
                document.cookie = '__session=' + token + ';max-age=600';
                localStorage.setItem('user', firebase.auth().currentUser.uid);

                this.setState({
                    username: document.getElementById('login-username').value,
                    access: true
                })
            })

            // return user.getIdToken().then(idToken => {
            //     const csrfToken = getCookie('csrfToken');
            //     return postIdTokenToSessionLogin('localhost:5001/sessionLogin', idToken, csrfToken);
            // })

            // localStorage.setItem('firebase-user', firebase.auth().currentUser.uid);
            
        }).catch(err => {
            console.log(err);
        })

    }
    render() {
        return !this.state.access ? (
            <div>
            <Header />
            <div className='login-container'>
                <h2>¿Tienes cuenta? Ingresa aquí.</h2>
                <div style={{textAlign: 'center'}}>
                    <form>
                        <div className='field'>
                            <p>Nombre de usuario</p>
                            <Input fullWidth={true} id='login-username' placeholder='miusuario' />
                        </div>
                        <div className='field'>
                            <p>Contraseña</p>
                            <Input fullWidth={true} id='login-password' placeholder='123456' type='password' />
                        </div>
                        <button onClick={this.accessBtn_Click} id='access-btn'>Acceder a tu cuenta</button>
                    </form>
                </div>
                <div className='providers-list'>
                    <img src='/assets/provider/8fe15e298a584848b905d8dd61a16501.png' />
                    <img src='/assets/provider/bab8c233397b47e7bfde53d3d6d36090.png' />
                    <img src='/assets/provider/bd6a61f2723544009058a9562d580c5b.png' />
                    <img src='/assets/provider/d3c448eac6b84aa6989d99d678895ee6.png' />
                    <img src='/assets/provider/e852bec71bfe425f82179c2aa4c273aa.png' />
                </div>
            </div>
            </div>
        ) : <Redirect to={'/user/' + localStorage.getItem('user')} />
    }
}