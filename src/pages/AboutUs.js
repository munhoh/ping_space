import React from 'react';

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from 'react-bootstrap';

const SelectIndustry = () => (
  <Form.Select aria-label="Default select example">
    <option>Select Industry</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Select>
);

const SelectCountry = () => (
  <Form.Select aria-label="Default select example">
    <option>Select Country</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Select>
);

const AboutUs = () => (
  <Container style={{ paddingTop: '3em' }}>
    <Row className="justify-content-md-center">
      <Col xs lg="6">
        <h4 className="text-center">Let's Get In Touch</h4>
        <Form className="pt-3">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="First Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Last Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Industry"
            className="mb-3"
          >
            <SelectIndustry />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Country"
            className="mb-3"
          >
            <SelectCountry />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Company Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingTextarea2" label="Message">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '250px' }}
            />
          </FloatingLabel>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default AboutUs;
