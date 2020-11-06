import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap'
import New from './New'
import ProductPopup from './ProductPopup'


const Product = () => {
    const [show, setShow] = useState(false);

    const handleClose = (e) => {e.stopPropagation(); setShow(false); console.log("close")}
    const handleShow = (e) => {e.stopPropagation();setShow(true); console.log("show")}
    const closePopup = () => { setShow(false); console.log("pop")}
    return (
        <Card onClick={(e)=> handleShow(e)} className="product" style={{ width: '18rem' }} >  
        
        <New/>
        <Card.Img variant="top" src="/images/products/p1.jpg"/>
        <Card.Body>
        
            <Card.Title>Card Title </Card.Title>

            <div>150€</div>

            <div className="product-popup">
            <ProductPopup 
                show={show} 
                close={handleClose} 
                closePopup={closePopup}
                /> 
            </div>
        </Card.Body>
        
</Card>
    )
}

export default Product
