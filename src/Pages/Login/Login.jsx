import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from '../../assets/login.webp'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location);
    const from = location.state?.from?.pathname || '/';

    const { logIn, loginWithGoogle, loginWithGithub } = useContext(AuthContext)

    const handleLoginFormData = event => {
        event.preventDefault();
        setSuccess("")
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);

        if (password.length < 6) {
            setError('Password not vaild need 6 cheracters')
            return;
        }

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                form.reset()
                navigate(from , {replace: true})
                setSuccess("Login is successfully completed")
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }
    const handleGoogleLogIn = () => {
        loginWithGoogle()
            .then(result => {
                const loggedGoogle = result.user
                console.log(loggedGoogle);
                navigate(from , {replace: true})
                setSuccess("Google Login is successfully completed")
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleGitHubLogIn = () =>{
        loginWithGithub()
        .then(result => {
            const loggedGithub = result.user
            console.log(loggedGithub);
            navigate(from , {replace: true})
            setSuccess("Github Login is successfully completed")
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className='container py-5'>
            <div className='row'>
                < img src={img} alt="" className='w-50 col-lg-6' />
                <Form onSubmit={handleLoginFormData} className='w-50 col-lg-6 pt-4 px-5' >
                    <h2 className='text-center fw-bold pb-3'>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter your email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Type your Password" required/>
                    </Form.Group>
                    <p className='fw-bold text-danger text-center '>{error}</p>
                    <p className='fw-bold text-success text-center '>{success}</p>
                    <Button className='w-100 fw-bold border-0 py-2' style={{ color: 'white', backgroundColor: '#04B4AE' }} variant="primary" type="submit">
                        Log in
                    </Button>
                        <h2 className='text-center pt-3'>Or</h2>
                        <div className='text-center'>
                        <button onClick={handleGoogleLogIn} className='p-3 mx-4 fs-2 bg-white border-0'><FaGoogle></FaGoogle><span className='fs-5 ms-1'>oogle</span></button>
                        <button onClick={handleGitHubLogIn} className='p-3 fs-2 bg-white border-0'><FaGithub></FaGithub><span className='fs-5 ms-1'>ithub</span></button>
                    </div>
                    <p className='text-center pt-3 mb-0 fs-5'>If you new to Music store ? Then <Link to="/register" className='text-decoration-underline fw-bold'>Register</Link></p>
                </Form>
            </div >
        </div >
    );
};

export default Login;