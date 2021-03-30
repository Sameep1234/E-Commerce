import React, { Component } from 'react';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import { Card, CardHeader, CardBody } from 'reactstrap';

class Orders extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     title: '',
        //     url: '',
        //     file: '',
        //     school: 'seas',
        //     stream: 'cse',
        //     description: '',
        //     redirectVar: false,
        //     standardError: '',
        //     touched: {
        //         title: false,
        //     },
        // }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        let target = event.target;
        // console.log('The target is: ' + target.value);
        let value;
        if (target.type === 'file') {
            // console.log('The file is: ' + JSON.stringify(target.files));
            value = target.files;
            this.setState({
                file: target.files[0],
            });
            //console.log('this.state is: '+ JSON.stringify(this.state));
        } else {
            value = target.value;
            let name = target.name;
            if (name === 'title') {
                this.setState({
                    standardError: '',
                });
            }
            // console.log('name is: ' + name);
            this.setState({
                [name]: value,
            });
            // console.log("school=" + this.state.school);
        }
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
                        </div>

                        <div style={{ maxHeight: '35vh' }} className="mt-3 d-flex justify-content-center">
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
                        </div>
                        <div style={{ maxHeight: '35vh' }} className="mt-3 d-flex justify-content-center">
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
                        </div>
                        <div style={{ maxHeight: '35vh' }} className="mt-3 d-flex justify-content-center">
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
                        </div>
                        <div style={{ maxHeight: '35vh' }} className="mt-3 d-flex justify-content-center">
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
                        </div>
                        <div style={{ maxHeight: '35vh' }} className="mt-3 d-flex justify-content-center">
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
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Orders;
