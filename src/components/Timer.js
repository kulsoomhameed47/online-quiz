import React, { useEffect, useState } from "react";

const Timer = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp(); // Trigger when time is up
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [timeLeft, onTimeUp]);

  return (
    <div className="timer">
      <p>Time Left: {timeLeft} seconds</p>
    </div>
  );
};

export default Timer;
