import React from "react";
import Launch from "../components/Launch";
import DataSelectionsContainer from "./DataSelectionsContainer";
import "./LaunchesContainer.css";
import PropTypes from 'prop-types';

const LaunchesContainer = ({
  rawLaunches,
  years,
  displayedLaunches,
  setDisplayedLaunches,
  sortText,
  setSortText,
}) => {
  return (
    <div className="launches-wrapper">
      <div className="controllers-btns">
        <DataSelectionsContainer
          years={years}
          rawLaunches={rawLaunches}
          setDisplayedLaunches={setDisplayedLaunches}
          displayedLaunches={displayedLaunches}
          sortText={sortText}
          setSortText={setSortText}
        />
      </div>
      <div className="launches" id='launches'>
        {displayedLaunches.map((launch) => {
          return <Launch key={launch.id} launch={launch} />;
        })}
      </div>
    </div>
  );
};

LaunchesContainer.propTypes = {
  years: PropTypes.array,
  rawLaunches: PropTypes.array,
  displayedLaunches: PropTypes.array,
  sortText: PropTypes.string
};

export default LaunchesContainer;
