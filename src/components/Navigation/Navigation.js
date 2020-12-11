import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


class Navigationbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            homeClass: "active",
            productClass: "",
            orderClass: "",
            contactClass: "",
            searchClass: "invisible",
            registerClass: "",
            signinClass: ""
        }
    }

    activeHome = () => {
        this.setState({
            homeClass: "active",
            productClass: "",
            orderClass: "",
            contactClass: "",
            searchClass: "invisible",
            registerClass: "",
            signinClass: ""
        })

    }
    activeProducts = () => {
        this.setState({
            homeClass: "",
            productClass: "active",
            orderClass: "",
            contactClass: "",
            searchClass: "",
            registerClass: "",
            signinClass: ""
        })

    }
    activeOrders = () => {
        this.setState({
            homeClass: "",
            productClass: "",
            orderClass: "active",
            contactClass: "",
            searchClass: "invisible",
            registerClass: "",
            signinClass: ""
        })

    }
    activeContact = () => {
        this.setState({
            homeClass: "",
            productClass: "",
            orderClass: "",
            contactClass: "active",
            searchClass: "invisible",
            registerClass: "",
            signinClass: ""
        })

    }
    activeRegister = () => {
        this.setState({
            homeClass: "",
            productClass: "",
            orderClass: "",
            contactClass: "",
            searchClass: "invisible",
            registerClass: "active",
            signinClass: ""
        })

    }
    activeSignin = () => {
        this.setState({
            homeClass: "",
            productClass: "",
            orderClass: "",
            contactClass: "",
            searchClass: "invisible",
            registerClass: "",
            signinClass: "active"
        })

    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand >eCommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => { this.props.onRouteChange('home'); this.activeHome() }} className={this.state.homeClass}>Home</Nav.Link>
                        <Nav.Link onClick={() => { this.props.onRouteChange('products'); this.activeProducts() }} className={this.state.productClass}>Products</Nav.Link>
                        <Nav.Link onClick={() => { this.props.onRouteChange('orders'); this.activeOrders() }} className={this.state.orderClass}>Your orders</Nav.Link>
                        <Nav.Link onClick={() => { this.props.onRouteChange('contact'); this.activeContact() }} className={this.state.contactClass}>Contact</Nav.Link>
                    </Nav>
                    <Form inline className={this.state.searchClass}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="mr">
                        <Nav.Link className={this.state.registerClass} onClick={() => { this.props.onRouteChange('register'); this.activeRegister() }}>Register</Nav.Link>
                        <Nav.Link className={this.state.signinClass} onClick={() => { this.props.onRouteChange('signin'); this.activeSignin() }}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}



export default Navigationbar;