import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

import { Table } from "react-bootstrap";
import { FaTrashAlt } from 'react-icons/fa';
const Shop = (props) => {

  return (
    <div>


      <Modal className="modal_subscribe" show={props.show} onClick={(e) => e.stopPropagation()} onHide={() => props.closePopup()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Product name</th>
                <th className="delete-trash-container">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <th className="delete-trash-container"><FaTrashAlt className="delete-trash" /></th>

              </tr>

            </tbody>
          </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => props.close(e)}>
            Close
                    </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

}

export default Shop
