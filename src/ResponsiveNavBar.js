import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import StaffListIcon from '@material-ui/icons/People';
import StaffStatusIcon from '@material-ui/icons/Poll';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import {List, Hidden, Drawer} from '@material-ui/core';


// const drawerWidth = 0;


const styles = theme => ({
    base: {
        // display: 'inline-block',
        textDecoration: 'none',
        flexShrink: 0,
    },
    flex: {
        textDecoration: 'none',
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    drawPaper: {
        width: 200,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
        height: 800,
    },
    'navbar:visited': {
        textDecoration: 'none',
    },
});

class ResponsiveNavBar extends React.Component {
    
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.props.toggleOpenDrawer(!this.state.mobileOpen);
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes } = this.props;

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
            <div className={classes.base}>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={this.props.mobOpen}
                        onClose={this.handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        classes={{
                            paper: classes.drawPaper,
                          }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{ 
                            paper: classes.drawPaper,
                          }}
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
