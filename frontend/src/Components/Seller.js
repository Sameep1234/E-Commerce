import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

class Cart extends Component {
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
                                <th><div className="d-flex justify-content-center">Seller ID</div></th>
                                <th><div className="d-flex justify-content-center">First Name</div></th>
                                <th><div className="d-flex justify-content-center">Middle Name</div></th>
                                <th><div className="d-flex justify-content-center">Last Name</div></th>
                                <th><div className="d-flex justify-content-center">Email</div></th>
                                <th><div className="d-flex justify-content-center">Contact No.</div></th>
                                <th><div className="d-flex justify-content-center">GST Number</div></th>
                            </tr>
                            <tr>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">sameep.v@ahduni.edu.in</div></td>
                                <td><div className="d-flex justify-content-center">9998887776</div></td>
                                <td><div className="d-flex justify-content-center">1234567891</div></td>
                            </tr>
                            <tr>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">sameep.v@ahduni.edu.in</div></td>
                                <td><div className="d-flex justify-content-center">9998887776</div></td>
                                <td><div className="d-flex justify-content-center">1234567891</div></td>
                            </tr>
                            <tr>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">sameep.v@ahduni.edu.in</div></td>
                                <td><div className="d-flex justify-content-center">9998887776</div></td>
                                <td><div className="d-flex justify-content-center">1234567891</div></td>
                            </tr>
                            <tr>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">sameep.v@ahduni.edu.in</div></td>
                                <td><div className="d-flex justify-content-center">9998887776</div></td>
                                <td><div className="d-flex justify-content-center">1234567891</div></td>
                            </tr>
                            <tr>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">sameep.v@ahduni.edu.in</div></td>
                                <td><div className="d-flex justify-content-center">9998887776</div></td>
                                <td><div className="d-flex justify-content-center">1234567891</div></td>
                            </tr>
                            <tr>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">sameep.v@ahduni.edu.in</div></td>
                                <td><div className="d-flex justify-content-center">9998887776</div></td>
                                <td><div className="d-flex justify-content-center">1234567891</div></td>
                            </tr>
                            <tr>
                                <td><div className="d-flex justify-content-center">SE101</div></td>
                                <td><div className="d-flex justify-content-center">Sameep</div></td>
                                <td><div className="d-flex justify-content-center">Nilesh</div></td>
                                <td><div className="d-flex justify-content-center">Vani</div></td>
                                <td><div className="d-flex justify-content-center">sameep.v@ahduni.edu.in</div></td>
                                <td><div className="d-flex justify-content-center">9998887776</div></td>
                                <td><div className="d-flex justify-content-center">1234567891</div></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
