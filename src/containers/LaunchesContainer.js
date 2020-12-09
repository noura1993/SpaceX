import React from 'react';
import Reload from '../components/Reload';
import DataSelectionsContainer from './DataSelectionsContainer';
import './LaunchesContainer.css';

const LaunchesContainer = () => {
    return(
        <div className='launches-wrapper'>
            <Reload />
            <DataSelectionsContainer />
        </div>
    );
}

export default LaunchesContainer;