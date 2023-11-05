import { useContext } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../porviders/AuthProvider';
import swal from 'sweetalert';
import { getAuth, updateProfile } from 'firebase/auth';

const Register = () => {
    const navigate = useNavigate()
    const { createUser, googleSignIn } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const register = new FormData(e.currentTarget)
        const email = register.get('email')
        const password = register.get('password')
        const name = register.get('name')
        const photoURL = register.get('photoURL')
        const phone = register.get('phone')

        if (
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
                password
            )
        ) {
            swal("Error!", "you have to take more than 6 character, at least one capital letter, one number and one special character", "error")
            return;
        }


        createUser(email, password, photoURL, name, phone)
            .then(result => {
                // After successful registration, update the user's profile
                const auth = getAuth();
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        navigate('/');
                        console.log(result.user);
                        swal("Good job!", "successfully user created", "success");
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });


    }

    // google register
    const googleIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate('/')
                swal("Good job!", "successfully login", "success");
                // toast("Wow so easy!")
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:gap-10 flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-purple-700">Register!!</h1>
                </div>
                <div data-aos="fade-right" className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="text-white input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input name='photoURL' type="text" placeholder="Photo Url" className="text-white input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input name='phone' type="text" placeholder="phone" className="text-white input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="text-white input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="text-white input input-bordered" required />

                            <h3>Have an account? <Link to={'/login'} className='text-violet-900 text-xl font-semibold'>Login</Link></h3>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="form-control ">
                        <div><h1 className='text-sm font-light text-white text-center p-4'>Or Register with</h1></div>

                        <div onClick={googleIn}>
                            <button className="btn btn-primary w-full"><span className='text-sm'>Google</span> <span className='text-3xl'><AiOutlineGoogle></AiOutlineGoogle></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;