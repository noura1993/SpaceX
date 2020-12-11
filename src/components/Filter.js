import React from "react";
import "./Filter.css";
import PropTypes from 'prop-types';

const Filter = ({years, filterByYear}) => {

  function onChange(value) {
    filterByYear(value);
  }

  return (
    <div className="filter-wrapper">
      <select defaultValue="Filter By Year" name="years" id="years" onChange={(e) => onChange(e.target.value)}>
        <option disabled>Filter By Year</option>
        <option value='Show all'>Show all</option>
        {years.map( year => {
          return <option key={year} value={year}>{year}</option>
        })}
      </select>
    </div>
  );
};

Filter.propTypes = {
  years: PropTypes.array
};

export default Filter;
