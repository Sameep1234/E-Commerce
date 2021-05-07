/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import { Card, CardHeader, CardBody } from 'reactstrap';
import axios from 'axios';

function ShowCart({ result }) {
    // eslint-disable-next-line array-callback-return
    let display = result.map((cl) => {
        if (Object.keys(cl).length > 3) {
            return (
                <Card className="col-md-8">
                    <CardHeader className="row">
                        <div className="col">
                            <p className="row">ORDER PLACED</p>
                            <p className="row"> 18 October 2019</p>
                        </div>
                        <div className="col">
                            <p className="row">TOTAL</p>
                            <p className="row"> Rs 1,199.00</p>
                        </div>
                        <div className="col">
                            <p className="row">SHIP TO</p>
                            <p className="row">Sameep Vani</p>
                        </div>
                    </CardHeader>
                    <CardBody>
                        SOME DESCRIPTION
                    </CardBody>
                </Card>
            )
        }

    });

    return (display);
}

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/cartList')
            .then((response) => {
                if (response.data.status === 1) {
                    this.setState({
                        result: response.data.data,
                    });
                }
                alert(JSON.stringify(this.state.result[0]));
            })
            .catch((err) => {
                alert(err);
            })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    <div style={{ minWidth: '75%' }}>
                        <div className="mt-3 ">
                            <div className="mt-3 d-flex justify-content-center">
                                {/* <ShowCart result={this.state.result} /> */}
                                <Card className="ml-5 col-md-12">
                                    <CardHeader className="row">
                                        <div className="col">
                                            <p className="row">SHIP TO</p>
                                            <p className="row">Sameep Nilesh Vani</p>
                                        </div>
                                        <div className="col">
                                            <p className="row">Buyer ID</p>
                                            <p className="row">B101</p>
                                        </div>
                                        <div className="col">
                                            <p className="row">Buyer Email</p>
                                            <p className="row">sameep.v@ahduni.edu.in</p>
                                        </div>
                                    </CardHeader>
                                    <CardBody > 
                                        <div className="row">
                                            <div className="col">
                                                <p className="row">Product ID</p>
                                                <p className="row"> PD102</p>
                                            </div>
                                            <div className="col">
                                                <p className="row">Product Name</p>
                                                <p className="row"> Thermos</p>
                                            </div>
                                            <div className="col">
                                                <p className="row">Category</p>
                                                <p className="row"> Crockery</p>
                                            </div>
                                            <div className="col">
                                                <p className="row">Sub Category</p>
                                                <p className="row"> Glasses</p>
                                            </div>
                                            <div className="col">
                                                <p className="row">Brand</p>
                                                <p className="row"> Tupperware</p>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <p className="row">Product ID</p>
                                                <p className="row"> PD103</p>
                                            </div>
                                            <div className="col">
                                                <p className="row">Product Name</p>
                                                <p className="row"> Inspiron 5593</p>
                                            </div>
                                            <div className="col">
                                                <p className="row">Category</p>
                                                <p className="row"> Electronics</p>
                                            </div>
                                            <div className="col">
                                                <p className="row">Sub Category</p>
                                                <p className="row"> Laptop</p>
                                            </div>
                                            <div className="col">
                                                <p className="row">Brand</p>
                                                <p className="row"> Dell</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card className="ml-5 col-md-12">
                                    <CardHeader className="row">
                                        <div className="col">
                                            <p className="row">SHIP TO</p>
                                            <p className="row">Aneri Dipakbhai Dalwadi</p>
                                        </div>
                                        <div className="col">
                                            <p className="row">Buyer ID</p>
                                            <p className="row">B102</p>
                                        </div>
                                        <div className="col">
                                            <p className="row">Buyer Email</p>
                                            <p className="row">aneri.d@ahduni.edu.in</p>
                                        </div>
                                    </CardHeader>
                                    <CardBody > 
                                        <div className="row">
                                            <div className="col">
                                                <p className="row">Product ID</p>
                                                <p className="row"> PD102</p>
                                            </div>
                                            <div className="col">
                                                <p className="row">Product Name</p>
                                                <p className="row"> Thermos</p>
                                            </div>
                                            <div className="col">
                                                <p className="row">Category</p>
                                                <p className="row"> Crockery</p>
                                            </div>
                                            <div className="col">
                                                <p className="row">Sub Category</p>
                                                <p className="row"> Glasses</p>
                                            </div>
                                            <div className="col">
                                                <p className="row">Brand</p>
                                                <p className="row"> Tupperware</p>
                                            </div>
                                        </div>
                                        
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
