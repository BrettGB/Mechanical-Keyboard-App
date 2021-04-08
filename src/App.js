import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import About from './components/About';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Links from './components/Links';
import DrawerBar from './components/Drawer';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';


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

const drawerWidth = '200px';

const useStyles = makeStyles((theme) => ({
    listText: {
        position: 'relative',
        margin: 'auto',
        textAlign: 'center',
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth})`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    paper: {
        background: "gray",
        width: drawerWidth,
    },
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    list: {
        margin: 'auto',
        alignContent: 'center',
        wordWrap: 'true',
    },
    avatar: {
        width: '125px',
        height: '125px',
        margin: 'auto',
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth})`,
            marginLeft: drawerWidth,
        },
    },
}));

const App = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    showLabels
                    className={classes.root}

                >
                    <Tab label="About" />
                    <Tab label="Home" />
                    <Tab label="Page 1" />
                    <Tab label="Page 2" />
                    <Tab label="Links" />
                </Tabs>
            </AppBar>
            <Panel value={value} index={0}>
                <About />
            </Panel>
            <Panel value={value} index={1}>
                <Home />
            </Panel>
            <Panel value={value} index={2}>
                <Page1 />
            </Panel>
            <Panel value={value} index={3}>
                <Page2 />
            </Panel>
            <Panel value={value} index={4}>
                <Links />
            </Panel>
            <div>
                <DrawerBar />
            </div>
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

export default App;