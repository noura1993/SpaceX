import React from "react";
import "./Launch.css";

const Launch = ({ launch }) => {
  return (
    <div className="launch">
      <div className="left-side">
        <span className="flight-number">#{launch.flight_number}</span>
        <span className="mission-name">{launch.mission_name}</span>
      </div>
      <div className="right-side">
        <span className="date">{launch.launch_date_utc}</span>
        <span className="rocket-name">{launch.rocket.rocket_name}</span>
      </div>
    </div>
  );
};

export default Launch;
