import React from "react";
import "./HomePageContainer.css";
import Image from "../components/Image";
import Logo from "../components/Logo";
import LaunchesContainer from "./LaunchesContainer";
import Reload from "../components/Reload";

const HomePageContainer = () => {
  return (
    <div className="HomePage">
      <div className="header">
        <Logo />
        <Reload />
      </div>
      <div className="content-wrapper">
        <div className="side-img">
          <Image />
        </div>
        <div className="content">
          <LaunchesContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePageContainer;
