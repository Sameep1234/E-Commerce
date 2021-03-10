import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

class Orders extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div style={{ height: "93vh" }}>
                        <Sidebar />
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Orders;
