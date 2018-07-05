import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { AppBar, Toolbar, Typography, IconButton, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import StaffList from './StaffList';



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
  file: {
    borderRadius: 4,
    border: '1px solid #c494de',
    padding: '6px 4px 7px 6px ',
    width: 'calc(100% - 24px)',
    height: '1.95em',
    fontFamily: [
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(',')
  }
});

let id = 0;
function createData(names, email, phone ) {
  id += 1;
  return { id, names, email, phone };
}

class App extends Component {
  state = {
    data: [],
  }
  

  handleCSVSubmit = (e) => {
    const csvDirectory = document.querySelector('#list-upload');
    e.preventDefault();
    if (csvDirectory.files.length > 0) {
      const file = csvDirectory.files[0];
      if (file.type === 'application/vnd.ms-excel'){
        const reader = new FileReader();
        reader.onload = () => {
          const resultArr = [];
          reader.result.split('\r\n').forEach((row)=>{
            const rowArr=[];
            row.split(',').forEach((n)=>{
              rowArr.push(n);
            })
            resultArr.push(rowArr);
          });
          
          const data = resultArr.map((m)=> {
            
            return createData(...m);
          })
          
          
          this.setState({
            data,
          })  

        }
        reader.readAsText(file);
      }
    }

    
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;

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
                    <Typography gutterBottom variant="title" component="h2" align="left">
                      Upload List
                    </Typography>
                    <Divider />
                    <form noValidate autoComplete="off" onSubmit={this.handleCSVSubmit}>
                      <TextField
                        id="list-upload"
                        type="file"
                        margin="normal"
                        InputProps={{
                          disableUnderline: true,
                          classes: {
                            input: classes.file,
                          },
                        }}

                      /> 
                      <button type="submit" id="submitCSV">Upload</button> 
                    </form>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                  <Typography gutterBottom variant="title" component="h2" align="left">
                      List Table
                    </Typography>
                    <Divider />
                    <StaffList data={data}/>
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
