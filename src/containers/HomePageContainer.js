import React, { useEffect, useState}  from "react";
import "./HomePageContainer.css";
import Image from "../components/Image";
import Logo from "../components/Logo";
import LaunchesContainer from "./LaunchesContainer";
import Reload from "../components/Reload";
import dateFormat from 'dateformat';

const HomePageContainer = () => {

    const [launches, setLaunches] = useState([]);
  
    function getLaunches() {
      fetch("https://api.spacexdata.com/v3/launches")
        .then((res) => res.json())
        .then((jsonResponse) => {
          if (jsonResponse.length > 0) {
            let id = 0;
            const newLaunches = jsonResponse.map( launch => {
            let date = dateFormat(new Date(launch.launch_date_utc), "dS mmm yyyy");
              return {
                id: id++,
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
    }, []);

  return (
    <div className="home-page">
      <div className="header">
        <Logo />
        <Reload reload={getLaunches}/>
      </div>
      <div className="content-wrapper">
        <div className="side-img">
          <Image />
        </div>
        <div className="content">
          <LaunchesContainer launches={launches}/>
        </div>
      </div>
    </div>
  );
};

export default HomePageContainer;
