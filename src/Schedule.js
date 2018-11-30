import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import initialData from  './initial-data';
import ScheduleDetails from './ScheduleDetails';
import Divider from '@material-ui/core/Divider';
import {DragDropContext} from 'react-beautiful-dnd';



const styles = theme => ({
    // root: {
    //     flexGrow: 1,
    //     overflow: 'hidden',

    // },
    pad: {
        margin: 20,
        // flexGrow: 1,
    },
    // pad:lastChild {
    //     margin: 20,
    //     // flexGrow: 1,
    // },

    paper: {
        padding: theme.spacing.unit * 2,
        margin: theme.spacing.unit * 2,
        textAlign: 'center',
        backgroundColor: '#edeaea',
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
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class Schedule extends Component {
    state = {
        ...initialData,
        value: 0,
      };

      onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
        return;
        }

        if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
        ) {
        return;
        }

        //const column = this.state.columns[source.droppableId];
        const home = this.state.schedules[source.droppableId];
        const foreign = this.state.schedules[destination.droppableId];

        if (home === foreign){
            const newStaffIds = Array.from(home.staffIds);
            newStaffIds.splice(source.index, 1);
            newStaffIds.splice(destination.index, 0, draggableId);

            const newHome = {
                ...home,
                staffIds: newStaffIds,
            };

            const newState = {
            ...this.state,
            schedules: {
                ...this.state.schedules,
                [newHome.id]: newHome,
            },
            };

            this.setState(newState);
            return;
        }

        // moving from one list to another
        const homeStaffIds = Array.from(home.staffIds);
        const foreignStaffIds = Array.from(foreign.staffIds);

        homeStaffIds.splice(source.index, 1);
        const fromForeign = foreignStaffIds.splice(destination.index, 1, draggableId);
        // foreignStaffIds.splice(destination.index, 1);
        homeStaffIds.splice(source.index, 0, fromForeign);

        const newHome = {
            ...home,
            staffIds: homeStaffIds,
        };

        const newForeign = {
            ...foreign,
            staffIds: foreignStaffIds,
        };

        const newState = {
            ...this.state,
            schedules: {
                ...this.state.schedules,
                [newHome.id]: newHome,
                [newForeign.id]: newForeign,
            },
        };
        this.setState(newState);

        
        // console.log(this.state.schedules);
        // console.log('result /n', result);
      };

    render() {
        const { classes } = this.props;
        const scheduleLength = this.state.scheduleOrder.length; 

        return (
            <Grid
            container
            >
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h2>Schedule List</h2>
                        <Divider className={classes.pad} />
                        <DragDropContext onDragEnd={this.onDragEnd}>
                        {
                            
                            this.state.scheduleOrder.map((scheduleId, index) => {
                                const schedule = this.state.schedules[scheduleId];
                                const staffs = schedule.staffIds.map(staffId=>this.state.staffs[staffId]);
                                
                                return (
                                    <div key={scheduleId}>
                                        <ScheduleDetails   schedule={schedule}  staffs={staffs}/>
                                        { index !== scheduleLength - 1? <Divider className={classes.pad} />: ''}
                                    </div>
                                );
                            })
                        }
                        </DragDropContext>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Schedule);
