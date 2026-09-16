//const { useState, useRef, useEffect } = React;
import {useState,useRef, useEffect} from "react"

const pad = (n) => String(n).padStart(2, "0");
const format = (ms) => {
  const cs = Math.floor((ms % 1000) / 10);
  const s = Math.floor(ms / 1000) % 60;
  const m = Math.floor(ms / 60000);
  return pad(m) + ":" + pad(s) + ":" + pad(cs);
};

const StopWatch = () => {
  const [ms, setMs] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    if (timerRef.current) return; // already running
    const startedAt = Date.now() - ms;
    timerRef.current = setInterval(() => setMs(Date.now() - startedAt), 10);
  };
  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const reset = () => {
    stop();
    setMs(0);
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  return (
    <div className="sw">
      <div className="time">{format(ms)}</div>
      <div className="row">
        <button className="start" onClick={start}>Start</button>
        <button className="stop" onClick={stop}>Stop</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
export default StopWatch