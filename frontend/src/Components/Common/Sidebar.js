import React, { Component } from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSidebarCollapsed: false,
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        this.setState({
            isSidebarCollapsed: !this.state.isSidebarCollapsed,
        });
    }

    render() {
        return (
            <ProSidebar collapsed={this.state.isSidebarCollapsed} onToggle={this.toggleSidebar}>
                <SidebarHeader><div style={{ paddingTop: "18px", paddingBlock: '18px', paddingLeft: '28px' }}><span className="fa fa-bars fa-lg" role="button" onClick={this.toggleSidebar} /></div></SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<span className="fa fa-tachometer fa-lg" />}><Link to="/dashboard" />Dashboard</MenuItem>
                        <SubMenu title="Products" icon={<span className="fa fa-product-hunt fa-lg" />}>
                            <MenuItem>Product List<Link to="/product-list" /></MenuItem>
                            <MenuItem>Add Product<Link to="/add-product" /></MenuItem>
                        </SubMenu>
                        <SubMenu title="Brands" icon={<span className="fa fa-users fa-lg" />}>
                            <MenuItem>Brand List<Link to="/brand-list" /></MenuItem>
                            <MenuItem>Add Brand<Link to="/add-brand" /></MenuItem>
                        </SubMenu>
                        <SubMenu title="Category" icon={<span className="fa fa-users fa-lg" />}>
                            <MenuItem>Category List<Link to="/category-list" /></MenuItem>
                            <MenuItem>Add Category<Link to="/add-category" /></MenuItem>
                        </SubMenu>
                        <SubMenu title="Employee" icon={<span className="fa fa-user-plus fa-lg" />}>
                            <MenuItem>Employee List<Link to="/employee-list" /></MenuItem>
                            <MenuItem>Add Employee<Link to="/add-employee" /></MenuItem>
                        </SubMenu>
                        <SubMenu title="Sub-Categories" icon={<span className="fa fa-users fa-lg" />}>
                            <MenuItem>Sub-Category List<Link to="/sub-category-list" /></MenuItem>
                            <MenuItem>Add Sub-Category<Link to="/add-sub-category" /></MenuItem>
                        </SubMenu>
                        <SubMenu title="Specification" icon={<span className="fa fa-users fa-lg" />}>
                            <MenuItem>Specification List<Link to="/specification-list" /></MenuItem>
                            <MenuItem>Add Specification<Link to="/add-specification" /></MenuItem>
                        </SubMenu>
                        <MenuItem icon={<span className="fa fa-money fa-lg" />}>Orders<Link to="/orders" /></MenuItem>
                        <MenuItem icon={<span className="fa fa-ship fa-lg" />}>Shipping<Link to="/shipping" /></MenuItem>
                        <SubMenu title="Registed User" icon={<span className="fa fa-registered fa-lg" />}>
                            <MenuItem>Buyers<Link to="/buyers-list" /></MenuItem>
                            <MenuItem>Sellers<Link to="/sellers-list" /></MenuItem>
                            <MenuItem>Add Seller<Link to="/add-seller" /></MenuItem>
                        </SubMenu>
                        <MenuItem icon={<i class="fa fa-shopping-cart" aria-hidden="true"></i>}><Link to="/cart" />Cart</MenuItem>
                    </Menu>
                </SidebarContent>
                <div></div>
                <SidebarFooter><div style={{ paddingTop: "18px", paddingBlock: '18px', paddingLeft: '17px' }}>WMS</div></SidebarFooter>
            </ProSidebar>
        );
    }
}

export default Sidebar;