import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col md={6} className='d-flex flex-column justify-content-center align-items-start'>
                    <h3 className='text-primary'>Contact Us</h3>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis eos, voluptas mollitia nulla dolorum voluptatibus similique quisquam nostrum quibusdam.</p>
                    <p className='text-muted'>Lorem ipsum dolor sit amet.</p>
                </Col>
                <Col md={6}>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} />
                    <Button variant="outline-primary" className='mt-3'>Submit</Button>
                  </Form.Group>
                </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;