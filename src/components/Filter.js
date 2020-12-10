import React from "react";
import "./Filter.css";

const Filter = ({years}) => {

  return (
    <div className="filter-wrapper">
      <select name="years" id="years">
        <option defaultValue>Filter By Year</option>
        {years.map( year => {
          return <option value={year}>{year}</option>
        })}
      </select>
    </div>
  );
};

export default Filter;
