import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import axios from 'axios';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

class AddSeller extends Component {
    constructor(props) {
        super(props);

        // MAINTAIN STATE
        this.state = {
            sellerId: '',
            firstName: '',
            middleName: '',
            lastName: '',
            shopNumber: '',
            address1: '',
            landmark: '',
            area: '',
            city: '',
            state: '',
            country: '',
            postalCode: 0,
            contactNumber: 0,
            email: '',
            GST: 0,
            msg: '',
        }

        // BIND METHODS SO THAT CONTEXT IS PRESERVED
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    // STORE IN STATE IF CHANGED
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

    // SEND REQUEST TO BACKEND
    handleSubmit() {
        let data = {
            sellerId: this.state.sellerId,
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            shopNumber: this.state.shopNumber,
            address1: this.state.address1,
            landmark: this.state.landmark,
            area: this.state.area,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            postalCode: this.state.postalCode,
            contactNumber: this.state.contactNumber,
            email: this.state.email,
            GST: this.state.GST,
        }

        axios.defaults.withCredentials = true;
        axios.post('http://localhost:5000/addSeller', data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === 1) {
                    this.setState({
                        msg: 'Succesfully added',
                    });
                }
            })
            .catch((err) => {
                alert(err);
            })
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
                                    <Label>Seller ID</Label>
                                    <Input onChange={this.handleInputChange} name="sellerId" placeholder="Ex. S101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>First Name</Label>
                                    <Input onChange={this.handleInputChange} name="firstName" placeholder="Ex. Josh" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Middle Name</Label>
                                    <Input onChange={this.handleInputChange} name="middleName" placeholder="Ex. Mulien" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Last Name</Label>
                                    <Input onChange={this.handleInputChange} name="lastName" placeholder="Ex. Smith" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Shop Number</Label>
                                    <Input onChange={this.handleInputChange} name="shopNumber" placeholder="Ex. S-26" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Address Line 1</Label>
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
                                    <Label>Postal Code</Label>
                                    <Input onChange={this.handleInputChange} name="postalCode" placeholder="Ex. 380054" type="number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Contact Number</Label>
                                    <Input onChange={this.handleInputChange} name="contactNumber" placeholder="Ex. 9998887776" type="number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input onChange={this.handleInputChange} type="email" name="email" placeholder="Ex. abc@gmail.com" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>GST Number</Label>
                                    <Input onChange={this.handleInputChange} type="number" name="GST" placeholder="Ex. 1200003" />
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <p className="text-success">{this.state.msg}</p>
                                <div className="d-flex justify-content-center">
                                    <Button color="primary" onClick={this.handleSubmit}>Add Seller</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddSeller;
