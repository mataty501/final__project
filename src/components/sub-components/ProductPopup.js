import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Caroussel from "./Caroussel";
import axios from "axios";

const ProductPopup = (props) => {
  const [ordered, setOrdered] = useState(false);

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  const setPropertyOnPopup = () => {
    //call this function to
  };

  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();

  const order = async (e) => {
    e.preventDefault();
    const data = {
      productID: props.id,
      name: name,
      address: address,
      phoneNumber: number,
    };
    const response = await axios.post("http://localhost:5000/makeOrder", data);
    if (response) {
      setOrdered(!ordered)
    }
  };
  return (
    <div className="product-popup" onClick={(e) => e.stopPropagation()}>
      <div>
        <Modal
          contentClassName="modal-90w modal-dialog-w90"
          show={props.show}
          onClick={(e) => e.stopPropagation()}
          onHide={() => props.closePopup()}
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="product-body">
            <div className="product-body-carousel-description">
              <Caroussel id={props.id} urlArray={props.urlArray} />

            </div>

            {!ordered &&
              <div className="product-body-purchase">

                <p>{props.description}</p>

                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Complete name:</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type="text"
                      placeholder="Enter your complete name"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Ligne d'adresse:</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      type="text"
                      placeholder="Enter your address"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone number:</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        setNumber(e.target.value);
                      }}
                      type="text"
                      placeholder="Enter your phone number"
                    />
                  </Form.Group>
                  <Button
                    onClick={(e) => order(e)}
                    variant="primary"
                    type="submit"
                  >
                    Order !
                </Button>
                </Form></div>}
            {ordered && <div className="order-success">
              <div>Product ordered !</div>

              <img src="/images/product/valid.png" />

            </div>}

          </Modal.Body>
        </Modal>
      </div>
    </div >
  );
};

export default ProductPopup;
