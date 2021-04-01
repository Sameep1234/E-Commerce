import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import axios from 'axios';

class AddBrands extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: '',
            brandId: '',
            brandName: '',
        }

        // BIND METHODS SO THAT CONTEXT IS PRESERVED
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    // STORE IN STATE IF CHANGED
    handleSubmit() {
        let data = {
            brandId: this.state.brandId,
            brandName: this.state.brandName,
        }

        axios.post('http://localhost:5000/addBrand', data)
            .then((response) => {
                if(response.data.status === 1) {
                    this.setState({
                        msg: 'Successfully added brand',
                    });
                }
            })
            .catch((err) => {
                alert(err);
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
                            <CardHeader style={{ color: 'white', backgroundColor: 'black' }} className="d-flex justify-content-center">Brand Information</CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label>Brand ID</Label>
                                    <Input onChange={this.handleInputChange} name="brandId" placeholder="Ex. L101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Brand Name</Label>
                                    <Input onChange={this.handleInputChange} name="brandName" placeholder="Ex. Dell" type="text" />
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <p className="text-success">{this.state.msg}</p>
                                <div className="d-flex justify-content-center">
                                    <Button onClick={this.handleSubmit} color="primary">Add Brand</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddBrands;
