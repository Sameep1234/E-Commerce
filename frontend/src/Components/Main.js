import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';

class Main extends Component {
    render() {
        return (
            <Switch location={window.location} key={window.location.pathname}>
                <Route path='/dashboard'component={Dashboard} />
                <Redirect to='/dashboard' />
            </Switch>
        );
    }
}

export default Main;
