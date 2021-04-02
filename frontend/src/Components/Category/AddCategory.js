import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import axios from 'axios';

class AddCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: '',
            categoryId: '',
            categoryName: '',
        }

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
            categoryName: this.state.categoryName,
        }
        axios.post('http://localhost:5000/addCategory', data)
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
                        <Card className='mt-2' style={{ minWidth: '50%', maxHeight: "50vh" }}>
                            <CardHeader style={{ color: 'white', backgroundColor: 'black' }} className="d-flex justify-content-center">Category Information</CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label>Category ID</Label>
                                    <Input onChange={this.handleInputChange} name="categoryId" placeholder="Ex. E101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Category Name</Label>
                                    <Input onChange={this.handleInputChange} name="categoryName" placeholder="Ex. Electronics" type="text" />
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

export default AddCategory;
