import React from "react";
import './HomePageContainer.css';
import Image from "../components/Image";
import Logo from "../components/Logo";

const HomePageContainer = () => {
  return (
    <div className="HomePage">
      <div>
        <Logo />
      </div>
      <div>
        <Image />
      </div>
    </div>
  );
};

export default HomePageContainer;
