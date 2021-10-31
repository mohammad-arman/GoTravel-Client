import React from 'react';
import { useForm } from "react-hook-form";
import './AddTouristSpot.css';

const AddTouristSpot = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://ghostly-coffin-01881.herokuapp.com/touristSpots',{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.insertedId){
                alert('Added Successfully');
                reset();
            }
        })
    };
    return (
        <div className="text-center py-5 add-tourist-spot container">
            <h2 className="mb-5">Add A Tourist Spot</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("name")} />
                <textarea placeholder="Description" {...register("description")} />
                <input placeholder="Price" type="number" {...register("price")} />
                <input placeholder="Image Url" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddTouristSpot;
