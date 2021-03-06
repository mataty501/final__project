import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import New from './New';
import ProductPopup from './ProductPopup';
import { FaHeart, FaCartArrowDown } from 'react-icons/fa';
import { ADD_CART, ADD_FAV } from '../../Redux/Actions/actions';

const Product = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = (e) => { e.stopPropagation(); setShow(false); console.log("close") }
    const handleShow = (e) => { e.stopPropagation(); setShow(true); console.log("show") }
    const closePopup = () => { setShow(false); console.log("pop") }

    const dispatch = useDispatch();
    const redux_fav = () => {
        dispatch({
            type: ADD_FAV,
            payload: { id: props.id, name: props.title }
        })
    }

    const redux_cart = () => {
        dispatch({
            type: ADD_CART,
            payload: { id: props.id, name: props.title }
        })
    }

    return (

        <Card onClick={(e) => handleShow(e)} className="product" style={{ width: '18rem' }} >

            {props.new && <div><New /></div>}
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <div className="card-body-func">
                    <div>
                        <Card.Title>{props.title}</Card.Title>
                        <div>{props.price}</div>
                    </div>
                    <div>
                        <div className="product-options" >
                            <FaHeart onClick={(e) => {
                                e.stopPropagation();
                                redux_fav();

                            }} />
                            <FaCartArrowDown onClick={(e) => {
                                e.stopPropagation()
                                redux_cart();
                            }} />
                        </div>
                        <div className="product-popup">
                            <ProductPopup
                                show={show}
                                close={handleClose}
                                closePopup={closePopup}
                            />
                        </div>

                    </div>
                </div>


            </Card.Body>

        </Card>
    )
}

export default Product
