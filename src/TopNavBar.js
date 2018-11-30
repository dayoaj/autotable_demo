import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Menu, Toolbar, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    flex: {
        textDecoration: 'none',
        flexGrow: 1,
    },
    appBar: {
        marginLeft: 200,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${200}px)`,
            marginLeft: 200,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    'navbar:visited': {
        textDecoration: 'none',
    },
});


class TopNavBar extends React.Component {
    state = {
        anchorEl: null,
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.props.toggleOpenDrawer(!this.state.mobileOpen);
        // console.log(this.props.toggleOpenDrawer);
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    }

    render(){
        const { anchorEl } = this.state;
        const { classes } = this.props;
        const open = Boolean(anchorEl);

        return(
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
                <Button color="inherit" component={Link} to="/upload">Upload</Button>
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
        );
    }
}


export default withStyles(styles)(TopNavBar);

