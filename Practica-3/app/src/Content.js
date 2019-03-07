import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <Grid container>
                    <Grid item>
                        <Card>
                            <CardHeader></CardHeader>
                            <CardContent>
                                <Typography variant="h5">Hello</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}