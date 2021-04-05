import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import axios from 'axios';


// RENDER PRODUCT LIST FUNCTIONAL COMPONENT
function ProductList({ result }) {
    let renderList = result.map((pl) => {

        return (
            <tr>
                <div className="d-flex justify-content-center"><span className="fa fa-trash" role="button" /></div>
                <td><div className="d-flex justify-content-center">{pl.productName}</div></td>
                <td><div className="d-flex justify-content-center">{pl.categoryName}</div></td>
                <td><div className="d-flex justify-content-center">{pl.subCategoryName}</div></td>
                <td><div className="d-flex justify-content-center">{pl.brandName}</div></td>
                <td><div className="d-flex justify-content-center">{pl.price}</div></td>
                <td><div className="d-flex justify-content-center">{pl.quantity}</div></td>
                <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>
            </tr>
        );
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
                    <div style={{width: "82vw"}}>
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
