import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import StaffListUpload from './StaffListUpload';
import StaffStatus from './StaffStatus';
import Schedule from './Schedule';
import Home from './Home';

class Body extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/stafflist' component={StaffListUpload} />
                <Route path='/staffstatus' component={StaffStatus} />
                <Route path='/schedule' component={Schedule} />
            </Switch>
        );
    }
}

export default (Body);

