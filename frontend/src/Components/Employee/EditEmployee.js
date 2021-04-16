import React, { Component } from 'react';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import axios from 'axios';

class EditEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeId: '',
            employeeType: '',
            firstName: '',
            middleName: '',
            lastName: '',
            salary: '',
            hiringDate: '',
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
            employeeId: this.state.employeeId,
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            salary: this.state.salary,
            hiringDate: this.state.hiringDate,
        }

        axios.post('http://localhost:5000/editEmployee', data)
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
        alert(this.props.employeeId);
        axios.get('http://localhost:5000/getEmployee', { headers: { employeeId: this.props.employeeId } })
            .then((response) => {
                
                if (response.data.status === 1) {
                    this.setState({
                        employee: response.data.data.employee,
                        firstName: response.data.data.firstName,
                        middleName: response.data.data.middleName,
                        lastName: response.data.data.lastName,
                        employeeType: response.data.data.employeeType,
                        salary: response.data.data.salary,
                        hiringDate: response.data.data.hiringDate,
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
                        <Card className='mt-2' style={{ minWidth: '50%', minHeight: "25vh" }}>
                            <CardHeader style={{ color: 'white', backgroundColor: 'black' }} className="d-flex justify-content-center">Staff Information</CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label>Employee ID</Label>
                                    <Input onChange={this.handleInputChange} name="employeeId" value={this.props.employeeId} type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Employee Type</Label>
                                    <Input onChange={this.handleInputChange} name="employeeType" value={this.state.employeeType} type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>First Name</Label>
                                    <Input onChange={this.handleInputChange} name="firstName" value={this.state.firstName} type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Middle Name</Label>
                                    <Input onChange={this.handleInputChange} name="middleName" value={this.state.middleName} type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Last Name</Label>
                                    <Input onChange={this.handleInputChange} name="lastName" value={this.state.lastName} type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Salary (per annum)</Label>
                                    <Input onChange={this.handleInputChange} name="salary" value={this.state.salary} type="number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Hiring Date</Label>
                                    <Input onChange={this.handleInputChange} name="hiringDate" value={this.state.hiringDate} type="date" />
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <p className="d-flex justify-content-center text-success">{this.state.msg}</p>
                                <div className="d-flex justify-content-center">
                                    <Button onClick={this.handleSubmit} color="primary">Save</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}


export default EditEmployee;
