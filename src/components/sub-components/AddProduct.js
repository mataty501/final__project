import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import instance_axios from '../userRequests'

const AddProduct = (props) => {
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const data = {
        title: title,

        price: price,
        description: description
    }

    const sendData = async (e) => {
        e.preventDefault()
        const response = await instance_axios.post('/addProduct', data)
        console.log(response)

    }
    return (
        <div>


            <Modal className="modal_subscribe" show={props.show} onClick={(e) => e.stopPropagation()} onHide={() => props.closePopup()}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="Enter a product title" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Image</Form.Label>
                            <Form.File

                                id="custom-file"
                                label="Custom file input"
                                custom
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder="Enter the product price" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={(e) => { setDescription(e.target.value) }} type="text" placeholder="Write down the product description" />
                        </Form.Group>



                        <Button onClick={(e) => { sendData(e) }} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
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

export default AddProduct
