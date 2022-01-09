import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutUsImg from '../../img/about-us.png';
import Contact from '../Contact/Contact';

const About = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={AboutUsImg} alt="" className='w-100 mt-5' />
                </Col>
                <Col md={6} className='d-flex flex-column justify-content-center align-items-start'>
                    <h3 className='text-primary'>We Love Kids</h3>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis eos, voluptas mollitia nulla dolorum voluptatibus similique quisquam nostrum quibusdam.</p>
                    <br />
                    <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem est dolorum rem sequi, corrupti voluptas molestiae nulla eos aspernatur voluptatibus quasi. Natus voluptatum sequi incidunt nulla atque voluptas adipisci laborum officiis voluptatibus, dolore fugiat magni unde mollitia blanditiis eligendi quibusdam dolorum vitae excepturi hic vero inventore dignissimos. Optio, animi at!</p>
                    <br />
                    <p className='text-muted'>Lorem ipsum dolor sit amet.</p>
                </Col>
            </Row>
            <Contact></Contact>
        </Container>
        
    );
};

export default About;