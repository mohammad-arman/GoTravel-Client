import React, { useEffect, useState } from 'react';
import TouristSpot from './TouristSpot/TouristSpot';
import './TouristSpots.css'

const TouristSpots = () => {
    const [touristSpots, setTouristSpots] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/touristSpots')
        .then(res=>res.json())
        .then(data=> setTouristSpots(data))
    }, [])
    return (
        <div className="container py-5">
            <h4 className="text-center section-sub">The Top Places For</h4>
            <h2 className="text-center fw-bold">Planning Your Holiday</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
               {
                   touristSpots.map(touristSpot=><TouristSpot key={touristSpot._id} touristSpot={touristSpot}></TouristSpot>)
               }
            </div>
        </div>
    );
};

export default TouristSpots;