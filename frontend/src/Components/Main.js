import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
import Sidebar from './Sidebar';
import Orders from './Orders';
import Shipping from './Shipping';

class Main extends Component {
    render() {
        return (
            <div>
                <Switch location={window.location} key={window.location.pathname}>
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route path='/orders' component={Orders} />
                    <Route path='/shipping' component={Shipping} />
                    <Redirect to='/dashboard' />
                </Switch>
                
            </div>
        );
    }
}

export default Main;
