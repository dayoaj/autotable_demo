import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Body from './Body';
import ResponsiveNavBar from './ResponsiveNavBar';

const styles = theme => ({
  root:{
    position: "relative",
  }
});


class App extends Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>   
          <ResponsiveNavBar />
          <Body />   
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
