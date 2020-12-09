import React, {useState} from "react";
import "./Sort.css";
import SortIcon from '../assets/icon/sort@3x.png';

const Sort = () => {
    const [sortText, setSortText] = useState('Descending');

  return (
    <div className="sort-wrapper">
      <button className='sort'>
          Sort {sortText}
          <img className='sort-img' src={SortIcon} />
      </button>
    </div>
  );
};

export default Sort;
