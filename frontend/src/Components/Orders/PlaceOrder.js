import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import axios from 'axios';

class PlaceOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: '',
            orderId: '',
            buyerId: '',
            productId: '',
            quantity: '',
            appartmentName: '',
            landamrk: '',
            area: '',
            city: '',
            state: '',
            country: '',
            sellerId: '',
        }

        // BIND METHODS SO THAT CONTEXT IS PRESERVED
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // STORE IN STATE WHEN INPUT CHANGES
    handleInputChange(event) {
        this.setState({
            msg: '',
        });
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    // HANDLE BUTTON CLICK
    handleSubmit() {
        let data = {
            orderId: this.state.orderId,
            buyerId: this.state.buyerId,
            productId: this.state.productId,
            quantity: this.state.quantity,
            appartmentName: this.state.appartmentName,
            landmark: this.state.landmark,
            area: this.state.area,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            sellerId: this.state.sellerId,
        }
        axios.post('http://localhost:5000/addOrder', data)
            .then((response) => {
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

    // RENDER METHOD
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-4.5" style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <Card className='mt-2' style={{ minWidth: '50%', minHeight: "25vh" }}>
                            <CardHeader style={{ color: 'white', backgroundColor: 'black' }} className="d-flex justify-content-center">Seller Information</CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label>Order ID</Label>
                                    <Input onChange={this.handleInputChange} name="orderId" placeholder="Ex. O101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Buyer ID</Label>
                                    <Input onChange={this.handleInputChange} name="buyerId" placeholder="Ex. B101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Product ID</Label>
                                    <Input onChange={this.handleInputChange} name="productId" placeholder="Ex. PD101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Quantity</Label>
                                    <Input onChange={this.handleInputChange} name="quantity" placeholder="Ex. 100" type="number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Appartment Name</Label>
                                    <Input onChange={this.handleInputChange} name="address1" placeholder="Ex. Galaxy Tower" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Landmark</Label>
                                    <Input onChange={this.handleInputChange} name="landmark" placeholder="Ex. Hetarth Party Plot" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Area</Label>
                                    <Input onChange={this.handleInputChange} name="area" placeholder="Ex. Science City" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>City</Label>
                                    <Input onChange={this.handleInputChange} name="city" placeholder="Ex. Ahmedabad" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>State</Label>
                                    <Input onChange={this.handleInputChange} name="state" placeholder="Ex. Gujarat" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Country</Label>
                                    <Input onChange={this.handleInputChange} name="country" placeholder="Ex. India" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Seller ID</Label>
                                    <Input onChange={this.handleInputChange} name="sellerId" placeholder="Ex. S101" type="text" />
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <p className="text-success d-flex justify-content-center">{this.state.msg}</p>
                                <div className="d-flex justify-content-center">
                                    <Button color="primary" onClick={this.handleSubmit}>Place Order</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlaceOrder;
