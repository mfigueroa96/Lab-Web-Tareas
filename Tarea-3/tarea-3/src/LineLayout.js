import React from 'react';
import './LineLayout.scss';

import Grid from '@material-ui/core/Grid';

const LineLayout = (props) => {
    return (
        <Grid className="line-layout" container direction="row" justify="space-between" alignItems="center" spacing={0}>
            {props.children}
        </Grid>
    );
}

export default LineLayout;