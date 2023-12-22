import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { SiGooglephotos } from "react-icons/si";
import { BsCartDash } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { LuLogIn } from "react-icons/lu";
import { AuthContext } from '../Documents/AuthProvider/AuthProvider';
import { CgLogOut } from "react-icons/cg";
const Navbar = () => {

    const { user, userSingOut } = useContext(AuthContext)
    const navLink=<>
    <li><NavLink to='/'><IoHomeOutline className='text-xl font-bold text-[#B226E3]'></IoHomeOutline>Home</NavLink></li>
    <li><NavLink to='/gallary'><SiGooglephotos className='text-xl font-bold text-[#B226E3]'></SiGooglephotos>Task-Galary</NavLink></li>
    <li><NavLink to='/dashboard'><BsCartDash className='text-xl font-bold text-[#B226E3]'></BsCartDash>Dashboard</NavLink></li>
    <li><NavLink to='contact'><IoMdContacts className='text-xl font-bold text-[#B226E3]'></IoMdContacts> Contact-Us</NavLink></li>
  
    
    </>

const handelLogOut = (auth) => {

    userSingOut(auth)
        .then(res => {
            console.log(res.user)
        })
        .catch(error => {
            console.log(error)
        })

}
    return (
        <div className='bg-[#B226E31A]'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">TO-TUSK</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL ? user.photoURL : "https://i.ibb.co/fY5WbZn/a962ef5ea8dfa25418c0a2b0057a64d4.jpg"
                                }  alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <p >{user.displayName}</p>

                            </li>
                            <li>

                                <button onClick={handelLogOut} className="btn btn-sm mt-5  btn-secondary"><CgLogOut className='text-xl font-bold text-[#B226E3]'></CgLogOut> Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost"><LuLogIn className='text-xl font-bold text-[#B226E3]'></LuLogIn>Login</button>
                        </Link>
                }
            </div>
        </div>
  </div>

    );
};

export default Navbar;