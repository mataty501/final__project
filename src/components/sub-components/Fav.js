import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Table } from "react-bootstrap";
import { FaTrashAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Fav = (props) => {
  const fav_list = useSelector(state => state.Fav.fav)





  return (
    <div>
      <Modal className="modal_subscribe" show={props.show} onClick={(e) => e.stopPropagation()} onHide={() => props.closePopup()}>
        <Modal.Header closeButton>
          <Modal.Title>Favorite List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!!fav_list.length && (
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Product name</th>
                  <th className="delete-trash-container">Action</th>
                </tr>
              </thead>
              <tbody>
                {fav_list.map((e) => {
                  return (
                    <tr>
                      <td>{e.name}</td>
                      <th className="delete-trash-container">
                        <FaTrashAlt className="delete-trash" />
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
          {!!!fav_list.length && (
            <div className="fav-empty-msg">
              List of favorite product is currently empty
            </div>
          )}
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

export default Fav
