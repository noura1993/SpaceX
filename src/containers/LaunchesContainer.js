import React, { useEffect, useState } from "react";
import Launch from "../components/Launch";
import DataSelectionsContainer from "./DataSelectionsContainer";
import "./LaunchesContainer.css";

const LaunchesContainer = () => {
  const [launches, setLaunches] = useState([]);

  function getLaunches() {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((jsonResponse) => {
        if (jsonResponse.length > 0) {
          setLaunches(jsonResponse);
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
          return <Launch key={launch.id} launch={launch} />;
        })}
      </div>
    </div>
  );
};

export default LaunchesContainer;
