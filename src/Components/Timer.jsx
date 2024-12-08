import { useEffect, useState } from 'react';

const countdownTotalAmount = 5 * 60; // 5 minutes for timer

function Timer() {
  const [seconds, setSeconds] = useState(countdownTotalAmount);

  const displaySeconds = seconds % 60;
  const displayMinutes = Math.floor(seconds / 60);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (seconds > 0) {
        setSeconds((prevState) => prevState - 1);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [seconds]);

  return (
    <>
      <p>
        {displaySeconds < 0 ? (
          'No Order active'
        ) : (
          <div>
            Waiting: {displayMinutes}:
            {displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}
          </div>
        )}
      </p>
    </>
  );
}

export default Timer;
