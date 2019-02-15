import React from 'react';

import Headline from './Headline';
import Section from './Section';
import LineLayout from './LineLayout';
import Input from './Input';
import SimpleSelect from './SimpleSelect';
import { FormControl } from '@material-ui/core';

  
const Register = () => {
    return (
        <div>
            <Headline text="Registráte" />
            <FormControl variant="filled">
                <Section title="Datos personales">
                    <LineLayout>
                        <Input id="name-field" label="Nombre" />
                        <Input id="" label="Apellidos" />
                        <Input id="" label="Correo" />
                    </LineLayout>
                </Section>
                <Section title="Domicilio">
                    <LineLayout>
                        <Input id="address-field" label="Dirección" />
                    </LineLayout>
                    <LineLayout>
                        <Input id="colony-field" label="Barrio o Colonia" />
                        <Input id="cp-field" label="C.P." />
                    </LineLayout>
                    <LineLayout>
                        <Input id="city-field" label="Ciudad" />
                        <Input id="state-field" label="Estado" />
                    </LineLayout>
                    <LineLayout>
                        <SimpleSelect></SimpleSelect>
                    </LineLayout>
                </Section>
            </FormControl>
        </div>
    );
};

export default Register;