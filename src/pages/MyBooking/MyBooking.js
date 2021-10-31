import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyBooking = () => {
    const {user} = useAuth();
    const [myBooking, setMyBooking] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/mybooking/${user.email}`)
        .then(res=>res.json())
        .then(data=> setMyBooking(data))
    }, [myBooking]);

     //handleDelete
     const handleDelete = (id) => {
        const procced = window.confirm('Are you sure? you want to delete booking.')
     if(procced){
        fetch(`https://ghostly-coffin-01881.herokuapp.com/deletebooking/${id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=> {
            const remaining = myBooking.filter(single=> single._id !== id);
            setMyBooking(remaining);
            if(data.deletedCount){
                alert('Delete Booking Tour Place..')
            }
        })
     }
    }
    return (
        <div>
           <div className="container py-5">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Place Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">User Email</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    {
                        myBooking?.map((single, index)=>(
                    <tbody key={single._id}>
                        <tr>
                        <th scope="row">{index}</th>
                        <td>{single?.title}</td>
                        <td>{single?.name}</td>
                        <td>{single?.email}</td>
                        <button onClick={()=>{handleDelete(single._id)}} className="btn bg-danger p-2 text-white">Delete</button>
                        </tr>
                    </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default MyBooking;