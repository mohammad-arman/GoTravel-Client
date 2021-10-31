import React from 'react';
import './Offer.css';
import offerImg from '../../../images/about-one-img-1.png';

const Offer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 offer-thumb">
                    <img className="img-fluid" src={offerImg} alt="" />
                    <div className="discount">
                        <h2>30%</h2>
                        <h4>Discount</h4>
                    </div>
                </div>
                <div className="col-md-6 offer-text">
                    <h4 className='section-sub'>Get to know us</h4>
                    <h2 className="fw-bold">Plan Your Trip with GoTravel</h2>
                    <p>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>
                    <button className="btn about-btn">Book With Us Now</button>
                </div>
            </div>
        </div>
    );
};

export default Offer;