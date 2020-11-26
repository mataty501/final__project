import React, { useState, useEffect } from 'react';
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import Range from './Range'
import { useDispatch } from 'react-redux';
import { GENDER } from '../../Redux/Actions/actions'


const SideCategories = () => {
  const [gender, setGender] = useState("");
  const [checked, setChecked] = useState(true)

  const dispatch = useDispatch();

  useEffect(() => {
    const genderFilter = () => {
      dispatch({
        type: GENDER,
        payload: gender
      })
    }
    genderFilter()
  }, [gender])


  return (
    <div className="sideFilter">
      <div>Other filters:</div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Gender
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form>
                <div key={`default-checkbox-all`} className="mb-3">
                  <Form.Check onClick={() => { setGender(''); setChecked(true) }}
                    type={'radio'}
                    id={`default-checkbox-all`}
                    label={'All'}
                    name={"checkbox"}
                    checked={checked}
                  />
                </div>
                <div key={`default-checkbox-male`} className="mb-3">
                  <Form.Check onClick={() => { setGender('Male'); setChecked(false) }}
                    type={'radio'}
                    id={`default-checkbox-male`}
                    label={'Male'}
                    name={"checkbox"}
                  />
                </div>
                <div key={`default-checkbox-female`} className="mb-3">
                  <Form.Check onClick={() => { setGender('Female'); setChecked(false) }}
                    type={'radio'}
                    id={`default-checkbox-female`}
                    label={'female'}
                    name={"checkbox"}

                  />
                </div>

              </Form>

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Price range
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body><Range /></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default SideCategories
