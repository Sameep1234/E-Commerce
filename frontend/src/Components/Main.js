import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Employee from './Employee/Employee';
import Cart from './Cart/Cart';
import Orders from './Orders/Orders';
import Shipping from './Shipping/Shipping';
import AddProduct from './Product/AddProduct';
import AddEmployee from './Employee/AddEmployee';
import EditProduct from './Product/EditProduct';
import EditEmployee from './Employee/EditEmployee';
import Product from './Product/Products';
import Buyer from './Buyers/Buyers';
import Seller from './Seller/Seller';
import AddSeller from './Seller/AddSeller';
import AddBrands from './Brands/AddBrands';
import AddCategory from './Category/AddCategory';
import AddSubCategory from './SubCategory/AddSubCategory';
import AddSpecification from './Specification/AddSpecification';
import SpecificationList from './Specification/SpecificationList';
import BrandList from './Brands/BrandList';
import CategoryList from './Category/CategoryList';
import SubCategoryList from './SubCategory/SubCategoryList';

class Main extends Component {
    render() {
        return (
            <div>
                <Switch location={window.location} key={window.location.pathname}>
                    <Route exact path='/dashboard' component={Dashboard} />
                    
                    <Route path='/orders' component={Orders} />
                    
                    <Route path='/shipping' component={Shipping} />

                    <Route path='/cart' component={Cart} />

                    

                    <Route path='/add-product' component={AddProduct} />
                    <Route path='/edit-product' component={EditProduct} />
                    <Route path='/product-list' component={Product} />

                    <Route path='/employee-list' component={Employee} />
                    <Route path='/add-employee' component={AddEmployee} />
                    <Route path='/edit-employee' component={EditEmployee} />

                    
                    <Route path='/buyers-list' component={Buyer} />
                    
                    <Route path='/sellers-list' component={Seller} />
                    <Route path='/add-seller' component={AddSeller} />

                    <Route path='/add-brand' component={AddBrands} />
                    <Route path='/brand-list' component={BrandList} />

                    <Route path='/add-category' component={AddCategory} />
                    <Route path='/category-list' component={CategoryList} />

                    <Route path='/add-sub-category' component={AddSubCategory} />
                    <Route path='/sub-category-list' component={SubCategoryList} />

                    <Route path='/add-specification' component={AddSpecification} />
                    <Route path='/specification-list' component={SpecificationList} />

                    <Redirect to='/dashboard' />
                </Switch>
                
            </div>
        );
    }
}

export default Main;
