import React from 'react';

const UserDetails = ({user: {id, name, username, address: {street, city},phone, email}}) => {
    return (
        <div>
            <h2>{id}. {name} {username}</h2>
            <p><b>Street:</b> {street}</p>
            <p><b>City:</b> {city}</p>
            <p><b>Email:</b> {email}</p>
            <b>Phone:</b> <i> {phone}</i>
        </div>
    );
};

export {UserDetails};