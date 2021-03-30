import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

class AddSpecification extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <Card className='mt-2' style={{ minWidth: '50%', minHeight: "25vh" }}>
                            <CardHeader style={{ color: 'white', backgroundColor: 'black' }} className="d-flex justify-content-center">Specification Information</CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label>Specification ID</Label>
                                    <Input placeholder="Ex. PD101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Product ID</Label>
                                    <Input placeholder="Ex. OnePlus 8" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Category ID</Label>
                                    <Input placeholder="Ex. Electronics" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Sub_Category ID</Label>
                                    <Input placeholder="Ex. Mobile" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Brand ID</Label>
                                    <Input placeholder="Ex. OnePlus" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Model</Label>
                                    <Input placeholder="Ex. SPEC102" type="number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Product Description</Label>
                                    <Input type="text" placeholder="Ex. Mirror Gray"/>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <div className="d-flex justify-content-center">
                                    <Button color="primary">Add Staff</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div >
        );
    }
}

export default AddSpecification;
