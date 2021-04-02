import React, { Component, useState } from 'react';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import { Card, CardHeader, CardBody, Button, CardFooter } from 'reactstrap';
import axios from 'axios';
import OrderWithId from './OrderWithId';

// FUNCTIONAL COMPONENT
function OrderList({ result }) {
    const [redirectVar, changeRedirectVar] = useState(false);
    const [id, saveId] = useState(0);

    function getOrder(id){
        saveId(id);
        changeRedirectVar(true);
    }

    let renderOrder = result.map((ol) => {
        <div style={{ maxHeight: '35vh' }} className="mt-3 d-flex justify-content-center">
            <div style={{ maxHeight: '35vh' }} className="mt-3 d-flex justify-content-center">
                <Card className="col-md-8">
                    <CardHeader className="row">
                        <div className="col">
                            <p className="row">ORDER PLACED</p>
                            <p className="row"> 18 October 2019</p>
                        </div>
                        <div className="col">
                            <p className="row">TOTAL</p>
                            <p className="row"> Rs 1,199.00</p>
                        </div>
                        <div className="col">
                            <p className="row">SHIP TO</p>
                            <p className="row">Sameep Vani</p>
                        </div>
                    </CardHeader>
                    <CardBody>
                        SOME DESCRIPTION
                </CardBody>
                    <CardFooter className='row'>
                        <Button color="primary" className="mx-auto stretched-link" onClick={getOrder(3)}>View Details</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    });
    if(redirectVar){
        return(
            <OrderWithId orderId={id}/>
        )
    }
    return (renderOrder);
}

// CLASS COMPONENT
class Orders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: '',
            result: [],
        }
    }

    // FETCH FROM DB AS PAGE LOADS
    componentDidMount() {
        axios.get('http://localhost:5000/orderList?id')
            .then((response) => {
                if (response.data.status === 1) {
                    this.setState({
                        result: this.data.data,
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
                    <div style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    <div style={{ minWidth: '75%' }}>
                        <div className="mt-3 d-flex justify-content-center">
                            Showing Orders of:<br />
                            <div className="ml-2">
                                <select name="year" id="year" onBlur={this.handleInputChange}>
                                    <option value="allYear">All Years</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>
                                <a role="button" className="ml-2 text-decoration-none">Go</a>
                            </div>
                        </div>
                        <OrderList result={this.state.result} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Orders;
