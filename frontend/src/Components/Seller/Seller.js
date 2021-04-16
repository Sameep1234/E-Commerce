import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import axios from 'axios';

class SellerList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let renderList = this.props.result.map((sl) => {
            // alert(JSON.stringify(sl));
            return (
                <tr>
                    <td><div className="d-flex justify-content-center">{sl.sellerId}</div></td>
                    <td><div className="d-flex justify-content-center">{sl.name}</div></td>
                    <td><div className="d-flex justify-content-center">{sl.email}</div></td>
                    <td><div className="d-flex justify-content-center">{sl.contactNumber}</div></td>
                    <td><div className="d-flex justify-content-center">{sl.address1}</div></td>
                    <td><div className="d-flex justify-content-center">{sl.area}</div></td>
                    <td><div className="d-flex justify-content-center">{sl.city}</div></td>
                    <td><div className="d-flex justify-content-center">{sl.state}</div></td>
                    <td><div className="d-flex justify-content-center">{sl.gstNumber}</div></td>

                </tr>
            );
        });
        return (renderList);
    }
}

class Seller extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
            msg: '',
            cityFilter: false,
            stateFilter: false,
        }

        this.filterCity = this.filterCity.bind(this);
        this.filterState = this.filterState.bind(this);
    }

    filterCity() {
        this.setState({
            cityFilter: true,
        });
    }

    filterState() {
        this.setState({
            stateFilter: true,
        });
    }

    componentDidMount() {
        axios.get('http://localhost:5000/sellerList')
            .then((response) => {
                this.setState({
                    msg: response.data.msg,
                });
                if (response.data.status === 1) {
                    this.setState({
                        result: response.data.data,
                    });
                }
            })
            .catch((err) => {
                this.setState({
                    msg: err,
                });
            })
    }

    render() {
        if (this.state.cityFilter) {
            return (
                <Redirect to="/seller-list/filter-city" />
            );
        }

        else if (this.state.stateFilter) {
            return (
                <Redirect to="/seller-list/filter-state" />
            );
        }
        return (
            <div>
                <Header />
                <div className="row">
                    <div style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    <div style={{ width: "82vw" }}>
                        <div className="mt-2 d-flex">
                            <Button className="mx-auto" color="primary" onClick={this.filterCity}>
                                Filter By City
                            </Button>
                            <Button className="mx-auto" color="primary" onClick={this.filterState}>
                                Filter By State
                            </Button>
                        </div>
                        <table className="mt-5" style={{ width: '100%' }}>
                            <tr>
                                <th><div className="d-flex justify-content-center">Seller ID</div></th>
                                <th><div className="d-flex justify-content-center">Name</div></th>
                                <th><div className="d-flex justify-content-center">Email</div></th>
                                <th><div className="d-flex justify-content-center">Contact No.</div></th>
                                <th><div className="d-flex justify-content-center">Building Name</div></th>
                                <th><div className="d-flex justify-content-center">Area</div></th>
                                <th><div className="d-flex justify-content-center">City</div></th>
                                <th><div className="d-flex justify-content-center">State</div></th>
                                <th><div className="d-flex justify-content-center">GST Number</div></th>
                            </tr>
                            <SellerList result={this.state.result} />
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Seller;
