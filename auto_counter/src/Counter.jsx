import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(true); // true = counter running

  // useEffect to handle auto-counter
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    } else if (!isRunning && interval !== null) {
      clearInterval(interval);
    }

    // Cleanup on unmount or when isRunning changes
    return () => clearInterval(interval);
  }, [isRunning]);

  // Toggle pause/resume
  const toggleCounter = () => {
    setIsRunning(!isRunning);
  };

  // Reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <div className='container' style={{ marginTop: "200px" }}>
        <div className='text-center'>
          <h1 className='text-primary'>Auto-Counter-Application</h1>
          <h1 className='fw-bolder'>{counter}</h1>
        </div>
        <div className='text-center m-3 p-4'>
          <Button 
            variant={isRunning ? "danger" : "success"} 
            className='m-2'
            onClick={toggleCounter}
          >
            {isRunning ? "Pause" : "Resume"}
          </Button>
          <Button variant="secondary" className='m-2' onClick={reset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
