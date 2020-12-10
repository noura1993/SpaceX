import React from "react";
import "./Launch.css";

const Launch = ({ launch }) => {
  return (
    <div className="launch">
      <div className="left-side">
        <span className="flight-number">#{launch.flightNumber}</span>
        <span className="mission-name">{launch.missionName}</span>
      </div>
      <div className="right-side">
        <div className="date">{launch.date}</div>
        <div className="rocket-name">{launch.rocketName}</div>
      </div>
    </div>
  );
};

export default Launch;
