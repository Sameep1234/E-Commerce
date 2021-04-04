import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap';

class Shipping extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    <div className="col row d-flex justify-content-center" style={{maxHeight: '50vh'}}>
                        <Card className="m-2 col-md-3">
                            <CardHeader style={{ backgroundColor: 'lightgreen' }}>Shipping Details</CardHeader>
                            <CardBody>
                                <p>Order ID</p>
                                <p>Product Name</p>
                                <p>Shipping Details</p>
                            </CardBody>
                            <CardFooter>
                                <div className="d-flex justify-content-center">
                                    <Button color="primary">View Details</Button>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className="m-2 col-md-3">
                            <CardHeader style={{ backgroundColor: 'rgb(250, 64, 89)' }}>Shipping Details</CardHeader>
                            <CardBody>
                                <p>Order ID</p>
                                <p>Product Name</p>
                                <p>Shipping Details</p>
                            </CardBody>
                            <CardFooter>
                                <div className="d-flex justify-content-center">
                                    <Button color="primary">View Details</Button>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className="m-2 col-md-3">
                            <CardHeader style={{ backgroundColor: 'lightgreen' }}>Shipping Details</CardHeader>
                            <CardBody>
                                <p>Order ID</p>
                                <p>Product Name</p>
                                <p>Shipping Details</p>
                            </CardBody>
                            <CardFooter>
                                <div className="d-flex justify-content-center">
                                    <Button color="primary">View Details</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shipping;
