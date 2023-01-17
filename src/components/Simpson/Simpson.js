import React from 'react';
import './Simpson.css'

const Simpson = ({name, url}) => {
    return (
        <div className='simpson'>
            <h2>{name}</h2>
            <img src={url} alt="#"/>
        </div>
    );
};

export {Simpson};