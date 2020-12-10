import React, { useEffect, useState} from "react";
import Launch from "../components/Launch";
import DataSelectionsContainer from "./DataSelectionsContainer";
import "./LaunchesContainer.css";
import dateFormat from 'dateformat';

const LaunchesContainer = () => {
  const [launches, setLaunches] = useState([]);

  function getLaunches() {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((jsonResponse) => {
        if (jsonResponse.length > 0) {
          const newLaunches = jsonResponse.map( launch => {
          let date = dateFormat(new Date(launch.launch_date_utc), "dS mmm yyyy");
            return {
              flightNumber: launch.flight_number,
              missionName: launch.mission_name,
              date: date,
              rocketName: launch.rocket.rocket_name
            };
          });
          setLaunches(newLaunches);
        }
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getLaunches();
  });

  return (
    <div className="launches-wrapper">
      <div className="controllers-btns">
        <DataSelectionsContainer />
      </div>
      <div className="launches">
        {launches.map((launch) => {
          return <Launch key={launch.flightNumber} launch={launch} />;
        })}
      </div>
    </div>
  );
};

export default LaunchesContainer;
