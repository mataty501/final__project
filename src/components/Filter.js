import React from 'react';
import {Nav, Navbar, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaSearch, FaHeart, FaShoppingBag} from 'react-icons/fa';

const Filter = () => {
    return (
        <div>
            <Navbar className="nav_filter" collapseOnSelect expand="lg" sticky="top" bg="white" variant="black"  >
                <div className="search__container">
                    <Form.Control className="search" size="lg" type="text" placeholder="Search for an item..." /><FaSearch/>
                </div>
            </Navbar>
        </div>
    )
}

export default Filter
