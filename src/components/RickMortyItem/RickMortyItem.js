import React from 'react';
import './RickMortyItem.css'

const RickMortyItem = ({id, name, status, gender, species, url}) => {
    return (
        <div className='rickMortyItem'>
            <h2>{id}. {name} - {gender}</h2>
            <p>{status} {species}</p>
            <img src={url} alt={name}/>
        </div>
    );
};

export {RickMortyItem};