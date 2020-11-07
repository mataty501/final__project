import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import New from './New';
import ProductPopup from './ProductPopup';
import {FaHeart, FaCartArrowDown} from 'react-icons/fa';
import {ADD_ADD, ADD_FAV} from '../../Redux/Actions/actions';

const Product = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = (e) => {e.stopPropagation(); setShow(false); console.log("close")}
    const handleShow = (e) => {e.stopPropagation();setShow(true); console.log("show")}
    const closePopup = () => { setShow(false); console.log("pop")}

    const dispatch = useDispatch();
    const redux_fav = () => {
        dispatch({
            type: ADD_FAV,
            payload: {id: props.key, name: props.title}
        })
    }
    
    return (
        
        <Card onClick={(e)=> handleShow(e)} className="product" style={{ width: '18rem' }} >  
        {console.log(props.new)}
        {<div><New/></div> && props.new}
        <Card.Img variant="top" src={props.image}/>
        <Card.Body>
            <div className="card-body-func">
                <div>
                    <Card.Title>{props.title}</Card.Title>
                    <div>{props.price}</div>
                </div>
                <div>
                    <div className="product-options" >
                        <FaHeart onClick={(e)=>{
                            redux_fav();
                            e.stopPropagation();
                            }}/>
                        <FaCartArrowDown onClick={(e)=>{e.stopPropagation()}}/>
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
