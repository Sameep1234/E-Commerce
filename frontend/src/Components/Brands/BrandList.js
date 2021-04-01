import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import axios from 'axios';


// RENDER PRODUCT LIST FUNCTIONAL COMPONENT
function BrandDetails({ result }) {
    let renderList = result.map((bd) => {
        <tr>
            <div className="d-flex justify-content-center"><input className="mt-1" type="checkbox" /></div>
            <td><div className="d-flex justify-content-center">{bd}</div></td>
            <td><div className="d-flex justify-content-center"><span className="fa fa-pencil" role="button" /></div></td>
        </tr>
    })
    return (
        <div className="col d-flex justify-content-center align-items-center">
            <table style={{ width: '100%' }}>
                {renderList}
            </table>
        </div>
    );
}

class BrandList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
            msg: '',
        }
    }

    // FETCH RECORD AS SOON AS PAGE LOADS
    componentDidMount() {
        axios.get('http://localhost:5000/brandList')
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
        let display = <BrandDetails result={this.state.result} />
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-4.5" style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    {display}
                </div>
            </div>
        );
    }
}

export default BrandList;
