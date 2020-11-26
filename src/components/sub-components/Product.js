import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import New from './New';
import ProductPopup from './ProductPopup';
import { FaHeart, FaCartArrowDown } from 'react-icons/fa';
import { ADD_CART, REMOVE_CART, ADD_FAV, REMOVE_FAV } from '../../Redux/Actions/actions';

const Product = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = (e) => { e.stopPropagation(); setShow(false); }
    const handleShow = (e) => { e.stopPropagation(); setShow(true); }
    const closePopup = () => { setShow(false); }
    const [activeClassFav, setActiveClassFav] = useState(true);
    const [activeClassCart, setActiveClassCart] = useState(true);



    const dispatch = useDispatch();
    const redux_fav = () => {
        if (activeClassFav)
            dispatch({
                type: ADD_FAV,
                payload: { id: props.id, name: props.title }
            })
        else
            dispatch({
                type: REMOVE_FAV,
                payload: { id: props.id, name: props.title }
            })
    }

    const redux_cart = () => {
        if (activeClassCart)
            dispatch({
                type: ADD_CART,
                payload: { id: props.id, name: props.title }
            })
        else
            dispatch({
                type: REMOVE_CART,
                payload: { id: props.id, name: props.title }
            })
    }

    return (

        <Card onClick={(e) => handleShow(e)} className="product" style={{ width: '17.8rem', height: '28rem' }} >

            {props.new && <div><New /></div>}
            {props.image && <Card.Img variant="top" src={`https://fastshop-server.herokuapp.com/images/${props.image}`} />}
            <Card.Body>
                <div className="card-body-func">
                    <div>
                        <Card.Title>{props.title}</Card.Title>
                        <div>{props.price}<span>€</span></div>
                    </div>
                    <div>
                        <div className="product-options" >
                            <FaHeart className={activeClassFav ? "none-active-fav" : "active-fav"} onClick={(e) => {
                                e.stopPropagation();
                                setActiveClassFav(!activeClassFav);
                                redux_fav();

                            }} />
                            <FaCartArrowDown className={activeClassCart ? "none-active-cart" : "active-cart"} onClick={(e) => {
                                e.stopPropagation()
                                setActiveClassCart(!activeClassCart);
                                redux_cart();
                            }} />
                        </div>
                        <div className="product-popup">
                            <ProductPopup
                                id={props.id}
                                title={props.title}
                                urlArray={props.urlArray}
                                description={props.description}
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
