import React, { useState } from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { SEARCH } from '../Redux/Actions/actions'

const Filter = () => {
    const [search, setSearch] = useState("");


    const dispatch = useDispatch();

    const handleSearch = () => {

        dispatch({
            type: SEARCH,
            payload: { search: search }
        })
    }
    return (
        <div>
            <Navbar className="nav_filter" collapseOnSelect expand="lg" sticky="top" bg="white" variant="black"  >
                <div className="search__container">
                    <Form.Control onChange={(e) => setSearch(e.target.value)} className="search" size="lg" type="text" placeholder="Search for an item..." />
                    <FaSearch onClick={() => handleSearch()} />
                </div>
            </Navbar>
        </div>
    )
}

export default Filter
