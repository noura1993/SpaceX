import React from 'react';
import './Reload.css';
import Refresh from '../assets/icon/refresh@3x.png';

const Reload = () => {
    return (
        <div className='reload'>
            <button className='reload-btn'>
                Reload Data
                <img className='reload-img' src={Refresh} alt='reload icon' />
            </button>
        </div>
    );
}

export default Reload;