import React from 'react';
import './UserDetails.css'

const UserDetails = ({user: {id, name, username, address: {street, city},phone, email},getUserId}) => {
    return (
        <div>
            <h2>{id}. {name} {username}</h2>
            <p><b>Street:</b> {street}</p>
            <p><b>City:</b> {city}</p>
            <p><b>Email:</b> {email}</p>
            <b>Phone:</b> <i> {phone}</i>
            <br/>
            <br/>
            <button className="btn1" onClick={()=>getUserId(id)}>
                GetUserPosts
            </button>
        </div>
    );
};

export {UserDetails};