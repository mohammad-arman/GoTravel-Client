import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './SingleTourSpot.css'
import useAuth from '../../Hooks/useAuth';

const SingleTourSpot = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [singleSpot, setSingleSpot] = useState({});

    useEffect(()=>{
        fetch(`https://ghostly-coffin-01881.herokuapp.com/touristSpots/${id}`)
        .then(res=>res.json())
        .then(data=>setSingleSpot(data))
    }, []);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.key = singleSpot._id;
        data.img = singleSpot.img;
        data.title = singleSpot.name;
        data.status = "Pending";
        fetch('https://ghostly-coffin-01881.herokuapp.com/bookingSpots',{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Successfully booking')
                reset();
            }
        })
    };
    return (
        <div className="container py-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                    <img src={singleSpot.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{singleSpot.name}</h5>
                        <p className="card-text">{singleSpot.description}</p>
                        <h5>$ {singleSpot.price}</h5>
                    </div>
                    </div>
                </div>
                <div className="col booking-form">
                    <h2>Please booking now</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user?.displayName} {...register("name", { required: true })} />
                    <input defaultValue={user?.email} {...register("email")} />
                    <input placeholder="Address" {...register("address")} />
                    <input type="date" {...register("date")} />
                    <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleTourSpot;