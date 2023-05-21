import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from '../../assets/register.webp'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import useTitleName from '../../Hooks/useTitleName';

const Register = () => {
    useTitleName('Register page')
    
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate()

    const { createUser, loginWithGoogle, loginWithGitHub, setName, setPhoto } = useContext(AuthContext)

    const handleGoogleSignUp = () => {
        loginWithGoogle()
            .then(result => {
                const googleLogged = result.user;
                console.log(googleLogged);
                navigate("/")
                setSuccess("Registration is successfully completed")
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleGithubSignUp = () => {
        loginWithGitHub()
            .then(result => {
                const githubLogged = result.user;
                console.log(githubLogged);
                navigate("/")
                setSuccess("Registration is successfully completed")
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleFormData = event => {
        event.preventDefault();
        setSuccess('')
        setError("")
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.image.value;
        if (password.length < 6) {
            setError('Password must be at least 6 cheracters')
            return;
        }
        createUser(email, password)
            .then(result => {
                const userLogged = result.user;
                console.log(userLogged);
                form.reset();
                navigate("/")
                setSuccess("Registration is successfully completed")
                setName(name)
                setPhoto(photo)
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div>
            <div className='container py-5'>
                <div className='row'>
                    <Form onSubmit={handleFormData} className='w-50 col-lg-6 pt-4 px-5' >
                        <h2 className='text-center fw-bold pb-3'>Register Now !</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='fw-bold'>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Type your Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='fw-bold'>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter your email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='fw-bold'>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Type your Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='fw-bold'>Photo URL</Form.Label>
                            <Form.Control name="image" type="text" placeholder="Enter your Photo Url" required />
                        </Form.Group>
                        <p className='fw-bold text-danger text-center '>{error}</p>
                        <p className='fw-bold text-success text-center '>{success}</p>
                        <Button className='w-100 fw-bold border-0 py-2' style={{ color: 'white', backgroundColor: '#04B4AE' }} variant="primary" type="submit">
                            Submit
                        </Button>
                        <h2 className='text-center pt-3'>Or</h2>
                        <div className='text-center'>
                            <button onClick={handleGoogleSignUp} className='p-3 mx-4 fs-2 bg-white border-0'><FaGoogle></FaGoogle><span className='fs-5 ms-1'>oogle</span></button>
                            <button onClick={handleGithubSignUp} className='p-3 fs-2 bg-white border-0'><FaGithub></FaGithub><span className='fs-5 ms-1'>ithub</span></button>
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