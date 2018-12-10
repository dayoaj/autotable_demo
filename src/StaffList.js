import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Table, TableBody, TableCell, TableHead, TableRow, Checkbox } from '@material-ui/core';
import EnhancedToolbar from './EnhancedToolbar';



const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


class StaffList extends Component {

  state = { selected: [], clicked: -1, }

  isSelected = EmployeeID => this.state.selected.indexOf(EmployeeID) !== -1;
  isClicked = EmployeeID => this.state.clicked === EmployeeID;

  handleSelect = (event, EmployeeID) => {
    const { selected, clicked } = this.state;
    
    const selectedIndex = selected.indexOf(EmployeeID);

    let newSelected = [];
    if (!selected.length && clicked !== -1){
      newSelected = newSelected.concat(selected, EmployeeID, clicked);
      this.setState({ clicked: -1 });
    }else if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, EmployeeID);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
    

    event.stopPropagation();

  }

  handleClick = (event, EmployeeID) => {
    const { selected, clicked } = this.state;

    if(selected){
      this.setState({ selected: [] });
    }

    let newClicked = EmployeeID;

    if(clicked === -1){
      newClicked = EmployeeID;
    } else if (clicked === EmployeeID){
      newClicked = -1
    } else {
      newClicked = EmployeeID;
    }

    this.setState({clicked: newClicked});
    
  }

  render() {
    const { classes, data } = this.props;
    // const data = this.props.data;


    return (
      <Paper className={classes.root} elevation={0}>
        <EnhancedToolbar numSelected={this.state.selected.length} isClicked={this.state.clicked !== -1 } />
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
              </TableCell>
              <TableCell>Names</TableCell>
              <TableCell numeric>Phone Number</TableCell>
              <TableCell >Portfolio</TableCell>
              <TableCell >Department</TableCell>
              <TableCell >Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              const isSelected = this.isSelected(n.EmployeeID);
              const isClicked = this.isClicked(n.EmployeeID);
              return (
                <TableRow
                  hover
                  onClick={event => this.handleClick(event, n.EmployeeID)}
                  role="checkbox"
                  aria-checked={isClicked || isSelected}
                  tabIndex={-1}
                  key={n.EmployeeID}
                  selected={isClicked || isSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={isClicked || isSelected}
                      onClick={event => this.handleSelect(event, n.EmployeeID)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row" padding="none">
                    {n.FirstName} {" "}
                    {n.LastName}
                  </TableCell>
                  <TableCell numeric>{n.PhoneNumber}</TableCell>
                  <TableCell>{n.Position}</TableCell>
                  <TableCell>{n.Department}</TableCell>
                  <TableCell>{n.email}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

StaffList.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
};

export default withStyles(styles)(StaffList);
