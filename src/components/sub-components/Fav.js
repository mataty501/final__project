import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

const Fav = (props) => {

    return (
<div>
                
          
                <Modal className="modal_subscribe" show={props.show}  onClick={(e)=> e.stopPropagation()} onHide={()=>props.closePopup()}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  fav
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

export default Fav
