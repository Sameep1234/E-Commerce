import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

class AddSeller extends Component {
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
                                    <Input placeholder="Ex. S101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>First Name</Label>
                                    <Input placeholder="Ex. Josh" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Middle Name</Label>
                                    <Input placeholder="Ex. Mulien" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Last Name</Label>
                                    <Input placeholder="Ex. Smith" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Shop Number</Label>
                                    <Input placeholder="Ex. S-26" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Address Line 1</Label>
                                    <Input placeholder="Ex. Galaxy Tower" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Landmark</Label>
                                    <Input placeholder="Ex. Hetarth Party Plot" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Area</Label>
                                    <Input placeholder="Ex. Science City" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>City</Label>
                                    <Input placeholder="Ex. Ahmedabad" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>State</Label>
                                    <Input placeholder="Ex. Gujarat" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Country</Label>
                                    <Input placeholder="Ex. Josh" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Postal Code</Label>
                                    <Input placeholder="Ex. 380054" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Contact Number</Label>
                                    <Input placeholder="Ex. 9998887776" type="number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input type="email" placeholder="Ex. abc@gmail.com" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>GST Number</Label>
                                    <Input type="number" placeholder="Ex. 1200003" />
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <div className="d-flex justify-content-center">
                                    <Button color="primary">Add Seller</Button>
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
