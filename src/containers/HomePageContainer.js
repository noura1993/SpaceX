import React, { useEffect, useState } from "react";
import "./HomePageContainer.css";
import Image from "../components/Image";
import Logo from "../components/Logo";
import LaunchesContainer from "./LaunchesContainer";
import Reload from "../components/Reload";
import dateFormat from "dateformat";

const HomePageContainer = () => {
  const [rawLaunches, setRawLaunches] = useState([]);
  const [displayedLaunches, setDisplayedLaunches] = useState([]);
  const [years, setYears] = useState([]);
  const [sortText, setSortText] = useState("Descending");

  function getLaunches() {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((jsonResponse) => {
        if (jsonResponse.length > 0) {
          let id = 0;
          const filterYears = [];
          const newLaunches = jsonResponse.map((launch) => {
            if (!filterYears.includes(launch.launch_year)) {
              filterYears.push(launch.launch_year);
            }

            let date = dateFormat(
              new Date(launch.launch_date_utc),
              "dS mmm yyyy"
            );
            return {
              id: id++,
              flightNumber: launch.flight_number,
              missionName: launch.mission_name,
              date: date,
              utcDate: launch.launch_date_utc,
              rocketName: launch.rocket.rocket_name,
              launchYear: launch.launch_year,
            };
          });
          setYears(filterYears);
          setRawLaunches(newLaunches);
          setDisplayedLaunches(newLaunches);
        }
      })
      .catch((error) => console.error(error));
  }

  function reload() {
    getLaunches();
    document.getElementById("years").selectedIndex = 0;
    document.getElementById("launches").scrollTop = 0;
    setSortText('Descending');
  }

  useEffect(() => {
    getLaunches();
  }, []);

  return (
    <div className="home-page">
      <div className="header">
        <Logo />
        <Reload reload={reload} />
      </div>
      <div className="content-wrapper">
        <div className="side-img">
          <Image />
        </div>
        <div className="content">
          <LaunchesContainer
            years={years}
            rawLaunches={rawLaunches}
            displayedLaunches={displayedLaunches}
            setDisplayedLaunches={setDisplayedLaunches}
            sortText={sortText}
            setSortText={setSortText}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageContainer;
