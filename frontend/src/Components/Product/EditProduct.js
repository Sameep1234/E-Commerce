import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import axios from 'axios';

class EditProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productName: '',
            categoryId: '',
            subCategoryId: '',
            brandId: '',
            specificationId: '',
            color: '',
            price: 0,
            stock: 0,
            size: '',
            msg: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/getProduct', { headers: { productId: this.props.productId } })
            .then((response) => {
                this.setState({
                    msg: response.data.msg,
                });
                if (response.data.status === 1) {
                    this.setState({
                        productName: response.data.data.productName,
                        categoryId: response.data.data.categoryId,
                        subCategoryId: response.data.data.subCategoryId,
                        brandId: response.data.data.brandId,
                        specificationId: response.data.data.specificationId,
                        color: response.data.data.color,
                        price: response.data.data.price,
                        stock: response.data.data.stock,
                        size: response.data.data.size,
                        msg: response.data.data.productName,
                    });
                }
            })
            .catch((err) => {
                this.setState({
                    msg: err, 
                });
            })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProduct;
