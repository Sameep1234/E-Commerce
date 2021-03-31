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

        console.log(JSON.stringify(data));

        axios.defaults.withCredentials = true;
        axios.post('http://localhost:5000/addSeller', data)
            .then((response) => {
                if(response.data.status === 1) {
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
                                    <Input onChange={this.handleInputChange} placeholder="Ex. S101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>First Name</Label>
                                    <Input onChange={this.handleInputChange} placeholder="Ex. Josh" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Middle Name</Label>
                                    <Input onChange={this.handleInputChange} placeholder="Ex. Mulien" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Last Name</Label>
                                    <Input onChange={this.handleInputChange} placeholder="Ex. Smith" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Shop Number</Label>
                                    <Input onChange={this.handleInputChange} placeholder="Ex. S-26" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Address Line 1</Label>
                                    <Input onChange={this.handleInputChange} placeholder="Ex. Galaxy Tower" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Landmark</Label>
                                    <Input onChange={this.handleInputChange} placeholder="Ex. Hetarth Party Plot" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Area</Label>
                                    <Input onChange={this.handleInputChange} placeholder="Ex. Science City" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>City</Label>
                                    <Input onChange={this.handleInputChange} placeholder="Ex. Ahmedabad" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>State</Label>
                                    <Input onChange={this.handleInputChange} placeholder="Ex. Gujarat" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Country</Label>
                                    <Input onChange={this.handleInputChange} placeholder="Ex. India" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Postal Code</Label>
                                    <Input onChange={this.handleInputChange} placeholder="Ex. 380054" type="number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Contact Number</Label>
                                    <Input onChange={this.handleInputChange} placeholder="Ex. 9998887776" type="number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input onChange={this.handleInputChange} type="email" placeholder="Ex. abc@gmail.com" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>GST Number</Label>
                                    <Input onChange={this.handleInputChange} type="number" placeholder="Ex. 1200003" />
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
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
