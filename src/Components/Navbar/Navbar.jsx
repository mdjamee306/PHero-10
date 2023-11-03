import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../porviders/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';


const Navbar = () => {

    const naviGated = useNavigate()
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
                // naviGated('/')
                // swal("Good job!", "successfully logout", "success");

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Logout successfully'
                })
            })
    }
    const navLink = <>
        <li><NavLink to={'/'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""}>Home</NavLink>
        </li>

        <li><NavLink to={'/product'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""}>Add Product</NavLink>
        </li>

        <li><NavLink to={'/cart'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""}>My Cart</NavLink>
        </li>

        <li><NavLink to={'/contact'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""}>Contact</NavLink>
        </li>

        <li><NavLink to={'/register'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""}>Register</NavLink>
        </li>

    </>
    return (
        <div>
            <div className="navbar bg-[#F0F0F0] shadow-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52  ">
                            {navLink}
                        </ul>
                    </div>
                    {/* logo */}
                    <Link to={'/'}>
                        <div className='block md:visible'>
                            <img className="rounded w-[50px] h-[50px]" src="https://i.ibb.co/TLWDc2C/1.png" alt="Logo" />
                        </div>
                    </Link>
                    <div><h3 className='lg:text-xl lg:font-extrabold text-black ml-3'>Fashion Flock</h3></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="gap-4 menu-horizontal px-1 text-xl font-semibold text-[#CCC8AA]">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user ?
                            <div className="flex justify-center items-center gap-4">
                                <label className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt="user profile" />
                                    </div>
                                </label>
                                <h3 className='font-bold text-xl'>{user?.displayName}</h3>
                                <button onClick={handleLogout} className="btn">Logout</button>
                            </div>
                            :
                            <Link to={'/login'}>
                                <button className="btn">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;