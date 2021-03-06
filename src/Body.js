import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import StaffListUpload from './StaffListUpload';
import StaffList from './StaffList';
import StaffStatus from './StaffStatus';
import Schedule from './Schedule';
import TopNavBar from './TopNavBar';

const styles = theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        
    },
    toolbar: theme.mixins.toolbar,
    flexGrow: 1,
});

class Body extends Component {

    render() {

    const { classes, data } = this.props;

        return (
            <div>
                <TopNavBar toggleOpenDrawer={this.props.toggleOpenDrawer}/>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route exact path='/' render = {(props) => <StaffList data={data} />} />
                        <Route exact path='/stafflist' render = {(props) => <StaffList data={data} />}/>
                        <Route exact path='/upload' component={StaffListUpload} />
                        <Route path='/staffstatus' component={StaffStatus} />
                        <Route path='/schedule' component={Schedule} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Body);


