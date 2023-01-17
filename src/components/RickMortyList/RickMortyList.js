import React from 'react';
import './RickMortyList.css'
import {RickMortyItem} from "../RickMortyItem/RickMortyItem";

const RickMortyList = () => {
    return (
        <div className='wrapper'>
            <div className='rickMortyList'>
                <RickMortyItem id={'1'} name={'Rick Sanchez'} status={'Alive'} species={'Human'} gender={'Male'} url={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
                <RickMortyItem id={'2'} name={'Morty Smith'} status={'Alive'} species={'Human'} gender={'Male'} url={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
                <RickMortyItem id={'3'} name={'Summer Smith'} status={'Alive'} species={'Human'} gender={'Female'} url={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
                <RickMortyItem id={'4'} name={'Beth Smith'} status={'Alive'} species={'Human'} gender={'Female'} url={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
                <RickMortyItem id={'5'} name={'RJerry Smith'} status={'Alive'} species={'Human'} gender={'Male'} url={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
                <RickMortyItem id={'6'} name={'Abadango Cluster Princess'} status={'Alive'} species={'Alien'} gender={'Female'} url={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
            </div>
        </div>
    );
};

export {RickMortyList};