import React from 'react';
import Grid from '@material-ui/core/Grid';

const SubContainer = (props) => {
    return (
        <Grid item xs>
            {props.children}
        </Grid>
    );
}

export default SubContainer;