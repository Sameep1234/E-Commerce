import React, { Component, useState } from 'react';
import { Redirect } from 'react-router';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import axios from 'axios';


// RENDER PRODUCT LIST FUNCTIONAL COMPONENT
function ProductList({ result }) {

    const [redirectVar, changeRV] = useState(false);

    let renderList = result.map((pl) => {

        if (!redirectVar) {
            return (
                <tr>
                    <div className="d-flex justify-content-center"><span id={pl.productId} className="fa fa-trash" onClick={() => { axios.get('http://localhost:5000/deleteProduct', { headers: { productId: pl.productId } }) }} role="button" /></div>
                    <td><div className="d-flex justify-content-center">{pl.productName}</div></td>
                    <td><div className="d-flex justify-content-center">{pl.categoryName}</div></td>
                    <td><div className="d-flex justify-content-center">{pl.subCategoryName}</div></td>
                    <td><div className="d-flex justify-content-center">{pl.brandName}</div></td>
                    <td><div className="d-flex justify-content-center">{pl.price}</div></td>
                    <td><div className="d-flex justify-content-center">{pl.quantity}</div></td>
                    <td><div className="d-flex justify-content-center"><span id={pl.productId} className="fa fa-pencil" onClick={() => { changeRV(true) }} role="button" /></div></td>
                </tr>
            );
        }
        else {
            // alert('HERE');
            return (
                <Redirect to={`/edit-product/${pl.productId}`} />
            )
        }

    });

    return (renderList);

}

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
            msg: '',
        }
    }

    // FETCH RECORD AS SOON AS PAGE LOADS
    componentDidMount() {
        axios.get('http://localhost:5000/productList')
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
                                    <th><div className="d-flex justify-content-center">Product Name</div></th>
                                    <th><div className="d-flex justify-content-center">Category Name</div></th>
                                    <th><div className="d-flex justify-content-center">Sub-Category Name</div></th>
                                    <th><div className="d-flex justify-content-center">Brand Name</div></th>
                                    <th><div className="d-flex justify-content-center">Price</div></th>
                                    <th><div className="d-flex justify-content-center">Quantity</div></th>
                                    <th><div className="d-flex justify-content-center">Edit</div></th>
                                </tr>
                                <ProductList result={this.state.result} />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
