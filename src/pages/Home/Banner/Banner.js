import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
           <div className="container">
               <div className="banner-text text-center">
                   <h1 className="text-white">Your Journey Begins</h1>
                   <p className="text-white">A journey of a 1000 miles starts with a single step.</p>
                   <Link to="/">
                    <button className="btn btn-primary btn-banner rounded-0 btn-lg">
                        Know More
                    </button>
                   </Link>
               </div>
           </div>
        </div>
    );
};

export default Banner;