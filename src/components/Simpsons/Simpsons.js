import React from 'react';
import './Simpsons.css'
import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    return (
        <div className='wrapper'>
            <div className='simpsons'>
                <Simpson name={'Homer Simpson'}
                         url={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
                <Simpson name={'Bart Simpson'}
                         url={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
                <Simpson name={'Marge Simpson'}
                         url={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}/>
                <Simpson name={'Mr. Burns'} url={'https://upload.wikimedia.org/wikipedia/en/5/56/Mr_Burns.png'}/>
                <Simpson name={'Lisa Simpson'} url={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>
                <Simpson name={'Apu Naha-sapeema-petilon'} url={'https://upload.wikimedia.org/wikipedia/ru/7/7a/%D0%90%D0%BF%D1%83_%D0%9D%D0%B0%D1%85%D0%B0%D1%81%D0%B0%D0%BF%D0%B8%D0%BC%D0%B0%D0%BF%D0%B5%D1%82%D0%B8%D0%BB%D0%BE%D0%BD.png'}/>
            </div>

        </div>
    );
};

export {Simpsons};