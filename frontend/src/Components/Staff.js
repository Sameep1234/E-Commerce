import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

class Staff extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <table style={{ width: '100%' }}>
                            <tr>
                                <th><div className="d-flex justify-content-center">Delete</div></th>
                                <th><div className="d-flex justify-content-center">Staff ID</div></th>
                                <th><div className="d-flex justify-content-center">First Name</div></th>
                                <th><div className="d-flex justify-content-center">Middle Name</div></th>
                                <th><div className="d-flex justify-content-center">Last Name</div></th>
                                <th><div className="d-flex justify-content-center">Salary</div></th>
                                <th><div className="d-flex justify-content-center">Hiring Date</div></th>
                                <th><div className="d-flex justify-content-center">Edit</div></th>
                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 15000</div></td>
                                <td><div className="d-flex justify-content-center">12-03-2021</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>
                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 15000</div></td>
                                <td><div className="d-flex justify-content-center">12-03-2021</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>
                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 15000</div></td>
                                <td><div className="d-flex justify-content-center">12-03-2021</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>
                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 15000</div></td>
                                <td><div className="d-flex justify-content-center">12-03-2021</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>
                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 15000</div></td>
                                <td><div className="d-flex justify-content-center">12-03-2021</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>
                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 15000</div></td>
                                <td><div className="d-flex justify-content-center">12-03-2021</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>
                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 15000</div></td>
                                <td><div className="d-flex justify-content-center">12-03-2021</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div >
        );
    }
}

export default Staff;
