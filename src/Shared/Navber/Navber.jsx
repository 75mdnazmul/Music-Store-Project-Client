// import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Container className='container' fluid>
                    <img style={{width:"60px", height:'50px'}} src={logo} alt="" />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto my-2 my-lg-0" >
                            <Link className='text-decoration-none px-4' href="#action1">Home</Link >
                            <Link className='text-decoration-none px-4' href="#action2">All Toys</Link >
                            <Link className='text-decoration-none px-4' href="#action2">My Toys</Link >
                            <Link className='text-decoration-none px-4' href="#action2">Add A Toy</Link >
                            <Link className='text-decoration-none px-4' href="#action2">Blogs</Link >
                        </Nav>
                        <button type="button" className="btn btn-primary">Login</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Navber;