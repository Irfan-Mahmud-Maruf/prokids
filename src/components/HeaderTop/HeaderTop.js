import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import HeaderTopImg from '../../img/header.png';
import './HraderTop.css';

const HeaderTop = () => {
    return (
        <Container>
        <Row>
          <Col md={6} className='d-flex flex-column justify-content-center align-items-start'>
            <h1 className='text-danger'>Programming</h1>
            <h2 className='text-primary'>For Kids</h2> <br />
            <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quasi provident delectus recusandae. Autem harum voluptate fugit ipsum eum obcaecati laborum magnam possimus blanditiis </p>
            <div><br />
            <Button variant="primary">Special Courses</Button>{'   '}
            <Button variant="outline-primary">Special Offers</Button>
            </div>
          </Col>
          <Col md={{ span: 6}}><img src={HeaderTopImg} alt="" className='w-100 mt-5'/></Col>
        </Row>
      </Container>
    );
};

export default HeaderTop;