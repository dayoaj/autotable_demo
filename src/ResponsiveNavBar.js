import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Divider, Drawer, Hidden, IconButton, List, Menu, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import StaffListIcon from '@material-ui/icons/People';
import StaffStatusIcon from '@material-ui/icons/Poll';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';


const drawerWidth = 170;
const customWidth = {
    width: '2em',
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        // height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    flex: {
        textDecoration: 'none',
        flexGrow: 1,
    },
    appBar: {
        position: 'relative',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    'navbar:visited': {
        textDecoration: 'none',
    },
});

class ResponsiveNavBar extends React.Component {
    state = {
        mobileOpen: false,
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    }

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List component="nav">
                    <NavLink to='/stafflist' activeStyle={{
                        fontWeight: 'bold',
                        color: '#95df94',
                        textDecoration: 'none',
                    }} className={classes.flex}>
                        <ListItem button>
                            <ListItemIcon>
                                <StaffListIcon />
                            </ListItemIcon>
                            Staff List
                        </ListItem>
                    </NavLink>
                    <NavLink to='/staffstatus' activeStyle={{
                        fontWeight: 'bold',
                        color: '#95df94',
                        textDecoration: 'none',
                    }} className={classes.flex}>
                        <ListItem button>
                            <ListItemIcon>
                                <StaffStatusIcon />
                            </ListItemIcon>
                            Staff Status
                        </ListItem>
                    </NavLink>
                    <NavLink to='/schedule' activeStyle={{
                        fontWeight: 'bold',
                        color: '#95df94',
                        textDecoration: 'none',
                    }} className={classes.flex}>
                        <ListItem button>
                            <ListItemIcon>
                                <ScheduleIcon />
                            </ListItemIcon>
                            Schedule
                        </ListItem>
                    </NavLink>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex} component={Link} to="/">
                            List Demo
                        </Typography>
                        <div>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : null}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleMenuClose}
                            >
                                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        className={classes.drawerWidth}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        style={customWidth}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        className={classes.drawerPaper}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </div>
        );
    }
}


ResponsiveNavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResponsiveNavBar);
