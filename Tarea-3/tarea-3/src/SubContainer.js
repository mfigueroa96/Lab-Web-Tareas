import React from 'react';
import './SubContainer.scss';

import Grid from '@material-ui/core/Grid';

const SubContainer = (props) => {
    return (
        <Grid className="sub-container" item xs>
            {props.children}
        </Grid>
    );
}

export default SubContainer;