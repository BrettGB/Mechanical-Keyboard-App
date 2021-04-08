import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
        marginLeft: '200px',
        marginTop: '10px',
    }
});

export default function Page1() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h1" component="h2" gutterBottom>
                Welcome to my website
                </Typography>
        </div>
    );
}