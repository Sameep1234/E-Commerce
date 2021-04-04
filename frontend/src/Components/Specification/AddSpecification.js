import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import axios from 'axios';

class AddSpecification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: '',
            specificationId: '',
            subCategoryId: '',
            brandId: '',
            model: '',
            productDescription: '',
            categoryId: '',
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
            specificationId: this.state.specificationId,
            categoryId: this.state.categoryId,
            subCategoryId: this.state.subCategoryId,
            brandId: this.state.brandId,
            model: this.state.model,
            productDescription: this.state.productDescription,
        }
        axios.post('http://localhost:5000/addSpecification', data)
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
                    <div style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <Card className='mt-2' style={{ minWidth: '50%', minHeight: "25vh" }}>
                            <CardHeader style={{ color: 'white', backgroundColor: 'black' }} className="d-flex justify-content-center">Specification Information</CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label>Specification ID</Label>
                                    <Input onChange={this.handleInputChange} name="specificationId" placeholder="Ex. SPEC101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Category ID</Label>
                                    <Input onChange={this.handleInputChange} name="categoryId" placeholder="Ex. 1" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Sub_Category ID</Label>
                                    <Input onChange={this.handleInputChange} name="subCategoryId" placeholder="Ex. SC101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Brand ID</Label>
                                    <Input onChange={this.handleInputChange} name="brandId" placeholder="Ex. 1" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Model</Label>
                                    <Input onChange={this.handleInputChange} name="model" placeholder="Ex. OnePlus 8" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Product Description</Label>
                                    <Input onChange={this.handleInputChange} name="productDescription" type="text" placeholder="Ex. Mirror Gray"/>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <p className="text-success d-flex justify-content-center">{this.state.msg}</p>
                                <div className="d-flex justify-content-center">
                                    <Button onClick={this.handleSubmit} color="primary">Add Specification</Button>
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
