import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <>
        <div className="footer-part py-5">
           <div className="footer-text py-3">
               <div className="row">
                   <div className="col-md-3 about-part text-start">
                        <img src={logo} alt="logo" width="100" />
                        <p className="pt-2">After the long, dreary winter we just had, filled with dark days and frigid temps, we all deserve a vacation of some sort.</p>
                   </div>
                   <div className="col-md-3 compnay-part">
                        <h4>Company</h4>
                        <a href="/">About Us</a>
                        <a href="/">Community Blog</a>
                        <a href="/">Rewards</a>
                        <a href="/">Meet The Teem</a>
                   </div>
                   <div className="col-md-3 contact-part">
                       <h4>Contact</h4>
                       <a href="/">
                       <i className="fas fa-map-marker-alt"></i>
                       <span>10004, Battery Park, New York</span> 
                       </a>
                       <a href="/">
                       <i className="fas fa-envelope"></i>
                       <span>info@yoursite.com</span>
                       </a>
                       <a href="/">
                       <i className="fas fa-phone-alt"></i>
                       <span>+0 123-456-7890</span>
                       </a>
                   </div>
                   <div className="col-md-3">
                       <h4>Newsletter Sign Up</h4>
                       <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Subscribe" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <span className="input-group-text" id="basic-addon2">SIGN UP</span>
                            </div>
                   </div>
               </div>
           </div>
        </div>
        <div className="bottom-footer">
            <div className="container">
            <p className="m-0 py-3 text-center fw-bold text-white">Copyright &copy;2021 Traip. Designed & Developed By Mohammad Arman</p>
        </div>
        </div>
        </>
    );
};

export default Footer;