import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap'
import New from './New'
import ProductPopup from './ProductPopup'

const Product = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <Card className="product" style={{ width: '18rem' }} >  
        
        <New/>
        <Card.Img variant="top" src="/images/products/p1.jpg"/>
        <Card.Body>
        
            <Card.Title>Card Title </Card.Title>

            <div>150€</div>
            <ProductPopup/> 
        </Card.Body>
        
</Card>
    )
}

export default Product
