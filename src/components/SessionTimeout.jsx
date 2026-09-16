import { useState, useEffect, useRef } from "react";

const IDLE_SECONDS = 5;
const COUNTDOWN = 8;

const SessionTimeout = () => {
  const [status, setStatus] = useState("active"); // active | warning | logged-out
  const [count, setCount] = useState(COUNTDOWN);
  const idleRef = useRef(null);
  const countRef = useRef(null);

  const triggerWarning = () => {
    setStatus("warning");
    setCount(COUNTDOWN);
    countRef.current = setInterval(() => {
      setCount((c) => {
        if (c <= 1) {
          clearInterval(countRef.current);
          setStatus("logged-out");
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  };

  // While active, listen for activity and re-arm the idle timer.
  useEffect(() => {
    if (status !== "active") return;
    const arm = () => {
      clearTimeout(idleRef.current);
      idleRef.current = setTimeout(triggerWarning, IDLE_SECONDS * 1000);
    };
    window.addEventListener("mousemove", arm);
    window.addEventListener("keydown", arm);
    arm();
    return () => {
      window.removeEventListener("mousemove", arm);
      window.removeEventListener("keydown", arm);
      clearTimeout(idleRef.current);
    };
  }, [status]);

  const extend = () => {
    clearInterval(countRef.current);
    setStatus("active");
  };
  const login = () => setStatus("active");

  if (status === "logged-out") {
    return (
      <div className="app">
        <h3>You've been logged out due to inactivity.</h3>
        <button className="login" onClick={login}>Log back in</button>
      </div>
    );
  }

  return (
    <div className="app">
      <h3>You are logged in ✅</h3>
      <p className="hint">
        Stop moving the mouse / typing for {IDLE_SECONDS}s to trigger the timeout warning.
      </p>

      {status === "warning" && (
        <div className="overlay">
          <div className="dialog">
            <h3>Still there?</h3>
            <p>You'll be logged out in</p>
            <div className="count">{count}s</div>
            <div className="row">
              <button className="stay" onClick={extend}>Stay logged in</button>
              <button className="out" onClick={() => setStatus("logged-out")}>Log out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SessionTimeout;