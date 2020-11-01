import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {FaSearch, FaHeart, FaShoppingBag, FaUserAlt} from 'react-icons/fa';
import Avatar from '@material-ui/core/Avatar/Avatar';

const NavContainer = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="white" variant="black">
        <Navbar.Brand href="#home"><img className="logo" src="/images/logo.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"> 
            <Nav.Link href="#features"></Nav.Link> 
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets"><FaUserAlt/></Nav.Link>
            <Nav.Link href="#deets">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Nav.Link>
            <Nav.Link href="#deets"><FaHeart/></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                <FaShoppingBag/>
            </Nav.Link> 
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavContainer
