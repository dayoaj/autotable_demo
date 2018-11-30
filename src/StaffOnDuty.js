import React, { Component } from 'react';
//import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
//import { Paper } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';


const styles = theme => ({
    row: {
        backgroundColor: 'white',
        padding: theme.spacing.unit,
        border: '1px solid lightgrey',
        borderRadius: 2,
        marginBottom: 8,
        '&:last-child': {
            marginBottom: 0,
        },

    },
});


class StaffOnDuty extends Component {
    render(){
        const { classes } = this.props;
        
        //console.log(this.props.isDragging);

        return(
            <Draggable draggableId={this.props.staff.id} index={this.props.index}>

                {(provided, snapshot) =>(
                <div className={classes.row}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isdragging={snapshot.isDragging? 1 : 0}>

                    {this.props.staff.Name}
                </div>)}
            </Draggable>   
        );
    }
}


export default withStyles(styles)(StaffOnDuty);