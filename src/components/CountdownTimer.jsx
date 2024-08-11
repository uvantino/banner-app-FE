import React, { useState, useEffect } from 'react';

function ReverseCountdownTimer({ startSeconds, onTimerEnd }) {
  const [timeLeft, setTimeLeft] = useState(startSeconds);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimerEnd(); 
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onTimerEnd]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div>
      <h1>Time Left: {formatTime(timeLeft)}</h1>
    </div>
  );
}

export default ReverseCountdownTimer;
