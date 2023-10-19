// Filename: Timer.jsx
import React, { useEffect, useState } from 'react';

const Timer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false); // Determines if the timer should be decreasing
  const [expired, setExpired] = useState(false); // Indicates if the time has expired

  const handleStart = () => {
    setIsActive(true);
  };

  useEffect(() => {
    let timerId;
    if (isActive && seconds > 0) {
      timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
    } else if (seconds === 0) {
      setExpired(true);
      setIsActive(false);
    }
    return () => clearTimeout(timerId);
  }, [seconds, isActive]);

  return (
    <div
      className={`cursor-pointer text-${expired ? 'red' : '[#00539b]'} font-bold text-7xl`}
      onClick={handleStart}
    >
      {seconds}
    </div>
  );
};

export default Timer;
