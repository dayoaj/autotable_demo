import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Body from './Body';
import ResponsiveNavBar from './ResponsiveNavBar';


const styles = theme => ({
  root:{
    // flexGrow: 1,
    // height: 440,
    zIndex: 1,
    overflow: 'hidden',
    // position: 'relative',
    display: 'flex',
    width: '100%',
  },
  // length:{
  //   height: '100%',
  // },
  
});


class App extends Component {

  state = {
    mobOpen: false,
    data: [],
  };

  updateData = (data) => {
    this.setState({
      data,
    });
  };

  toggleOpenDrawer = (mobOpen) => {
      this.setState(state => ({ mobOpen: !state.mobOpen }));
  };
    
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <CssBaseline />
          <ResponsiveNavBar mobOpen={this.state.mobOpen}  toggleOpenDrawer={this.toggleOpenDrawer} className={classes.root}/>
          <Body toggleOpenDrawer={this.toggleOpenDrawer} data={this.state.data}/>   
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
