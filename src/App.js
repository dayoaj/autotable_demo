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
    isLoading: false,
    error: null,
  };

  updateData = (data) => {
    this.setState({
      data,
    });
  };

  toggleOpenDrawer = (mobOpen) => {
      this.setState(state => ({ mobOpen: !state.mobOpen }));
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('http://127.0.0.1:8090/api/users')
      .then(response =>{
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(data => this.setState({data: data.rows, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false}));
  }
    
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
