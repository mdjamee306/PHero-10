import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLink = <>
        <li><NavLink to={'/'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""}>Home</NavLink>
        </li>

        <li><NavLink to={'/product'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""}>Add Product</NavLink>
        </li>

        <li><NavLink to={'/cart'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""}>My Cart</NavLink>
        </li>
        <li><NavLink to={'/contact'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-yellow-700 underline" : ""}>Contact</NavLink>
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
                    <Link to={'/login'}>
                        <button className="btn">Login</button>
                    </Link>
                    <Link>
                        <button className="btn">Logout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;