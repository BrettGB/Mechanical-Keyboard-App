import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Email from '@material-ui/icons/Email';
import Github from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { FormControlLabel, Switch } from '@material-ui/core';
import PropTypes from 'prop-types';
import avatar from './images/avatar.JPG';

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
}));

const bio1 = "I am a graduating student majoring in Computer Science with a minor in mathematics at UMKC.";
const bio2 = "This website is a project in my CS456 Human Computer Interface course, requiring us to \
create a website that provides usable information to the viewers.";
const bio3 = "For the project, I created this website on mechanical keyboards. This website will \
help individuals become more familiar with mechanical keyboards and all of their components."

export default function DrawerBar(props) {
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
                <ListItem>
                    <div className={classes.profile}>
                        <Avatar src={avatar} className={classes.avatar} />
                        <Typography variant="h5" className={classes.listText}> Brett Barnow </Typography>
                        <br/>
                        <Typography variant="h8" className={classes.listText}> {bio1} </Typography>
                        <br />
                        <br />
                        <Typography variant="h8" className={classes.listText}> {bio2} </Typography>
                        <br />
                        <br />
                        <Typography variant="h8" className={classes.listText}> {bio3} </Typography>
                    </div>
                </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <div className={classes.root}>
                <nav className={classes.drawer}>
                    <Drawer
                        variant="permanent"
                        classes={{ paper: classes.paper, }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </div>
        </>
    );
}

DrawerBar.propTypes = {
    content: PropTypes.element.isRequired,
};