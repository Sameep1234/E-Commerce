import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

class AddStaff extends Component {
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
                                    <Label>Staff ID</Label>
                                    <Input placeholder="Ex. SE101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Employee Type</Label>
                                    <Input placeholder="Ex. Software Engineer" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>First Name</Label>
                                    <Input placeholder="Ex. Josh" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Middle Name</Label>
                                    <Input placeholder="Ex. Mulien" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Last Name</Label>
                                    <Input placeholder="Ex. Smith" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Salary (per annum)</Label>
                                    <Input placeholder="Ex. 1500000" type="number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Hiring Date</Label>
                                    <Input type="date" />
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
