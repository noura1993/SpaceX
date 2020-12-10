import React from 'react';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import './DataSelectionsContainer.css';

const DataSelectionsContainer = ({years}) => {
    return (
        <div className='selections-wrapper'>
            <Filter years={years} />
            <Sort />
        </div>
    );
}

export default DataSelectionsContainer;