import React from 'react';

import Input from './Input';
import Headline from './Headline';
import LineLayout from './LineLayout';
import Button from '@material-ui/core/Button';
import './Login.scss';

const Login = () => {
    return (
        <div className="login-container">
            <Headline text="¿Ya tenés cuenta?" />
            <LineLayout>
                <Input id="name-field" label="Nombre" />
            </LineLayout>
            <LineLayout>
                <Input type= "password"id="name-field" label="Contraseña" />
            </LineLayout>
            <LineLayout>
            
            </LineLayout>
        </div>
    );
}

export default Login;
