import React from "react";
import "./Filter.css";

const Filter = ({years, filterByYear}) => {

  function onChange(value) {
    filterByYear(value);
  }

  return (
    <div className="filter-wrapper">
      <select name="years" id="years" onChange={(e) => onChange(e.target.value)}>
        <option selected disabled>Filter By Year</option>
        <option value='Show all'>Show all</option>
        {years.map( year => {
          return <option value={year}>{year}</option>
        })}
      </select>
    </div>
  );
};

export default Filter;
