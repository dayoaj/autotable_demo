import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, ClickAwayListener, Grow, Paper, MenuItem, MenuList } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Popper from '@material-ui/core/Popper';


const styles = theme => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
});

class SideNavList extends React.Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    }

    render() {
        const { classes, menu } = this.props;
        const { open } = this.state;

        return (
            <div>
                <IconButton
                    buttonRef={node => {
                        this.anchorEl = node;
                    }}
                    aria-owns={open ? 'menu-list-grow' : null}
                    aria-haspopup="true"
                    onClick={this.handleToggle}
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Popper open={open} anchorEl={this.anchorEl} transition disablePortal >
                    {({ TransitionProps }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{ transformOrigin: 'center top' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    {
                                        menu.map(n => {
                                            return (
                                                <MenuList>
                                                    <MenuItem onClick={this.handleClose}>{n}</MenuItem>
                                                </MenuList>
                                            );
                                        })

                                    }
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}

                </Popper>
            </div>
        );
    }

}

SideNavList.propTypes = {
    classes: PropTypes.object.isRequired,
    menu: PropTypes.array,
};

export default withStyles(styles)(SideNavList);