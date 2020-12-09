import React from "react";
import Reload from "../components/Reload";
import DataSelectionsContainer from "./DataSelectionsContainer";
import "./LaunchesContainer.css";

const LaunchesContainer = () => {
  return (
    <div className="launches-wrapper">
      <div className="top-btn">
        <Reload />
      </div>
      <div className="bottom-btns">
        <DataSelectionsContainer />
      </div>
    </div>
  );
};

export default LaunchesContainer;
