import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaList, FaSearch, FaUsers, FaUtensils } from "react-icons/fa";

import { TiBookmark, TiCalendar, TiContacts, TiHome, TiShoppingCart, TiUserAdd, TiUserAddOutline } from 'react-icons/ti';
const Dashboard = () => {
    return (
        <div className='flex mt-4'>
            <div className='w-64 min-h-screen bg-[#B226E31A]'>
                <ul className='menu p-4'>

                    <>
                        <li><NavLink to='/dashboard/task'>

                            <FaUsers className='text-2xl  font-bold'></FaUsers>
                            All To-Do-List</NavLink>

                        </li>

                        {/* <li><NavLink to='/dashboard/addTask'>
                            <TiCalendar className='text-2xl font-bold'></TiCalendar>
                            ADD-TASK</NavLink>

                        </li> */}


                        <li><NavLink to='/'>
                            <TiHome className='text-2xl font-bold'></TiHome>
                            User Home</NavLink>

                        </li>
                        <li><NavLink to='/dashboard/review'>
                            <TiUserAdd className='text-2xl font-bold'></TiUserAdd>
                            Add Review</NavLink>

                        </li>
                        <li><NavLink to='/dashboard/booking'>
                            <TiBookmark className='text-2xl  font-bold'></TiBookmark>
                            My Booking</NavLink>

                        </li>

                    </>

                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;