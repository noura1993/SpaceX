import React from 'react';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import './DataSelectionsContainer.css';

const DataSelectionsContainer = () => {
    return (
        <div className='selections-wrapper'>
            <Filter />
            <Sort />
        </div>
    );
}

export default DataSelectionsContainer;