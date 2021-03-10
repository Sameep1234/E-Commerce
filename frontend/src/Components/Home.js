import React, { Component } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import Header from './Header';
import Sidebar from './Sidebar';

class Home extends Component {
    render() {
        return (
            <div style={{height: "93vh"}}>
                <Header />
                <Sidebar />
            </div>
        );
    }
}

export default Home;
