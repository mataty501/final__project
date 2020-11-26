import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import instance_axios from '../userRequests';
import { useSelector } from 'react-redux';
import { MDBInput } from 'mdbreact';
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons';

const AddProduct = (props) => {
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();
    const [price, setPrice] = useState();
    const [newProduct, setNewProduct] = useState(false);
    const [description, setDescription] = useState();
    const [gender, setGender] = useState('Male');


    const btnShow = useSelector(state => state.User.showBtn);
    const [upload, setUpload] = useState(true);

    const handleSend = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", title);
        formData.append("picture", image);
        if (image2) formData.append("picture2", image2);
        if (image3) formData.append("picture3", image3);
        formData.append("price", price);
        formData.append("newProduct", newProduct);
        formData.append("description", description);
        formData.append("gender", gender);

        const response = await instance_axios.post("http://localhost:5000/addProduct",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        if (response) {
            setUpload(!upload)
        }
    };



    return (
        <div>


            {btnShow && <Modal className="modal_subscribe" show={props.show} onClick={(e) => e.stopPropagation()} onHide={() => props.closePopup()}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload your product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {upload && <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="Enter a product title" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Image 1</Form.Label>
                            <Form.Control
                                type="file"
                                id="custom-file"
                                name="file"
                                label="Custom file input"

                                onChange={(e) => { setImage(e.target.files[0]) }}
                                custom
                            />
                            <Form.Label>Image 2</Form.Label>
                            <Form.Control
                                type="file"
                                id="custom-file"
                                name="file"
                                label="Custom file input"

                                onChange={(e) => { setImage2(e.target.files[0]) }}
                                custom
                            />
                            <Form.Label>Image 3</Form.Label>
                            <Form.Control
                                type="file"
                                id="custom-file"
                                name="file"
                                label="Custom file input"

                                onChange={(e) => { setImage3(e.target.files[0]) }}
                                custom
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder="Enter the product price" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <MDBInput onChange={(e) => { setDescription(e.target.value) }} type="textarea" placeholder="Write down the product description" type="textarea" rows="2" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select Gender</Form.Label>
                            <Form.Control onChange={(e) => { setGender(e.target.value) }} as="select">
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                        unChecked
                                        onClick={() => setNewProduct(!newProduct)}
                                        type={type}
                                        id={`default-${type}`}
                                        label={'New product'}
                                    />
                                </div>
                            ))}
                        </Form.Group>



                        <Button onClick={(e) => { handleSend(e) }} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>}
                    {!upload && <div className="upload-success">
                        <div className="upload-success-text">Product uploaded !</div>
                        <img src="/images/product/valid.png" />

                    </div>

                    }
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>

            </Modal>}
        </div >
    );

}

export default AddProduct
