import React from "react";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import "./DataSelectionsContainer.css";
import PropTypes from "prop-types";

const DataSelectionsContainer = ({
  rawLaunches,
  years,
  setDisplayedLaunches,
  displayedLaunches,
  sortText,
  setSortText,
}) => {
  function filterByYear(value) {
    let filteredLaunches = [];
    if (value === "Show all") {
      filteredLaunches = rawLaunches;
    } else {
      filteredLaunches = rawLaunches.filter((launch) => {
        return launch.launchYear === value;
      });
    }
    const sortedLaunches = sortLaunches(filteredLaunches, sortText === "Descending");
    setDisplayedLaunches(sortedLaunches);
  }

  function sortLaunches(launches, sortAscending) {
    let sortedLaunches = [...launches];
    sortedLaunches.sort((a, b) => {
      return sortAscending 
        ? Date.parse(a.utcDate) - Date.parse(b.utcDate)
        : Date.parse(b.utcDate) - Date.parse(a.utcDate);
    });
    return sortedLaunches;
  }

  function handleSortClick() {
    const sortedLaunches = sortLaunches(displayedLaunches, sortText === "Ascending");

    setSortText(sortText === "Descending" ? "Ascending" : "Descending");
    setDisplayedLaunches(sortedLaunches);
  }

  return (
    <div className="selections-wrapper">
      <Filter years={years} filterByYear={filterByYear} />
      <Sort sortText={sortText} handleSortClick={handleSortClick} />
    </div>
  );
};

DataSelectionsContainer.propTypes = {
  years: PropTypes.array,
  rawLaunches: PropTypes.array,
  displayedLaunches: PropTypes.array,
  sortText: PropTypes.string,
};

export default DataSelectionsContainer;
