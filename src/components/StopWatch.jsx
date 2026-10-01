import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const timerRef = useRef(null);
   const startTimeRef = useRef(0);

  useEffect(() => {
    if (running) {
      startTimeRef.current = Date.now() - time;
      timerRef.current = setInterval(() => {
        //setTime((prevTime) => prevTime + 10);
        setTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [running]);

  const start = () => {
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60000); // time caliculate in milliseconds
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2,"0")}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>{formatTime()}</h1>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;