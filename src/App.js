import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link, Route, BrowserRouter, Switch, } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Page1 from './components/Page1';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function Panel(props) {
    const {
        children, value, index, ...other
    } = props;

    return (
        <div>
            {value === index && (
                <Box p={3} style={{ alignContent: 'center', margin: 'auto' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    }
}));

const Home = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar position="static">
            <Tabs
                value={value}
                onChange={handleChange}
                showLabels
                className={classes.root}

            >
                <Tab label="Home" />
                <Tab label="Page 1" />
                <Tab label="Page 2" />
                </Tabs>
                </AppBar>
            <Panel value={value} index={1}>
                <Page1 />
                </Panel>
        </>
    )
};

function Rules() {
    return (
        <div>Rules</div>
    );
}

const PageShell = (Page, previous) => (props) => (
    <div className="page">
        <ReactCSSTransitionGroup>
            <Page {...props} />
        </ReactCSSTransitionGroup>
    </div>
);

export default Home;