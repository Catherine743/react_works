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
      <div className='container d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
        <div className='text-center p-5 shadow rounded' style={{ width: "700px", backgroundColor: "#f8f9fa" }}>
          <h2 className='text-primary mb-4 fw-bold'>Auto Counter Application</h2>
          <h1
            className='fw-bolder mb-4'
            style={{ fontSize: "70px", color: "#343a40" }}
          >
            {counter}
          </h1>

          <div className='mt-3'>
            <Button
              variant={isRunning ? "danger" : "success"}
              className='m-2 px-4'
              onClick={toggleCounter}
            >
              {isRunning ? "Pause" : "Resume"}
            </Button>

            <Button
              variant="secondary"
              className='m-2 px-4'
              onClick={reset}
            >
              Reset
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Counter;
