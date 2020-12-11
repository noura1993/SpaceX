import React from "react";
import "./Sort.css";
import SortIcon from "../assets/icon/sort@3x.png";
import PropTypes from 'prop-types';

const Sort = ({ sortText, sortLaunches }) => {

  function sort() {
    sortLaunches()
  }

  return (
    <div className="sort-wrapper">
      <button className="sort" onClick={sort}>
        Sort {sortText}
        <img className="sort-img" src={SortIcon} alt="sort icon" />
      </button>
    </div>
  );
};


Sort.propTypes = {
  sortText: PropTypes.string
};

export default Sort;
