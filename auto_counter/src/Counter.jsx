import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Counter() {
    const [counter, setCounter] = useState(0) // setCounter -> update state variable 

    // code for setting counter starts when page loads and keeps going until that button is clicked 
    // when each time the button is clicked the button name "pause" and "resume" will change as toggle button

    

    function reset() {
        setCounter(0);
    }

    
    return (
        <div>
            <div className='container border' style={{ marginTop: "200px" }}>
                <div className='text-center'>
                    <h1 className='text-primary'>Counter-Application</h1>
                    <h1 className='fw-bolder'>{counter}</h1>
                </div>
                <div className='text-center m-3 p-4'>
                    <Button variant="primary" className='m-2' >Increment</Button>
                    <Button variant="secondary" className='m-2' onClick={reset}>Reset</Button>
                </div>
            </div>
        </div>
    )
}

export default Counter
