import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import { Card, CardHeader, CardBody } from 'reactstrap';
import axios from 'axios';

function ShowCart({ result }) {
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
                        <div className="mt-3 d-flex justify-content-center">
                            Showing Orders of:<br />
                            <div className="ml-2">
                                <select name="year" id="year" onBlur={this.handleInputChange}>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>
                            </div>
                            <div style={{ maxHeight: '35vh' }} className="mt-3 d-flex justify-content-center">
                                <ShowCart result={this.state.result} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
