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
                            <MenuItem>Edit Product<Link to="/edit-product" /></MenuItem>
                            <MenuItem>Delete<Link to="/delete-product" /></MenuItem>
                        </SubMenu>
                        <SubMenu title="Staff" icon={<span className="fa fa-users fa-lg" />}>
                            <MenuItem>Staff List<Link to="/staff-list" /></MenuItem>
                            <MenuItem>Add Staff<Link to="/add-staff" /></MenuItem>
                            <MenuItem>Edit Staff<Link to="/edit-staff" /></MenuItem>
                            <MenuItem>Delete<Link to="/delete-staff" /></MenuItem>
                        </SubMenu>
                        <MenuItem icon={<span className="fa fa-money fa-lg" />}>Orders<Link to="/orders" /></MenuItem>
                        <MenuItem icon={<span className="fa fa-ship fa-lg" />}>Shipping<Link to="/shipping" /></MenuItem>
                        <SubMenu title="Registed User" icon={<span className="fa fa-registered fa-lg" />}>
                            <MenuItem>Buyers<Link to="/buyers-list" /></MenuItem>
                            <MenuItem>Sellers<Link to="/sellers-list" /></MenuItem>
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
