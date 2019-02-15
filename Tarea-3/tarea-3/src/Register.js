import React from 'react';
import './Register.scss';

import Headline from './Headline';
import Section from './Section';
import LineLayout from './LineLayout';
import Input from './Input';

const Register = () => {
    return (
        <div className="register-container">
            <Headline text="¿Sos nuevo?" />
            <Section title="Datos personales">
                <LineLayout>
                    <Input id="name-field" label="Nombre" />
                    <Input id="" label="Apellidos" />
                </LineLayout>
                <LineLayout>
                    <Input id="" label="Correo electrónico" />
                </LineLayout>
            </Section>
        </div>
    );
};

export default Register;