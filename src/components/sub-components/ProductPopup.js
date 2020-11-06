import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import Carousel from './Caroussel';

const ProductPopup = (props) => {
    //const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
    const setPropertyOnPopup = () => {
      //call this function to 
    }
    return (
        
        
  <div className="product-popup" onClick={(e)=> e.stopPropagation()}>
    <div >
        <Modal contentClassName="modal-90w modal-dialog-w90" show={props.show}  onClick={(e)=> e.stopPropagation()} onHide={()=>props.closePopup()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body className="product-body">
      
          <div className="product-body-carousel-description">
            <Carousel/>   
            <div>aaa</div>
          </div>

            <div className="product-body-purchase">
              <p>Lorem Ipsum, giving information on its origins, as well as a random Lipsum Lorem Ipsum, 
                giving information on its origins, as well as a random Lipsum Lorem Ipsum, 
                giving information on its origins, as well as a random Lipsum</p> 
              
            <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your complete name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Ligne d'adresse</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>2eme ligne d'adresse</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              </div>   

             
          

          </Modal.Body>
          <Modal.Footer>
            
            <Button variant="secondary" onClick={(e)=>props.close(e)}>
              Close 
            </Button>
            
          </Modal.Footer>
        </Modal>
      </div>
     
    </div>
    )
}

export default ProductPopup
