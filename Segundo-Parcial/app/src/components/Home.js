import React, { Component } from 'react';
import { Input } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import '../styles/Home.scss';

export default class Home extends Component {
    state = {
        access: false,
        username: ''
    }

    accessBtn_Click = () => {
        this.setState({
            username: document.getElementById('login-username').value,
            access: true
        })
    }

    render() {
        return !this.state.access ? (
            <div>
            <Header />
            <div className='login-container'>
                <h2>¿Tienes cuenta? Ingresa aquí.</h2>
                <form>
                    <div className='field'>
                        <p>Nombre de usuario</p>
                        <Input id='login-username' placeholder='miusuario' />
                    </div>
                    <div className='field'>
                        <p>Contraseña</p>
                        <Input id='login-password' placeholder='123456' type='password' />
                    </div>
                    <button onClick={this.accessBtn_Click} id='access-btn'>Acceder a tu cuenta</button>
                </form>
            </div>
            </div>
        ) : <Redirect to={'/user/' + this.state.username} />
    }
}