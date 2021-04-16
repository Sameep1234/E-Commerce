import React, { Component } from 'react';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import axios from 'axios';

class EditBrand extends Component {
    constructor(props) {
        super(props);

        this.state = {
            brandId: '',
            brandName: '',
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
            brandId: this.state.brandId,
            brandName: this.state.brandName,
        }

        axios.post('http://localhost:5000/editBrand', data)
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
        axios.get('http://localhost:5000/getBrand', { headers: { brandId: this.props.brandId } })
            .then((response) => {
                
                if (response.data.status === 1) {
                    this.setState({
                        brandId: response.data.data.brandId,
                        brandName: response.data.data.brandName,
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
                    msg: err.message, 
                });
            })
    }

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
                                    <Input onChange={this.handleInputChange} name="brandId" value={this.props.brandId} type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Brand Name</Label>
                                    <Input onChange={this.handleInputChange} name="brandName" value={this.state.brandName} type="text" />
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <p className="text-success d-flex justify-content-center">{this.state.msg}</p>
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


export default EditBrand;
