import React from 'react';
import { Card, Button } from 'react-bootstrap';


class OrdersCard extends React.Component {



    cancelOrder = () => {

        let result = window.confirm('Are you sure you want to cancel.?');
        if (result) {
            fetch('https://backdoor.cyclic.app/orders/orderstatus', {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    date: this.props.date,
                    email: this.props.email,
                    status: 'Canceled',
                })

            }).then(res => res.json())
                .then(ords => {
                    this.props.refreshOrders();
                })

        }
    }

    render() {

        let d = new Date(this.props.date);
        return (
            <div>
                <Card>
                    <Card.Header><strong>Order placed: </strong> {d.toUTCString()}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <strong>Products:</strong> {this.props.products}
                        </Card.Text>
                        <Card.Text>
                            <strong>Price:</strong> ₹ {this.props.price}
                        </Card.Text>
                        <Card.Text>
                            <strong>Address:</strong> {this.props.address}
                        </Card.Text>
                        <Card.Text>
                            <strong>Status:</strong> {this.props.status}
                        </Card.Text>
                        <div>
                            {
                                this.props.status === "Canceled" || this.props.status === "Completed" ? (
                                    <div></div>
                                ) : (
                                        <Button variant="primary" size='sm' onClick={this.cancelOrder}>Cancel</Button>
                                    )
                            }
                        </div>
                    </Card.Body>
                </Card>
                <br />
            </div >
        )
    }
}

export default OrdersCard;
