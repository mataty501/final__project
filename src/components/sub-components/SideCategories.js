import React from 'react';
import {Accordion, Card, Button, Form} from 'react-bootstrap';
import Range from './Range'
const SideCategories = () => {
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
        <div key={`default-checkbox`} className="mb-3">
        <Form.Check 
            type={'checkbox'}
            id={`default-checkbox`}
            label={'Male'}
        />
        </div>
        <div key={`default-checkbox`} className="mb-3">
        <Form.Check 
            type={'checkbox'}
            id={`default-checkbox`}
            label={'female'}
            
        />
        </div>
        <div key={`default-checkbox`} className="mb-3">
        <Form.Check 
            type={'checkbox'}
            id={`default-checkbox`}
            label={'Mixed'}
        />
        </div>
        </Form>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Price1
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body><Range/></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        </div>
    )
}

export default SideCategories
