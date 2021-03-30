import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';

class Products extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-4.5" style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <table style={{ width: '100%' }}>
                            <tr>
                                <th><div className="d-flex justify-content-center">Delete</div></th>
                                <th><div className="d-flex justify-content-center">Product Name</div></th>
                                <th><div className="d-flex justify-content-center">Brand Name</div></th>
                                <th><div className="d-flex justify-content-center">Color</div></th>
                                <th><div className="d-flex justify-content-center">Price</div></th>
                                <th><div className="d-flex justify-content-center">Stock</div></th>
                                <th><div className="d-flex justify-content-center">Edit</div></th>
                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input className="mt-1" type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">OnePlus 8</div></td>
                                <td><div className="d-flex justify-content-center">OnePlus</div></td>
                                <td><div className="d-flex justify-content-center">Mirror Gray</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 32999</div></td>
                                <td><div className="d-flex justify-content-center">100</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>
                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input className="mt-1" type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">OnePlus 8</div></td>
                                <td><div className="d-flex justify-content-center">OnePlus</div></td>
                                <td><div className="d-flex justify-content-center">Mirror Gray</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 32999</div></td>
                                <td><div className="d-flex justify-content-center">100</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>

                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input className="mt-1" type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">OnePlus 8</div></td>
                                <td><div className="d-flex justify-content-center">OnePlus</div></td>
                                <td><div className="d-flex justify-content-center">Mirror Gray</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 32999</div></td>
                                <td><div className="d-flex justify-content-center">100</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>

                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input className="mt-1" type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">OnePlus 8</div></td>
                                <td><div className="d-flex justify-content-center">OnePlus</div></td>
                                <td><div className="d-flex justify-content-center">Mirror Gray</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 32999</div></td>
                                <td><div className="d-flex justify-content-center">100</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>

                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input className="mt-1" type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">OnePlus 8</div></td>
                                <td><div className="d-flex justify-content-center">OnePlus</div></td>
                                <td><div className="d-flex justify-content-center">Mirror Gray</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 32999</div></td>
                                <td><div className="d-flex justify-content-center">100</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>

                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input className="mt-1" type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">OnePlus 8</div></td>
                                <td><div className="d-flex justify-content-center">OnePlus</div></td>
                                <td><div className="d-flex justify-content-center">Mirror Gray</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 32999</div></td>
                                <td><div className="d-flex justify-content-center">100</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>

                            </tr>
                            <tr>
                                <div className="d-flex justify-content-center"><input className="mt-1" type="checkbox" /></div>
                                <td><div className="d-flex justify-content-center">OnePlus 8</div></td>
                                <td><div className="d-flex justify-content-center">OnePlus</div></td>
                                <td><div className="d-flex justify-content-center">Mirror Gray</div></td>
                                <td><div className="d-flex justify-content-center">&#x20B9; 32999</div></td>
                                <td><div className="d-flex justify-content-center">100</div></td>
                                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>

                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
