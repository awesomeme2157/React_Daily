import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  let timerRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setIsRunning(false);
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  return (
    <div>
      <h1>Stop Watch</h1>
      <br />
      <h2>Time: {time} Seconds</h2>
      <br />
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <br />
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
