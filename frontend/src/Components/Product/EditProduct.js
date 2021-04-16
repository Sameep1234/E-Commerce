import React, { Component } from 'react';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import axios from 'axios';

class EditProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productName: '',
            categoryId: '',
            subCategoryId: '',
            brandId: '',
            specificationId: '',
            color: '',
            price: 0,
            stock: 0,
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

    componentDidMount() {
        axios.get('http://localhost:5000/getProduct', { headers: { productId: this.props.productId } })
            .then((response) => {
                
                if (response.data.status === 1) {
                    this.setState({
                        productName: response.data.data.productName,
                        categoryId: response.data.data.categoryId,
                        subCategoryId: response.data.data.subCategoryId,
                        brandId: response.data.data.brandId,
                        specificationId: response.data.data.specificationId,
                        color: response.data.data.color,
                        price: response.data.data.price,
                        stock: response.data.data.quantity,
                        size: response.data.data.size,
                    });
                }
                else {
                    this.setState({
                        msg: response.data.msg,
                    });
                }
            })
            .catch((err) => {
                this.setState({
                    msg: err, 
                });
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
                    <div className="col d-flex justify-content-center">
                        <Card className='mt-2' style={{ minWidth: '50%', minHeight: "25vh" }}>
                            <CardHeader style={{ color: 'white', backgroundColor: 'black' }} className="d-flex justify-content-center">Product Information</CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label>Product Name</Label>
                                    <Input onChange={this.handleInputChange} name="productName" value={this.state.productName} type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Category ID</Label>
                                    <Input onChange={this.handleInputChange} name="categoryId" value={this.state.categoryId} type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Sub_Category ID</Label>
                                    <Input onChange={this.handleInputChange} name="subCategoryId" value={this.state.subCategoryId} type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Brand ID</Label>
                                    <Input onChange={this.handleInputChange} name="brandId" value={this.state.brandId} type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Specification ID</Label>
                                    <Input onChange={this.handleInputChange} name="specificationId" value={this.state.specificationId} type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Color</Label>
                                    <Input onChange={this.handleInputChange} name="color" type="text" value={this.state.color} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Price (per stock)</Label>
                                    <Input onChange={this.handleInputChange} name="price" type="number" value={this.state.price} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Stock</Label>
                                    <Input onChange={this.handleInputChange} name="stock" type="number" value={this.state.stock} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Size</Label>
                                    <Input onChange={this.handleInputChange} name="size" type="text" value={this.state.size} />
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

export default EditProduct;
