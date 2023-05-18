import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate();

    const { logIn, loginWithGoogle, loginWithGithub } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        setSuccess("")
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email);

        if (password.length < 6) {
            setError('Password not vaild need 6 cheracters')
            return;
        }

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                form.reset()
                navigate("/")
                setSuccess("Login is successfully completed")
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(result => {
                const loggedGoogle = result.user
                console.log(loggedGoogle);
                navigate("/")
                setSuccess("Google Login is successfully completed")
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleGithubSignIn = () =>{
        loginWithGithub()
        .then(result => {
            const loggedGithub = result.user
            console.log(loggedGithub);
            navigate("/")
            setSuccess("Github Login is successfully completed")
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className='container mt-5 mb-5 py-5 w-75'>
        <h2 className='text-center fw-bold pb-3'>Login Now!</h2>
        <div className='row  d-flex justify-content-between'>
            <img className='col-sm-12 col-lg-6' style={{ width: "450px" }} src={loginImage}></img>
            <form onSubmit={handleLogin} className='border border-2 p-4 rounded-4 col-sm-12 col-lg-6'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                    <input type="email" name="email" required placeholder='Write your email here' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                    <input type="password" name="password" placeholder='Write your password here' className="form-control" required id="exampleInputPassword1" />
                </div>
                <p className='text-danger text-center fw-bold'>{error}</p>
                <p className='text-success text-center fw-bold'>{success}</p>
                <button style={{background:"#00a90b"}} className='form-control text-white rounded-2 py-2 px-3 fw-bold'>Submit</button>
                <div className='d-flex justify-content-center align-items-center pt-2'>
                    <p>-------------------- </p><h4 className='pb-2'>&ensp; or &ensp;</h4><p> --------------------</p>
                </div>
                <div className='text-center'>
                    <button onClick={handleGoogleSignIn} className='p-3 fs-2 bg-white border-0'><FaGoogle></FaGoogle></button>
                    <button onClick={handleGithubSignIn} className='p-3 fs-2 bg-white border-0'><FaGithub></FaGithub></button>
                </div>
                <p className='text-center pt-3 mb-0'>If you new to Fresh Food ? Then <Link to="/register" className='text-decoration-underline fw-bold'>Register</Link></p>
            </form>
        </div>
    </div>
    );
};

export default Login;