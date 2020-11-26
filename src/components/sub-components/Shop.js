import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

import { Table } from "react-bootstrap";
import { FaTrashAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const Shop = (props) => {

  const cart_list = useSelector(state => state.Add.cart)
  return (
    <div>


      <Modal className="modal_subscribe" show={props.show} onClick={(e) => e.stopPropagation()} onHide={() => props.closePopup()}>
        <Modal.Header closeButton>
          <Modal.Title>Shop Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>

                <th>Product name</th>
                <th className="delete-trash-container">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart_list.map((e) => {

                return (
                  <tr>

                    <td>{e.name}</td>
                    <th className="delete-trash-container"><FaTrashAlt className="delete-trash" /></th>

                  </tr>)
              })}

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
