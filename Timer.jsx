import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-800 text-white text-center py-1 text-sm">
      You've been here for {seconds} seconds.
    </div>
  );
}

export default Timer;