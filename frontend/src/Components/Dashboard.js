import React, { Component } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import Header from './Common/Header';
import Sidebar from './Common/Sidebar';
import axios from 'axios';


// DETAILS FUNCTIONAL COMPONENT
function Details({ result }) {

    let renderList = result.map((rl) => {
        // alert(rl[0].orderId);
        if (Array.isArray(rl)) {
            return (
                <tr>
                    <td><div className="d-flex justify-content-center">{rl[0].orderId}</div></td>
                    <td><div className="d-flex justify-content-center">{rl[0].buyerId}</div></td>
                    <td><div className="d-flex justify-content-center">{rl[0].firstName}</div></td>
                    <td><div className="d-flex justify-content-center">{rl[0].middleName}</div></td>
                    <td><div className="d-flex justify-content-center">{rl[0].lastName}</div></td>
                </tr>

            );
        }
    });

    return (renderList);
}

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: '',
            color: '',
            result: [],
            msg: '',
        }

        this.handlePendingTransaction = this.handlePendingTransaction.bind(this);
        this.handleSuccessfullTransaction = this.handleSuccessfullTransaction.bind(this);
        this.handleReducingStocks = this.handleReducingStocks.bind(this);
        this.display = this.display.bind(this);
    }

    // INITIALLY DISPLAY PENDING TRANSACTION
    componentDidMount() {
        //this.handlePendingTransaction();
    }

    // PENDING TRANSACTION
    handlePendingTransaction() {
        this.setState({
            display: 'Pending Transaction',
            color: 'blueText',
        });
        axios.get('http://localhost:5000/pendingTransaction')
            .then((response) => {
                if (response.data.status === 1) {
                    this.setState({
                        result: response.data.data,
                    });
                }
                this.setState({
                    msg: response.data.msg,
                });
            })
            .catch((err) => {
                this.setState({
                    msg: err,
                });
            });
    }

    // SUCCESSFULL TRANSACTION
    handleSuccessfullTransaction() {
        this.setState({
            display: 'Successfull Transaction',
            color: 'greenText',
        });
        axios.get('http://localhost:5000/successfulTransaction')
            .then((response) => {
                if (response.data.status === 1) {
                    this.setState({
                        result: response.data.data,
                    });
                }
                this.setState({
                    msg: response.data.msg,
                });
            })
            .catch((err) => {
                this.setState({
                    msg: err,
                });
            })
    }

    // REDUCING STOCKS
    handleReducingStocks() {
        this.setState({
            display: 'Reducing Stocks',
            color: 'redText',
        });
        axios.get('http://localhost:5000/reducingStocks')
            .then((response) => {
                if (response.data.status === 1) {
                    this.setState({
                        result: response.data.data,
                    });
                }
                this.setState({
                    msg: response.data.msg,
                });
            })
            .catch((err) => {
                this.setState({
                    msg: err,
                });
            })
    }

    // DISPLAY DETAILS ON CLICK
    display() {

    }

    // RENDER METHOD
    render() {
        let display = <Details result={this.state.result} color={this.state.color} write={this.state.display} />
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
                                    <span className="mt-2" style={{ paddingLeft: '35%' }} role="button" onClick={this.handlePendingTransaction}>+</span>
                                </div>
                            </div>

                            <div className="col-md-3 mr-3 red mt-5">
                                <div className="row d-flex justify-content-center">
                                    <h5 className="mt-2">Reducing Stock</h5>
                                    <span className="mt-2" style={{ paddingLeft: '44%' }} role="button" onClick={this.handleReducingStocks}>+</span>
                                </div>
                            </div>

                            <div className="col-md-3 mr-3 green mt-5">
                                <div className="row d-flex justify-content-center">
                                    <h5 className="mt-2">Successful Transaction</h5>
                                    <span className="mt-2" style={{ paddingLeft: '30%' }} role="button" onClick={this.handleSuccessfullTransaction}>+</span>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 d-flex justify-content-center">
                            <h1 className={this.state.color}>{this.state.display}</h1>
                        </div>
                        <div>
                            <div className="m-5">
                                <table style={{ width: '100%' }}>
                                    <tr>
                                        <th><div className="d-flex justify-content-center">Order Id</div></th>
                                        <th><div className="d-flex justify-content-center">Buyer Id</div></th>
                                        <th><div className="d-flex justify-content-center">First Name</div></th>
                                        <th><div className="d-flex justify-content-center">Middle Name</div></th>
                                        <th><div className="d-flex justify-content-center">Last Name</div></th>
                                    </tr>
                                    <Details result={this.state.result} />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
