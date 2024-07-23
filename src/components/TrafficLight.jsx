import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const intervals = {
      red: 4000,
      yellow: 500,
      green: 3000,
    };
    const cycleLights = () => {
      switch (light) {
        case "red":
          setTimeout(() => setLight("green"), intervals.red);
          break;

        case "yellow":
          setTimeout(() => setLight("red"), intervals.yellow);
          break;

        case "green":
          setTimeout(() => setLight("yellow"), intervals.green);
          break;
        default:
          setLight("red");
          break;
      }
    };
    cycleLights();
  }, [light]);
  return (
    <div className="traffic-light">
      <div
        className={`light redColor ${light == "red" ? "active" : ""} `}
      ></div>
      <div
        className={`light yellowColor ${light == "yellow" ? "active" : ""} `}
      ></div>
      <div
        className={`light greenColor ${light == "green" ? "active" : ""} `}
      ></div>
    </div>
  );
};

export default TrafficLight;
