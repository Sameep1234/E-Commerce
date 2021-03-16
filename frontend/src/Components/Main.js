import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Staff from './Staff';
import Users from './User';
import Cart from './Cart';
import Orders from './Orders';
import Shipping from './Shipping';
import AddProduct from './AddProduct';
import AddStaff from './AddStaff';
import EditProduct from './EditProduct';
import EditStaff from './EditStaff';
import Product from './Products';
import Buyer from './Buyers';
import Seller from './Seller'

class Main extends Component {
    render() {
        return (
            <div>
                <Switch location={window.location} key={window.location.pathname}>
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route path='/orders' component={Orders} />
                    <Route path='/shipping' component={Shipping} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/staff-list' component={Staff} />
                    <Route path='/authorised-users' component={Users} />
                    <Route path='/add-product' component={AddProduct} />
                    <Route path='/edit-product' component={EditProduct} />
                    <Route path='/add-staff' component={AddStaff} />
                    <Route path='/edit-staff' component={EditStaff} />
                    <Route path='/product-list' component={Product} />
                    <Route path='/buyers-list' component={Buyer} />
                    <Route path='/sellers-list' component={Seller} />
                    <Redirect to='/dashboard' />
                </Switch>
                
            </div>
        );
    }
}

export default Main;
