import React, { useState } from "react";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import "./DataSelectionsContainer.css";

const DataSelectionsContainer = ({rawLaunches, years, setDisplayedLaunches, displayedLaunches, sortText, setSortText}) => {

  function filterByYear(value) {
    if (value === "Show all") {
      setDisplayedLaunches(rawLaunches);
    } else {
      const filteredLaunches = rawLaunches.filter((launch) => {
        return launch.launchYear === value;
      });
      setDisplayedLaunches(filteredLaunches);
    }
  }

  function sortLaunches() {
    let sortedLaunches = [...displayedLaunches];
    sortedLaunches.sort((a, b) => {
        return sortText === 'Descending' ? Date.parse(b.utcDate) - Date.parse(a.utcDate) : Date.parse(a.utcDate) - Date.parse(b.utcDate);
    });
    setSortText(sortText === 'Descending'? 'Ascending' : 'Descending');
    setDisplayedLaunches(sortedLaunches);
  }

  return (
    <div className="selections-wrapper">
      <Filter years={years} filterByYear={filterByYear} />
      <Sort sortText={sortText} sortLaunches={sortLaunches} />
    </div>
  );
};

export default DataSelectionsContainer;
