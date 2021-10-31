import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
       <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" width="150" className="d-inline-block align-text-top"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link id="custom-nav-link" className="nav-link" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        {
                            user.email && 
                            <Link id="custom-nav-link" className="nav-link" aria-current="page" to="/addtouristspot">Add Tourist Spot</Link>
                        }
                        </li>
                        <li className="nav-item">
                        {
                            user.email &&
                            <Link id="custom-nav-link" className="nav-link" aria-current="page" to="/allbookings">All Booking Manage</Link>
                        }
                        </li>
                        <li className="nav-item">
                        {
                            user.email &&
                            <Link id="custom-nav-link" className="nav-link" aria-current="page" to="/mybooking">My Booking</Link>
                        }
                        </li>
                        <li className="me-2">
                            <span className="user-name">{user?.displayName}</span>
                        </li>
                        
                        <li className="nav-item">
                            {
                                user.email ?
                                <button onClick={logOut} className="btn btn-success">
                                    logout
                                </button>
                                :
                                <Link className="nav-link" to="/login">
                                    <button className="btn btn-primary">Login</button>
                                </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       </>
    );
};

export default Header;