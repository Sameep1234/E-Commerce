import React, { Component } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import Header from './Header';
import Sidebar from './Sidebar';

class Dashboard extends Component {

    // componentDidMount() {
    //     axios.get('/quantityLess')
    //         .then((response) => {

    //         })
    //         .catch((response) => {

    //         })
    // }

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    <div className="col">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-3 mr-3 blue mt-5">
                                <div className="row d-flex justify-content-center">
                                    <h5 className="mt-2">Pending Transaction</h5>
                                    <span className="mt-2" style={{ paddingLeft: '35%' }} role="button">+</span>
                                </div>
                            </div>

                            <div className="col-md-3 mr-3 red mt-5">
                                <div className="row d-flex justify-content-center">
                                    <h5 className="mt-2">Reducing Stock</h5>
                                    <span className="mt-2" style={{ paddingLeft: '44%' }} role="button">+</span>
                                </div>
                            </div>
                            <div className="col-md-3 mr-3 green mt-5">
                                <div className="row d-flex justify-content-center">
                                    <h5 className="mt-2">Successful Transaction</h5>
                                    <span className="mt-2" style={{ paddingLeft: '30%' }} role="button">+</span>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 d-flex justify-content-center">
                            {/* <h1 className="d-flex justify-content-center">Space for pie chart</h1> */}
                            <h1 className="text-info">Pending Transaction</h1>
                            <a href="/demo.xls" download><span className="fa fa-download" /></a>
                            <table style={{ width: "100%" }}>

                                <tr>
                                    <th><div className="d-flex justify-content-center">Order</div></th>
                                    <th><div className="d-flex justify-content-center">ProductID</div></th>
                                    <th><div className="d-flex justify-content-center">BuyerID</div></th>
                                    <th><div className="d-flex justify-content-center">Price</div></th>
                                </tr>
                                <tr>
                                    <td><div className="d-flex justify-content-center">O101</div></td>
                                    <td><div className="d-flex justify-content-center">MX100</div></td>
                                    <td><div className="d-flex justify-content-center">B102</div></td>
                                    <td><div className="d-flex justify-content-center">	&#x20B9; 1000</div></td>
                                </tr>
                                <tr>
                                    <td><div className="d-flex justify-content-center">O101</div></td>
                                    <td><div className="d-flex justify-content-center">MX100</div></td>
                                    <td><div className="d-flex justify-content-center">B102</div></td>
                                    <td><div className="d-flex justify-content-center">	&#x20B9; 10000</div></td>
                                </tr>
                                <tr>
                                    <td><div className="d-flex justify-content-center">O101</div></td>
                                    <td><div className="d-flex justify-content-center">MX100</div></td>
                                    <td><div className="d-flex justify-content-center">B102</div></td>
                                    <td><div className="d-flex justify-content-center">	&#x20B9; 100000</div></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
