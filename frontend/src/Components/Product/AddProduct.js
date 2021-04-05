import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import axios from 'axios';

class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productId: '',
            productName: '',
            categoryId: '',
            subCategoryId: '',
            brandId: '',
            specificationId: '',
            color: '',
            price: '',
            stock: '',
            size: '',
            msg: '',
        }

        //BIND THE METHODS
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //STORE IN THE STATE
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

    //HANDLE SUBMIT BUTTON CLICK
    handleSubmit() {
        let data = {
            productId: this.state.productId,
            productName: this.state.productName,
            categoryId: this.state.categoryId,
            subCategoryId: this.state.subCategoryId,
            brandId: this.state.brandId,
            specificationId: this.state.specificationId,
            color: this.state.color,
            price: this.state.price,
            stock: this.state.stock,
            size: this.state.size,
        }

        axios.post('http://localhost:5000/addProduct', data)
            .then(response => {
                this.setState({
                    msg: response.data.msg,
                });
            })
            .catch(err => {
                this.setState({
                    msg: err,
                });
            });
    }

    //RENDER METHOD
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
                            <CardHeader style={{ color: 'white', backgroundColor: 'black' }} className="d-flex justify-content-center">Product Information</CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label>Product ID</Label>
                                    <Input onChange={this.handleInputChange} name="productId" placeholder="Ex. PD101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Product Name</Label>
                                    <Input onChange={this.handleInputChange} name="productName" placeholder="Ex. OnePlus 8" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Category ID</Label>
                                    <Input onChange={this.handleInputChange} name="categoryId" placeholder="Ex. Electronics" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Sub_Category ID</Label>
                                    <Input onChange={this.handleInputChange} name="subCategoryId" placeholder="Ex. Mobile" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Brand ID</Label>
                                    <Input onChange={this.handleInputChange} name="brandId" placeholder="Ex. OnePlus" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Specification ID</Label>
                                    <Input onChange={this.handleInputChange} name="specificationId" placeholder="Ex. SPEC102" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Color</Label>
                                    <Input onChange={this.handleInputChange} name="color" type="text" placeholder="Ex. Mirror Gray" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Price (per stock)</Label>
                                    <Input onChange={this.handleInputChange} name="price" type="number" placeholder="Ex. 32999" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Stock</Label>
                                    <Input onChange={this.handleInputChange} name="stock" type="number" placeholder="Ex. 150" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Size</Label>
                                    <Input onChange={this.handleInputChange} name="size" type="text" placeholder="Ex. Medium" />
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <p className="text-success d-flex justify-content-center">{this.state.msg}</p>
                                <div className="d-flex justify-content-center">
                                    <Button onClick={this.handleSubmit} color="primary">Add Product</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div >
        );
    }
}

export default AddProduct;
