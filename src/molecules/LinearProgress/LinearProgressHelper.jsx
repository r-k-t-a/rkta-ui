import React, { useEffect, useState } from 'react';
import LinearProgress from './LinearProgress';

const LineraProgressHelper = props => {
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <LinearProgress {...props} completed={completed} />;
};
export default LineraProgressHelper;
