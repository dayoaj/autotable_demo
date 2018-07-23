import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, IconButton, Tooltip } from '@material-ui/core';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import DeleteIcon from '@material-ui/icons/Delete';
import AddStaffIcon from '@material-ui/icons/PersonAdd';
import EditIcon from '@material-ui/icons/Edit';


const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
        width: 112,
    },
    title: {
        flex: '0 0 auto',
    },
});

class EnhancedToolbar extends Component {

    render() {
        const { numSelected, classes, isClicked } = this.props;

        return (
            <Toolbar
                className={classNames(classes.root, {
                    [classes.highlight]: isClicked || numSelected > 0,
                })}
           
            >
                <div className={classes.title} >
                    {isClicked ? "" : (numSelected > 0 ? (
                        <Typography color="inherit" variant="subheading">
                            {numSelected} selected
                        </Typography>
                    ) : (
                            <Typography variant="title" id="tableTitle">
                                Name List
                            </Typography>
                        ))}
                </div>
                <div className={classes.spacer} />
                <div className={classes.actions} >
                    {isClicked ? (
                        <div>
                            <Tooltip title="Edit">
                                <IconButton aria-label="Edit">
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete">
                                <IconButton aria-label="Delete">
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    ) :
                        (numSelected > 0 ? (
                            <Tooltip title="Delete">
                                <IconButton aria-label="Delete">
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        ) : (
                                <Tooltip title="Add New Staff">
                                    <IconButton aria-label="Add new Staff">
                                        <AddStaffIcon />
                                    </IconButton>
                                </Tooltip>
                            ))}
                </div>
            </Toolbar>
        );
    }
}

EnhancedToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    isClicked: PropTypes.bool.isRequired,
};

export default withStyles(toolbarStyles)(EnhancedToolbar);
