import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './Cart.css'

class Cart extends React.Component {


    render() {

        let total = Object.values(this.props.cart).reduce((accumulator, product) => {
            return accumulator + product;
        }, 0)


        return (

            <div>
                <h4 className='center'>Cart</h4>
                {this.props.cartSize ? (
                    <div>
                        <Table className='center_div'>
                            <thead>
                                <tr>
                                    <th>Products Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    Object.entries(this.props.cart).map(product => {
                                        return (<tr key={product[0]}>
                                            <td>{product[0]} <Button variant="danger" size="sm"
                                                className="float-right" onClick={() => this.props.cartHandler(product[0], product[1])} >Remove</Button></td>
                                            <td>BDT {product[1]}</td>
                                        </tr>)
                                    })
                                }

                                <tr>
                                    <th>Total</th>
                                    <td>BDT {total}</td>
                                </tr>

                            </tbody>

                        </Table>
                        <br></br>
                        <div className="center_div"> <Button variant="info" onClick={() => this.props.onRouteChange('payment')}>Proceed to buy </Button> </div>
                    </div>

                ) : (
                        <h4 className='center'> You have no items in your cart</h4>
                    )
                }

            </div>
        )
    }
}


export default Cart;