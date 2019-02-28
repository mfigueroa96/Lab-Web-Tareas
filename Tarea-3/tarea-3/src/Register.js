import React from 'react';
import './Register.scss';

import Headline from './Headline';
import Section from './Section';
import LineLayout from './LineLayout';
import Input from './Input';
import SimpleSelect from './SimpleSelect';
import { FormControl, Button } from '@material-ui/core';

  
const Register = () => {
    return (
        <div className="register-container">
            <Headline text="¿Sos nuevo?" />
            <FormControl className="form-control" variant="filled">
                <Section title="Datos personales">
                    <LineLayout>
                        <Input id="name-field" label="Nombre" style="white" />
                        <Input id="lastname-field" label="Apellidos" style="white" />
                    </LineLayout>
                    <LineLayout>
                        <Input id="email-field" label="Correo electrónico" style="white" />
                    </LineLayout>
                </Section>
                <Section title="Datos de la cuenta">
                    <LineLayout>
                        <Input id="user-field" label="Nombre de Usuario" type={"text"} placeholder={"@user"} style="white"/>
                        <Input id="password-field" label="Contraseña" type="password" style="white"/>
                    </LineLayout>
                </Section>
                <Section title="Domicilio">
                    <LineLayout>
                        <Input id="address-field" label="Dirección" style="white" />
                    </LineLayout>
                    <LineLayout>
                        <Input id="colony-field" label="Barrio o Colonia" style="white" />
                        <Input id="cp-field" label="C.P." type="number" style="white"/>
                    </LineLayout>
                    <LineLayout>
                        <Input id="city-field" label="Ciudad" style="white" />
                        <Input id="state-field" label="Estado" style="white" />
                    </LineLayout>
                    <LineLayout>
                        <SimpleSelect></SimpleSelect>
                    </LineLayout>
                </Section>
                <Button className= "button" variant="outlined" className= "button">INICIA SESIÓN</Button>
            </FormControl>
        </div>
    );
};

export default Register;