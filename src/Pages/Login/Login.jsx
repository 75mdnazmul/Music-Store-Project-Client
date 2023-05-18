import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from '../../assets/login.jpg'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                < img src={img} alt="" className='w-50 col-lg-6' />
                <Form className='w-50 col-lg-6 pt-4 px-5' >
                    <h2 className='text-center fw-bold pt-5 pb-3'>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Type your Password" />
                    </Form.Group>

                    <Button className='w-100 fw-bold border-0 py-2' style={{ color: 'white', backgroundColor: '#04B4AE' }} variant="primary" type="submit">
                        Submit
                    </Button>
                        <h2 className='text-center pt-5'>Or</h2>
                        <div className='text-center'>
                        <button className='p-3 mx-4 fs-2 bg-white border-0'><FaGoogle></FaGoogle><span className='fs-5 ms-1'>oogle</span></button>
                        <button className='p-3 fs-2 bg-white border-0'><FaGithub></FaGithub><span className='fs-5 ms-1'>ithub</span></button>
                    </div>
                    <p className='text-center pt-3 mb-0 fs-5'>If you new to Music store ? Then <Link to="/register" className='text-decoration-underline fw-bold'>Register</Link></p>
                </Form>
            </div >
        </div >
    );
};

export default Login;