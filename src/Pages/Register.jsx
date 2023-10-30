import { AiOutlineGoogle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:gap-10 flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register!!</h1>
                </div>
                <div data-aos="fade-right" className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input name='url' type="text" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            
                         <h3>Have an account? <Link to={'/login'} className='text-violet-900 text-xl font-semibold'>Login</Link></h3>
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary"><span className='text-sm'>Google</span> <span className='text-3xl'><AiOutlineGoogle></AiOutlineGoogle></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;