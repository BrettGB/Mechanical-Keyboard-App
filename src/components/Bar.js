import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { FormControlLabel, Switch } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Hidden, IconButton } from '../../node_modules/@material-ui/core/index';
import PropTypes from 'prop-types';

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
}));

export default function Bar(props) {
    const { content } = props;
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles(theme);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <List disablePadding className={classes.list}>
                <Divider />
                {['Home', 'Page 1', 'Page 2'].map((text) => (
                    <>
                        <ListItem button key={text} id={text} component="a" href={`#${text.toLowerCase()}`} className={classes.listText}>
                            <ListItemText
                                disableTypography
                                primary={(
                                    <Typography variant="h6">
                                        {text}
                                    </Typography>
                                )}
                            />
                        </ListItem>
                    </>
                ))}
            </List>
        </div>
    );

    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Mechanical Keyboards
                            </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    <Hidden smUP>
                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.paper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown>
                        <Drawer
                            classes={{
                                paper: classes.paper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {content}
                </main>
            </div>
        </>
    );
}

Bar.propTypes = {
    content: PropTypes.element.isRequired,
};