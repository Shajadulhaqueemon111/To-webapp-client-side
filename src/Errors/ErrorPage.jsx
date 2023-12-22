import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mx-auto w-3/5'>
            <img src="https://i.ibb.co/P1Mjhqm/404-page-cover.jpg" alt="" />
           <Link to='/'>
           <h2 className='btn btn-outline btn-secondary mt-6'>Back-To-Home-Page</h2>
           </Link>
        </div>
    );
};

export default ErrorPage;