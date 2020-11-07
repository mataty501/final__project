import React, {useState} from 'react';
import {Nav, Navbar, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaSearch, FaHeart, FaShoppingBag} from 'react-icons/fa';

const Filter = () => {
    const [search, setSearch] = useState("");
    
    const handleSearch = (e) => {
        alert(e)
    }
    return (
        <div>
            <Navbar className="nav_filter" collapseOnSelect expand="lg" sticky="top" bg="white" variant="black"  >
                <div className="search__container">
                    <Form.Control onChange={(e) => setSearch(e.target.value)} className="search" size="lg" type="text" placeholder="Search for an item..." />
                    <FaSearch onClick={() => handleSearch(search)}/>
                </div>
            </Navbar>
        </div>
    )
}

export default Filter
