import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';


const Login = () => {
    return (
        <div  className="hero bg-gray-400 md:py-14 py-6">
            <div data-aos="zoom-in-left" className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form>
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
                        <div className="form-control mt-6">
                        <button className="btn btn-primary"><span className='text-sm'>Google</span> <span className='text-3xl'><AiOutlineGoogle></AiOutlineGoogle></span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;