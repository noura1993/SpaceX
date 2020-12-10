import React from "react";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import "./DataSelectionsContainer.css";

const DataSelectionsContainer = ({
  rawLaunches,
  years,
  setDisplayedLaunches,
}) => {
  function filterByYear(value) {
    const filteredLaunches = rawLaunches.filter((launch) => {
      return launch.launchYear === value;
    });
    setDisplayedLaunches(filteredLaunches);
  }

  return (
    <div className="selections-wrapper">
      <Filter years={years} filterByYear={filterByYear} />
      <Sort />
    </div>
  );
};

export default DataSelectionsContainer;
