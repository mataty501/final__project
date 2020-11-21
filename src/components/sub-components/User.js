import React, { useState } from 'react'
import { Modal, Button, Form, Tabs, Tab } from 'react-bootstrap'
import axios from 'axios'

const User = (props) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const sendData = async (e) => {
    e.preventDefault()
    const data = {
      username: email,
      password: password
    };
    const response = await axios.post('http://localhost:5000/signup', data)
    console.log(data)
  }

  const signIn = async (e) => {
    e.preventDefault()
    {/*send data*/ }
    const data = {
      username: email,
      password: password
    };
    const response = await axios.post('http://localhost:5000/login', data)

    {/*Save in localStorage*/ }
    const refreshToken = response.data.refreshToken
    const token = response.data.token
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('token', token);

    console.log(localStorage.getItem('token'))

  }

  return (
    <div>


      <Modal className="modal_subscribe" show={props.show} onClick={(e) => e.stopPropagation()} onHide={() => props.closePopup()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Sign In">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                      </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={(e) => signIn(e)} variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Tab>

            {/**/}
            <Tab eventKey="profile" title="Sign up">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                      </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={(e) => { sendData(e) }} variant="primary" type="submit">
                  Subscribe
                    </Button>
              </Form>
            </Tab>

          </Tabs>
          {/*
          
          */}
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

export default User
