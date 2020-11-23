import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import Carousel from './Caroussel';
import axios from 'axios';

const ProductPopup = (props) => {
  //const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  const setPropertyOnPopup = () => {
    //call this function to 
  }

  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();

  const order = async (e) => {
    e.preventDefault()
    const data = {

      name: name,
      address: address,
      phoneNumber: number
    };
    const response = await axios.post('http://localhost:5000/makeOrder', data)
    console.log(response)
  }
  return (


    <div className="product-popup" onClick={(e) => e.stopPropagation()}>
      <div >
        <Modal contentClassName="modal-90w modal-dialog-w90" show={props.show} onClick={(e) => e.stopPropagation()} onHide={() => props.closePopup()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body className="product-body">

            <div className="product-body-carousel-description">
              <Carousel />
              <div>aaa</div>
            </div>

            <div className="product-body-purchase">
              <p>Lorem Ipsum, giving information on its origins, as well as a random Lipsum Lorem Ipsum,
              giving information on its origins, as well as a random Lipsum Lorem Ipsum,
                giving information on its origins, as well as a random Lipsum</p>

              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Complete name:</Form.Label>
                  <Form.Control onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Enter your complete name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Ligne d'adresse:</Form.Label>
                  <Form.Control onChange={(e) => { setAddress(e.target.value) }} type="text" placeholder="Enter your address" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Phone number:</Form.Label>
                  <Form.Control onChange={(e) => { setNumber(e.target.value) }} type="text" placeholder="Enter your phone number" />
                </Form.Group>
                <Button onClick={(e) => order(e)} variant="primary" type="submit">
                  Order !
                </Button>
              </Form>
            </div>

          </Modal.Body>

        </Modal>
      </div>

    </div>
  )
}

export default ProductPopup
