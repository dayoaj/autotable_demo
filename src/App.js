import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  shift: {
    // marginTop: 20,
    padding: 20,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    // marginLeft:15,
    // marginRight: 15,
    // marginTop: 30,
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
});

class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Grid container >
            <Grid item xs={12}>
              <AppBar position='sticky'>
                <Toolbar>
                  <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit" className={classes.flex}>
                    List Demo
                  </Typography>
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item xs={12} className={classes.shift} >
              <Grid 
              container 
              spacing={16}
              alignItems='center'
              direction='column'
              justify='center'
              >
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                  <form noValidate>
                    <input type="file"/>
                    
                  </form>

                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    Are we live?
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
