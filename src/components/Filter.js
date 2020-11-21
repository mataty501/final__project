import React, { useState } from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaSearch, FaHeart, FaShoppingBag, FaUserAlt } from 'react-icons/fa';
import Avatar from '@material-ui/core/Avatar/Avatar';

import { useDispatch } from 'react-redux';
import { SEARCH } from '../Redux/Actions/actions'
import User from './sub-components/User';
import Fav from './sub-components/Fav';
import Shop from './sub-components/Shop';
import Data from '../data/data.json'
import { useSelector } from 'react-redux'
const Filter = () => {
    const [search, setSearch] = useState("");

    const [filtredData, setFiltredData] = useState(Data);
    const fav_list = useSelector(state => state.Fav.fav.length)
    const cart_list = useSelector(state => state.Add.cart.length)

    const [show, setShow] = useState(false);
    const handleClose = (e) => { e.stopPropagation(); setShow(false); console.log("close") }
    const handleShow = (e) => { e.stopPropagation(); setShow(true); console.log("show") }
    const closePopup = () => { setShow(false); console.log("pop") }

    const [show_fav, setShow_fav] = useState(false);
    const handleClose_fav = (e) => { e.stopPropagation(); setShow_fav(false); console.log("close") }
    const handleShow_fav = (e) => { e.stopPropagation(); setShow_fav(true); console.log("show") }
    const closePopup_fav = () => { setShow_fav(false); console.log("pop") }

    const [show_shop, setShow_shop] = useState(false);
    const handleClose_shop = (e) => { e.stopPropagation(); setShow_shop(false); console.log("close") }
    const handleShow_shop = (e) => { e.stopPropagation(); setShow_shop(true); console.log("show") }
    const closePopup_shop = () => { setShow_shop(false); console.log("pop") }

    const dispatch = useDispatch();

    const handleSearch = () => {

        dispatch({
            type: SEARCH,
            payload: { search: search }
        })
    }
    return (


        <Navbar onScroll={() => alert('hi')} sticky="top" className="nav_filter sticky" collapseOnSelect expand="lg" bg="white" variant="black"  >
            <Navbar.Brand href="#home"><img className="logo" src="/images/logo.png" /></Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <div className="search__container">
                <Form.Control onChange={(e) => setSearch(e.target.value)} className="search" size="lg" type="text" placeholder="Search for an item..." />
                <FaSearch onClick={() => handleSearch()} />
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>

                <Nav className="nav-filter">
                    <Nav.Link href="#deets">
                        <User className="user" show={show}
                            close={handleClose}
                            closePopup={closePopup}
                        />
                        <FaUserAlt onClick={(e) => handleShow(e)} />
                    </Nav.Link>

                    {/*
                    <Nav.Link href="#deets">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Nav.Link>
                    */}

                    <Nav.Link href="#deets">
                        <Fav show={show_fav}
                            close={handleClose_fav}
                            closePopup={closePopup_fav}
                        />
                        <div><FaHeart onClick={(e) => handleShow_fav(e)} />{fav_list}</div>
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        <Shop show={show_shop}
                            close={handleClose_shop}
                            closePopup={closePopup_shop}
                        />
                        <div><FaShoppingBag onClick={(e) => handleShow_shop(e)} />{cart_list}</div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Filter
