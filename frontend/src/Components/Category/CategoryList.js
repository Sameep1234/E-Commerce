import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import axios from 'axios';

// RENDER PRODUCT LIST CLASS COMPONENT
class CategoryDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectVar: false,
            cid: '',
        }
    }

    render() {
        if (this.state.redirectVar) {
            return (
                <Redirect to={`/edit-category/${this.state.cid}`} />
            )
        }

        let renderList = this.props.result.map((cl) => {
            return (
                <tr>
                    <div className="d-flex justify-content-center"><span onClick={() => { axios.get('http://localhost:5000/deleteCategory', { headers: { categoryId: cl.categoryId } }) }} role="button" className="fa fa-trash" /></div>
                    <td><div className="d-flex justify-content-center">{cl.categoryId}</div></td>
                    <td><div className="d-flex justify-content-center">{cl.categoryName}</div></td>
                    <td><div className="d-flex justify-content-center"><span onClick={() => {this.setState({cid: cl.categoryId, redirectVar: true})}} className="fa fa-pencil" role="button" /></div></td>
                </tr>
            );
        });

        return (renderList);
    }

}

class CategoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
            msg: '',
        }
    }

    // FETCH RECORD AS SOON AS PAGE LOADS
    componentDidMount() {
        axios.get('http://localhost:5000/categoryList')
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
                                    <th><div className="d-flex justify-content-center">Brand ID</div></th>
                                    <th><div className="d-flex justify-content-center">Brand Name</div></th>
                                    <th><div className="d-flex justify-content-center">Edit</div></th>
                                </tr>
                                <CategoryDetails result={this.state.result} />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryList;
