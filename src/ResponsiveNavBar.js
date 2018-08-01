import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Divider, Drawer, Hidden, IconButton, List, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import StaffListIcon from '@material-ui/icons/People';
import StaffStatusIcon from '@material-ui/icons/Poll';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const drawerWidth = 171;

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
    activeNav: {
        color: 'red',
    },
    flex: {
        textDecoration: 'none',
    },
    appBar: {
        position: 'sticky',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    'navbar:visited': {
        textDecoration: 'none',
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
});

class ResponsiveNavBar extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List component="nav"  >
                    <NavLink to='/stafflist' activeStyle={{
                                                fontWeight: 'bold',
                                                color: '#95df94',
                                                textDecoration: 'none',
                                            }}   className={classes.navbar} >
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
                                            }}>
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
                                            }}>
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
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        className={classes.drawPaper}
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
