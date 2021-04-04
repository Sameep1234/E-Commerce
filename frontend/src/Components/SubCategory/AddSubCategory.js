import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import axios from 'axios';

class AddSubCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: '',
            categoryId: '',
            subCategoryName: '',
            subCategoryId: '',
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
            categoryId: this.state.categoryId,
            subCategoryName: this.state.subCategoryName,
            subCategoryId: this.state.subCategoryId,
        }
        axios.post('http://localhost:5000/addSubCategory', data)
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
                        <Card className='mt-2' style={{ minWidth: '50%', maxHeight: "60vh" }}>
                            <CardHeader style={{ color: 'white', backgroundColor: 'black' }} className="d-flex justify-content-center">Sub-Category Information</CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label>Sub-Category ID</Label>
                                    <Input onChange={this.handleInputChange} name="subCategoryId" placeholder="Ex. L101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Sub-Category Name</Label>
                                    <Input onChange={this.handleInputChange} name="subCategoryName" placeholder="Ex. Laptop" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Category ID</Label>
                                    <Input onChange={this.handleInputChange} name="categoryId" placeholder="Ex. 1" type="text" />
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <p className="text-success d-flex justify-content-center">{this.state.msg}</p>
                                <div className="d-flex justify-content-center">
                                    <Button onClick={this.handleSubmit} color="primary">Add Category</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddSubCategory;
