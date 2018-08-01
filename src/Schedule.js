import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    shift: {
        padding: theme.spacing.unit * 3,
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            minWidth: 300,
        },
        [theme.breakpoints.up('sm')]: {
            minWidth: 540,
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: 900,
        },
    },
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class Schedule extends Component {
    state = {
        value: 0,
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };
    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                spacing={16}
                alignItems='center'
                direction='column'
                justify='center'
                className={classes.shift}
            >
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Current" />
                            <Tab label="Past" />
                            <Tab label="Records" />
                        </Tabs>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Schedule);
