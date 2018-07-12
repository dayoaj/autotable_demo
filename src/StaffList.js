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

  state = { selected: [], }

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);

    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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
    
  }

  render() {
    const { classes, data } = this.props;

    return (
      <Paper className={classes.root} elevation={0}>
      <EnhancedToolbar numSelected={this.state.selected.length} />
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
              </TableCell>
              <TableCell>Names</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell numeric>Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              const isSelected = this.isSelected(n.id);
              return (
                <TableRow
                  hover
                  onClick={event => this.handleClick(event, n.id)}
                  role="checkbox"
                  aria-checked={isSelected}
                  tabIndex={-1}
                  key={n.id}
                  selected={isSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox selected={isSelected} />
                  </TableCell>
                  <TableCell component="th" scope="row" padding="none">
                    {n.names}
                  </TableCell>
                  <TableCell >{n.email}</TableCell>
                  <TableCell numeric>{n.phone}</TableCell>
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
  data: PropTypes.object,
};

export default withStyles(styles)(StaffList);
