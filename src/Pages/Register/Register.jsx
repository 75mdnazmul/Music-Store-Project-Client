import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from '../../assets/register.jpg'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='container py-5'>
            <div className='row'>
                <Form className='w-50 col-lg-6 pt-4 px-5' >
                    <h2 className='text-center fw-bold pb-3'>Register Now !</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Name</Form.Label>
                        <Form.Control type="email" placeholder="Type your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Type your Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Photo URL</Form.Label>
                        <Form.Control type="password" placeholder="Enter your Photo Url" />
                    </Form.Group>

                    <Button className='w-100 fw-bold border-0 py-2' style={{ color: 'white', backgroundColor: '#04B4AE' }} variant="primary" type="submit">
                        Submit
                    </Button>
                        <h2 className='text-center pt-3'>Or</h2>
                        <div className='text-center'>
                        <button className='p-3 mx-4 fs-2 bg-white border-0'><FaGoogle></FaGoogle><span className='fs-5 ms-1'>oogle</span></button>
                        <button className='p-3 fs-2 bg-white border-0'><FaGithub></FaGithub><span className='fs-5 ms-1'>ithub</span></button>
                    </div>
                    <p className='text-center pt-3 mb-0 fs-5'>Already have an account ? Then <Link to="/login" className='text-decoration-underline fw-bold'>Login</Link></p>
                </Form>
                < img src={img} alt="" className='w-50 col-lg-6' />
            </div >
        </div >
        </div>
    );
};

export default Register;