import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Droppable } from 'react-beautiful-dnd';
import StaffOnDuty from './StaffOnDuty';
//import { Paper } from '@material-ui/core';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    schedule: {
        backgroundColor: '#4c63cb99',
        padding: theme.spacing.unit * 2,
        marginBottom: 8,
    },
    heading: {   
        margin: 10,
    },
});

class ScheduleDetails extends Component {
    render(){
        const { classes } = this.props;
        console.log(this.props.staffs);
        return(
            <div>
                <h4 className={classes.heading}>{this.props.schedule.title}</h4> 
                <Droppable droppableId={this.props.schedule.id}>
                {provided => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className={classes.schedule}>
                    {this.props.staffs.map((staff, index) => (    
                        <StaffOnDuty key={staff.id} staff={staff} index={index}/>
                    ))}
                    {provided.placeholder}
                    </div>
                )}
                </Droppable>
            </div>
            
            
        );
    }
}


export default withStyles(styles)(ScheduleDetails);
