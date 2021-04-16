import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import axios from 'axios';


// RENDER PRODUCT LIST CLASS COMPONENT

class EmployeeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectVar: false,
            eid: '',
        }
    }

    render() {
        if (this.state.redirectVar) {
            return (
                <Redirect to={`/edit-employee/${this.state.eid}`} />
            )
        }

        let renderList = this.props.result.map((el) => {

                    return (
                        <tr>
                            <div className="d-flex justify-content-center"><span  onClick={() => { axios.get('http://localhost:5000/deleteEmployee', { headers: { employeeId: el.employeeId } }) }} role="button" className="fa fa-trash" /></div>
                            <td><div className="d-flex justify-content-center">{el.employeeId}</div></td>
                            <td><div className="d-flex justify-content-center">{el.employeeType}</div></td>
                            <td><div className="d-flex justify-content-center">{el.firstName}</div></td>
                            <td><div className="d-flex justify-content-center">{el.middleName}</div></td>
                            <td><div className="d-flex justify-content-center">{el.lastName}</div></td>
                            <td><div className="d-flex justify-content-center">{el.salary}</div></td>
                            <td><div className="d-flex justify-content-center">{el.hiringDate}</div></td>
                            <td><div className="d-flex justify-content-center"><span onClick={() => {this.setState({eid: el.employeeId, redirectVar: true})}} className="fa fa-pencil" role="button" /></div></td>
                        </tr>
                    );
                })

        return (renderList);
    }

}

class Employee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
            msg: '',
        }
    }

    // FETCH RECORD AS SOON AS PAGE LOADS
    componentDidMount() {
        axios.get('http://localhost:5000/employeeList')
            .then((response) => {
                if (response.data.status === 1) {
                    this.setState({
                        result: response.data.data,
                    });
                }
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
                    <div style={{ width: "82vw" }}>
                        <div className="m-5">
                            <table style={{ width: '100%' }}>
                                <tr>
                                    <th><div className="d-flex justify-content-center">Delete</div></th>
                                    <th><div className="d-flex justify-content-center">Employee ID</div></th>
                                    <th><div className="d-flex justify-content-center">Employee Type</div></th>
                                    <th><div className="d-flex justify-content-center">First Name</div></th>
                                    <th><div className="d-flex justify-content-center">Middle Name</div></th>
                                    <th><div className="d-flex justify-content-center">Last Name</div></th>
                                    <th><div className="d-flex justify-content-center">Salary</div></th>
                                    <th><div className="d-flex justify-content-center">Hiring Date</div></th>
                                    <th><div className="d-flex justify-content-center">Edit</div></th>
                                </tr>
                                <EmployeeList result={this.state.result} />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Employee;
