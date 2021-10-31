import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center py-3">
            <img width="400" src={'https://i.ibb.co/wrGs7WC/404-Error-rafiki.png'} alt="404 img" />
            <h3>Oops! You're lost.</h3>
            <p>The page you are looking for was not found.</p>
            <Link to="/home">
                <button className="btn btn-primary">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;