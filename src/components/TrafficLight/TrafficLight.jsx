import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [light, setLight] = useState("red");

  useEffect(() => {
    let timer;

    if (light === "red") {
      timer = setTimeout(() => setLight("green"), 3000);
    } else if (light === "green") {
      timer = setTimeout(() => setLight("yellow"), 3000);
    } else if (light === "yellow") {
      timer = setTimeout(() => setLight("red"), 2000);
    }

    return () => clearTimeout(timer);
  }, [light]);

  const getColor = (color) => (light === color ? color : "#ccc");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Traffic Light</h2>

      <div
        style={{
          width: "100px",
          background: "#333",
          padding: "20px",
          borderRadius: "10px",
          margin: "auto"
        }}
      >
        <div style={circleStyle(getColor("red"))}></div>
        <div style={circleStyle(getColor("yellow"))}></div>
        <div style={circleStyle(getColor("green"))}></div>
      </div>
    </div>
  );
};

const circleStyle = (bgColor) => ({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  background: bgColor,
  margin: "10px auto"
});

export default TrafficLight;