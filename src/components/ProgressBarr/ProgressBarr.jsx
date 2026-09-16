import React, { useState } from "react";

const ProgressBarr = () => {
  const [progress, setProgress] = useState(0);

  const handleIncrease = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const handleDecrease = () => {
    if (progress > 0) {
      setProgress(progress - 10);
    }
  };

  return (
    <div style={{ width: "300px" }}>
      <div
        style={{
          width: "100%",
          height: "20px",
          border: "1px solid black",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "green",
            transition: "0.3s",
          }}
        ></div>
      </div>

      <p>{progress}%</p>

      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default ProgressBarr;