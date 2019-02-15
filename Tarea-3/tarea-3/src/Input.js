import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './Input.scss';

const Input = (props) => {
    return (
        <Grid item className="input-grid">
            <TextField
                className="input-textfield"
                id={props.id}
                label={props.label}
                margin="normal"
                variant="outlined"
                type={props.type}
            ></TextField>
        </Grid>
    );
}

export default Input;