import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

const User = (props) => {

    return (
<div>
                
          
                <Modal className="modal_subscribe" show={props.show}  onClick={(e)=> e.stopPropagation()} onHide={()=>props.closePopup()}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={(e)=>props.close(e)}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                </div>
            );
          
}

export default User
