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
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbXBsb3llZUlEIjoiODgxNGU1MDAtZjJmNS00NzYyLTk0ZmEtZDNmZjFkYmY2MTYzIiwiaWF0IjoxNTQ0MTg5ODU0LCJleHAiOjE1NDQ3OTQ2NTR9.D6jhsvGzZvjASXqD-8-e09YT8ktI0JM4tiwEqtKwsRU"
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

    fetch('http://127.0.0.1:8090/api/user',{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": this.state.token,
      },
    })
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
    const { data, isLoading, mobOpen} = this.state; 
    
    // if(error) {
    //   return <p>{error.message}</p>;
    // }
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <React.Fragment>
        <div className={classes.root}>
          <CssBaseline />
          <ResponsiveNavBar mobOpen={mobOpen}  toggleOpenDrawer={this.toggleOpenDrawer} className={classes.root}/>
          <Body toggleOpenDrawer={this.toggleOpenDrawer} data={data}/>   
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
