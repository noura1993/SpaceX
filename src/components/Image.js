import React from 'react';
import './Image.css';
import Launch from '../assets/img/launch-home.png';

const Image = () => {
    return (
        <div className='image-wrapper'>
            <img className='image' src={Launch} alt='roket launch' />
        </div>
    );
}

export default Image;