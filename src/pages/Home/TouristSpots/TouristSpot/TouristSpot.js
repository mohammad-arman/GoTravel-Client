import React from 'react';
import { Link } from 'react-router-dom';

const TouristSpot = (props) => {
    const {_id, name, description, price, img} = props.touristSpot;
    return (
        <div className="col">
            <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title">$ {price}</h5>  
                <p className="card-text">{description.slice(0,100)}.</p>
                <Link to={`/booking/${_id}`}>
                    <button className="btn btn-primary">Book Now</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default TouristSpot;