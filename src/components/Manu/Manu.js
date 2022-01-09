import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logo.png';
import './Manu.css';

const Manu = () => {
    return (
        <div>
            <Navbar expand="lg" className='Manu'>
              <Container>
                <Navbar.Brand href="/home"><img src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="mx-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <NavLink activeStyle={{color: "black", border: "none", fontWeight: 'bold'}} className="nav-style" to="/home">Home</NavLink>
                    <NavLink activeStyle={{color: "black", border: "none", fontWeight: 'bold'}} className="nav-style" to="/courses">Courses</NavLink>
                    <NavLink activeStyle={{color: "black", border: "none", fontWeight: 'bold'}} className="nav-style" to="/about">About us</NavLink>
                    <NavLink activeStyle={{color: "black", border: "none", fontWeight: 'bold'}} className="nav-style" to="/contact">Contact</NavLink>
                    
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Find your Course"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-primary">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Manu;