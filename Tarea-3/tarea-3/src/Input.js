import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './Input.scss';

const Input = (props) => {
    return (
        <Grid item>
            <TextField
                id={props.id}
                label={props.label}
                margin="normal"
                variant="outlined"
                type={props.type}
                placeholder={props.placeholder}
            ></TextField>
        </Grid>
    );
}

export default Input;