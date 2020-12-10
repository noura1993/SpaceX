import React from "react";
import Launch from "../components/Launch";
import DataSelectionsContainer from "./DataSelectionsContainer";
import "./LaunchesContainer.css";

const LaunchesContainer = ({launches}) => {

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
