import React from "react";
import "./Filter.css";

const Filter = () => {

  return (
    <div className="filter-wrapper">
      <select name="years" id="years">
        <option selected>Filter By Year</option>
        <option value="2000">2000</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};

export default Filter;
