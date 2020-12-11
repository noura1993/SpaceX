import React from "react";
import "./Launch.css";
import PropTypes from 'prop-types';

const Launch = ({ launch }) => {
  return (
    <div className="launch">
      <div className="left-side">
        <span className="flight-number">#{launch.flightNumber}</span>
      </div>
      <div className="middle">
        <span className="mission-name">{launch.missionName}</span>
      </div>
      <div className="right-side">
        <div className="date">{launch.date}</div>
        <div className="rocket-name">{launch.rocketName}</div>
      </div>
    </div>
  );
};

Launch.propTypes = {
  launch: PropTypes.object
};

export default Launch;
