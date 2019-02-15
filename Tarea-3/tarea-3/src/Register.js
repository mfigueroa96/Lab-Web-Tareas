import React from 'react';

import Headline from './Headline';
import Section from './Section';
import LineLayout from './LineLayout';
import Input from './Input';

const Register = () => {
    return (
        <div>
            <Headline text="¿Sos nuevo?" />
            <Section title="Datos personales">
                <LineLayout>
                    <Input id="name-field" label="Nombre" />
                    <Input id="" label="Apellidos" />
                    <Input id="" label="Correo" />
                </LineLayout>
            </Section>
        </div>
    );
};

export default Register;