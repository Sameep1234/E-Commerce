import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import axios from 'axios';

class AddStaff extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: '',
            employeeId: '',
            employeeType: '',
            firstName: '',
            middleName: '',
            lastName: '',
            salary: '',
            hiringDate: '',
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
            employeeId: this.state.employeeId,
            employeeName: this.state.employeeName,
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            salary: this.state.salary,
            hiringDate: this.state.hiringDate,
        }

        axios.post('http://localhost:5000/addEmployee', data)
            .then((response) => {
                if(response.data.status === 1) {
                    this.setState({
                        msg: 'Successfully added employee',
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
                        <Card className='mt-2' style={{ minWidth: '50%', minHeight: "25vh" }}>
                            <CardHeader style={{ color: 'white', backgroundColor: 'black' }} className="d-flex justify-content-center">Staff Information</CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label>Employee ID</Label>
                                    <Input onChange={this.handleInputChange} name="employeeId" placeholder="Ex. SE101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Employee Type</Label>
                                    <Input onChange={this.handleInputChange} name="employeeType" placeholder="Ex. Software Engineer" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>First Name</Label>
                                    <Input onChange={this.handleInputChange} name="firstName" placeholder="Ex. Josh" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Middle Name</Label>
                                    <Input onChange={this.handleInputChange} name="middleName" placeholder="Ex. Mulien" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Last Name</Label>
                                    <Input onChange={this.handleInputChange} name="lastName" placeholder="Ex. Smith" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Salary (per annum)</Label>
                                    <Input onChange={this.handleInputChange} name="salary" placeholder="Ex. 1500000" type="number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Hiring Date</Label>
                                    <Input onChange={this.handleInputChange} name="hiringDate" type="date" />
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <p className="d-flex justify-content-center text-success">{this.state.msg}</p>
                                <div className="d-flex justify-content-center">
                                    <Button onClick={this.handleSubmit} color="primary">Add Employee</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>


        );
    }
}

export default AddStaff;



/*
<div className="col ml-5 mt-5 mr-5 ">
                        <div className="row d-flex justify-content-center">
                            <table style={{ width: "100%" }}>
                                <tr>
                                    <th><div className="d-flex justify-content-center">First Name</div></th>
                                    <th><div className="d-flex justify-content-center">Middle Name</div></th>
                                    <th><div className="d-flex justify-content-center">Last Name</div></th>
                                    <th><div className="d-flex justify-content-center">EmployeeId</div></th>
                                    <th><div className="d-flex justify-content-center">Salary</div></th>
                                    <th><div className="d-flex justify-content-center">EmployeeType</div></th>
                                    <th><div className="d-flex justify-content-center">Hiring Date</div></th>

                                </tr>
                                <tr>
                                    <td><div className="d-flex justify-content-center">First Name</div></td>
                                    <td><div className="d-flex justify-content-center">Middle Name</div></td>
                                    <td><div className="d-flex justify-content-center">Last Name</div></td>
                                    <td><div className="d-flex justify-content-center">EmployeeId</div></td>
                                    <td><div className="d-flex justify-content-center">Salary</div></td>
                                    <td><div className="d-flex justify-content-center">EmployeeType</div></td>
                                    <td><div className="d-flex justify-content-center">Hiring Date</div></td>

                                </tr>
                                <tr>

                                </tr>
                            </table>
                            <div>

                            </div>
                        </div>

                        <div className="row  mt 50 " >
                            <button type="button" class="btn btn-success">Add</button>

                        </div>

                    </div>
 */
