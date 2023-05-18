// import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/logo.png'
import ActiveLink from '../../Routes/ActiveLinks/ActiveLinks';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Container className='container' fluid>
                    <img style={{width:"60px", height:'50px'}} src={logo} alt="" />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto my-2 my-lg-0" >
                            <ActiveLink className='text-decoration-none px-4' to="/">Home</ActiveLink >
                            <ActiveLink className='text-decoration-none px-4' to="/alltoys">All Toys</ActiveLink >
                            <ActiveLink className='text-decoration-none px-4' to="/mytoys">My Toys</ActiveLink >
                            <ActiveLink className='text-decoration-none px-4' to="/addtoy">Add A Toy</ActiveLink >
                            <ActiveLink className='text-decoration-none px-4' to="/blog">Blogs</ActiveLink >
                        </Nav>
                        <Link to='/login'><button style={{color:'white',backgroundColor: '#04B4AE'}} type="button" className="btn fw-bold">Login</button></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Navber;