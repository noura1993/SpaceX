import React from "react";
import "./HomePageContainer.css";
import Image from "../components/Image";
import Logo from "../components/Logo";
import LaunchesContainer from "./LaunchesContainer";

const HomePageContainer = () => {
  return (
    <div className="HomePage">
      <div className="left-contatiner">
        <Logo />
        <Image />
      </div>
      <div className='right-container'>
        <LaunchesContainer />
      </div>
    </div>
  );
};

export default HomePageContainer;
