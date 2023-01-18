import React from 'react';
import './User.css'

const User = ({user, getUser}) => {

    const {id, name, username} = user;
    return (
        <div className='user_wrapper'>
            <b>{id}) {name}, {username}</b>
            <button className='btn1' onClick={() => getUser(user)}>GetDetail</button>
        </div>
    );
};

export {User};