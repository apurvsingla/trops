import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      '& svg': {
        fontSize: 40
      }
    },
    title: {
      flexGrow: 1,
    },
    toolbarButtons: {
        marginLeft: 'auto'
    },
    icons: {
        '& svg': {
            fontSize: 40
          }
    }
  }));

const Footer = () => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <div className={classes.toolbarButtons}>
                <IconButton color="inherit" className={classes.icons} ><NotificationsIcon /></IconButton>
            </div>
        </Toolbar>
        </AppBar>
    </div>
    );
}

export default Footer;
