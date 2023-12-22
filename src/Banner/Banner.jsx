import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 200,
        });
    }, []);
    return (
        <div className='mt-6' data-aos="zoom-out-down">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/xhdkQgZ/free-project-management-softwares.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold" data-aos="fade-down">Hello there</h1>
                        <p className="mb-5">A task management system is a software tool or platform designed to help individuals or teams organize, track, and prioritize tasks, projects, or assignments efficiently. </p>
                        <Link to="/login">
                        <button className="btn btn-primary">Let’s Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;