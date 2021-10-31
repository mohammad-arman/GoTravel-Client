import React from 'react';
import './About.css'
import aboutImg from '../../../images/tour-about.png'

const About = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <h4 className="section-sub">We Are Specialized In</h4>
                    <h2 className="fw-bold mb-3">Tour & Travel Arrangement</h2>
                    <h5 className="about-title">We Can Be A Great Travel Planner For You</h5>
                    <p>After the long, dreary winter we just had, filled with dark days and frigid temps, we all deserve a vacation of some sort. This could mean jet-setting someplace breathtakingly beautiful—making your Instagram stories the thing to watch—or just escaping to somewhere close by for a relaxing getaway.None of this would be quite like paradise</p>
                    <h5 className="about-title">We Guide You All Over The World</h5>
                    <p>however, if you find yourself in these less-than-ideal situations: losing your passport, dealing with broken luggage, or even finding yourself stranded somewhere dangerous with a dead phone.</p>
                    <button className="btn about-btn">Discover More</button>
                </div>
                <div className="col-md-6 about-thumb">
                    <img className="w-100" src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;