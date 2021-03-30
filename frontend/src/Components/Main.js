import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Staff from './Staff/Staff';
import Cart from './Cart/Cart';
import Orders from './Orders/Orders';
import Shipping from './Shipping/Shipping';
import AddProduct from './Product/AddProduct';
import AddStaff from './Staff/AddStaff';
import EditProduct from './Product/EditProduct';
import EditStaff from './Staff/EditStaff';
import Product from './Product/Products';
import Buyer from './Buyers/Buyers';
import Seller from './Seller/Seller';
import AddSeller from './Seller/AddSeller';
import AddBrands from './Brands/AddBrands';
import AddCategory from './Category/AddCategory';
import AddSubCategory from './SubCategory/AddSubCategory';
import AddSpecification from './Specification/AddSpecification';

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
                    <Route path='/add-product' component={AddProduct} />
                    <Route path='/edit-product' component={EditProduct} />
                    <Route path='/add-staff' component={AddStaff} />
                    <Route path='/edit-staff' component={EditStaff} />
                    <Route path='/product-list' component={Product} />
                    <Route path='/buyers-list' component={Buyer} />
                    <Route path='/sellers-list' component={Seller} />
                    <Route path='/add-seller' component={AddSeller} />
                    <Route path='/add-brand' component={AddBrands} />
                    <Route path='/add-category' component={AddCategory} />
                    <Route path='/add-sub-category' component={AddSubCategory} />
                    <Route path='/add-specification' component={AddSpecification} />
                    <Redirect to='/dashboard' />
                </Switch>
                
            </div>
        );
    }
}

export default Main;
