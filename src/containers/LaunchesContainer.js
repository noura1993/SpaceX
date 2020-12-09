import React from "react";
import Launch from "../components/Launch";
import DataSelectionsContainer from "./DataSelectionsContainer";
import "./LaunchesContainer.css";

const LaunchesContainer = () => {
  return (
    <div className="launches-wrapper">
      <div className="controllers-btns">
        <DataSelectionsContainer />
      </div>
      <div className="launches">
        <Launch />
      </div>
    </div>
  );
};

export default LaunchesContainer;
