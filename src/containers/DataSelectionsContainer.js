import React, { useState } from "react";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import "./DataSelectionsContainer.css";

const DataSelectionsContainer = ({rawLaunches, years, setDisplayedLaunches,}) => {

    const [sortText, setSortText] = useState('Descending');

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
    setSortText(sortText === 'Descending'? 'Ascending' : 'Descending');
  }

  return (
    <div className="selections-wrapper">
      <Filter years={years} filterByYear={filterByYear} />
      <Sort sortText={sortText} sortLaunches={sortLaunches} />
    </div>
  );
};

export default DataSelectionsContainer;
