import React from 'react';
import Grid from '@material-ui/core/Grid';

const LineLayout = (props) => {
    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
            {props.children}
        </Grid>
    );
}

export default LineLayout;