import React from "react";
import './HomePageContainer.css';
import Image from "../components/Image";
import Logo from "../components/Logo";

const HomePageContainer = () => {
  return (
    <div className="HomePage">
        <Logo />
        <Image />
    </div>
  );
};

export default HomePageContainer;
