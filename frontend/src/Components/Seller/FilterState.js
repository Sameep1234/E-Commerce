import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Button } from 'reactstrap';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import axios from 'axios';

class StateWiseSeller extends Component {
    render() {
        // eslint-disable-next-line array-callback-return
        let renderList = this.props.result.map((fb) => {
            if (Array.isArray(fb)) {
                if (fb.length > 0) {
                    let loop2 = fb.map((lfb) => {
                        return (
                            <tr>
                                <td><div className="d-flex justify-content-center">{lfb.Name}</div></td>
                                <td><div className="d-flex justify-content-center">{lfb.email}</div></td>
                                <td><div className="d-flex justify-content-center">{lfb.contactNumber}</div></td>
                                <td><div className="d-flex justify-content-center">{lfb.Address}</div></td>
                                <td><div className="d-flex justify-content-center">{lfb.gstNumber}</div></td>
                            </tr>
                        );
                    })
                    return (loop2);
                }

            }
        });

        return (renderList);
    }
}


class FilterState extends Component {
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
        axios.get('http://localhost:5000/sellerStateWise')
            .then((response) => {
                this.setState({
                    msg: response.data.msg,
                })
                if (response.data.status) {
                    this.setState({
                        result: response.data.data,
                    })
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
                    <div className="col-4.5" style={{ minHeight: "93vh" }}>
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
                        <div className="m-5">
                            <table style={{ width: '100%' }}>
                                <tr>
                                    <th><div className="d-flex justify-content-center">Name</div></th>
                                    <th><div className="d-flex justify-content-center">Email</div></th>
                                    <th><div className="d-flex justify-content-center">Contact No.</div></th>
                                    <th><div className="d-flex justify-content-center">Address</div></th>
                                    <th><div className="d-flex justify-content-center">GST Number</div></th>
                                </tr>
                                <StateWiseSeller result={this.state.result} />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterState;
