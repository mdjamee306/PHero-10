import { useContext, useState } from 'react';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AuthContext } from '../porviders/AuthProvider';
import swal from 'sweetalert';



const Login = () => {


    const { logIn, googleSignIn } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const handleLogin = e => {
        e.preventDefault()
        const register = new FormData(e.currentTarget)
        const email = register.get('email')
        const password = register.get('password')

        logIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                swal("Good job!", "successfully login", "success");
            })
            .catch(error => {
                console.error(error)
                swal("Error!", error.message, "error")
            })
    }

    // google login
    const googleIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                swal("Good job!", "successfully login", "success");

                // login er por koi jabe oita set kortesi
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero bg-gray-400 md:py-14 py-6">
            <div data-aos="zoom-in-left" className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-normal">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-normal">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <h3 className='text-black font-normal'>Do not have an account? <Link to={'/register'} className='text-violet-900 text-xl font-semibold'>Register</Link></h3>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control ">
                            <div><h1 className='text-sm font-medium text-blue-950 text-center p-4'>Or Login with</h1></div>
                            <button onClick={googleIn} className="btn btn-primary"><span className='text-sm'>Google</span> <span className='text-3xl'><AiOutlineGoogle></AiOutlineGoogle></span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;