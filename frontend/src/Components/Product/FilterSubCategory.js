import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Button } from 'reactstrap';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import axios from 'axios';

class SubCategoryWiseList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let renderList = this.props.result.map((fc) => {
            if (Array.isArray(fc)) {
                if (fc.length > 0) {
                    let loop2 = fc.map((lfc) => {
                        return (
                            <tr>
                                <td><div className="d-flex justify-content-center">{lfc.productName}</div></td>
                                <td><div className="d-flex justify-content-center">{lfc.categoryName}</div></td>
                                <td><div className="d-flex justify-content-center">{lfc.subCategoryName}</div></td>
                                <td><div className="d-flex justify-content-center">{lfc.brandName}</div></td>
                                <td><div className="d-flex justify-content-center">{lfc.price}</div></td>
                                <td><div className="d-flex justify-content-center">{lfc.quantity}</div></td>
                            </tr>
                        );
                    })
                    return (loop2);
                }

            }
        });

        return (renderList);
    }
}


class FilterSubCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
            msg: '',
            brandFilter: false,
            categoryFilter: false,
            subCategoryFilter: false,
        }

        this.filterBrands = this.filterBrands.bind(this);
        this.filterCategory = this.filterCategory.bind(this);
        this.filterSubCategory = this.filterSubCategory.bind(this);
    }

    filterBrands() {
        this.setState({
            brandFilter: true,
        });
    }

    filterCategory() {
        this.setState({
            categoryFilter: true,
        });
    }

    filterSubCategory() {
        this.setState({
            subCategoryFilter: true,
        });
    }

    componentDidMount() {
        axios.get('http://localhost:5000/subcategoryWiseProd')
            .then((response) => {
                this.setState({
                    msg: response.data.msg,
                })
                if (response.data.status) {
                    this.setState({
                        result: response.data.data,
                    })
                }
            })
            .catch((err) => {
                this.setState({
                    msg: err,
                });
            })
    }

    render() {
        if (this.state.brandFilter) {
            return (
                <Redirect to="/product-list/filter-brand" />
            );
        }

        else if (this.state.categoryFilter) {
            return (
                <Redirect to="/product-list/filter-category" />
            );
        }

        else if (this.state.subCategoryFilter) {
            return (
                <Redirect to="/product-list/filter-subCategory" />
            );
        }

        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-4.5" style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    <div style={{ width: "82vw" }}>
                        <div className="mt-2 d-flex">
                            <Button className="mx-auto" color="primary" onClick={this.filterBrands}>
                                Filter By Brands
                            </Button>
                            <Button className="mx-auto" color="primary" onClick={this.filterCategory}>
                                Filter By Category
                            </Button>
                            <Button className="mx-auto" color="primary" onClick={this.filterSubCategory}>
                                Filter By Sub Category
                            </Button>
                        </div>
                        <div className="m-5">
                            <table style={{ width: '100%' }}>
                                <tr>
                                    {/* <th><div className="d-flex justify-content-center">Delete</div></th> */}
                                    <th><div className="d-flex justify-content-center">Product Name</div></th>
                                    <th><div className="d-flex justify-content-center">Category Name</div></th>
                                    <th><div className="d-flex justify-content-center">Sub-Category Name</div></th>
                                    <th><div className="d-flex justify-content-center">Brand Name</div></th>
                                    <th><div className="d-flex justify-content-center">Price</div></th>
                                    <th><div className="d-flex justify-content-center">Quantity</div></th>
                                    {/* <th><div className="d-flex justify-content-center">Edit</div></th> */}
                                </tr>
                                <SubCategoryWiseList result={this.state.result} />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterSubCategory;
