import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Counter() {
    const [counter, setCounter] = useState(0) // setCounter -> update state variable 

    function increment() {
        setCounter(counter + 1);
    }

    function reset() {
        setCounter(0);
    }

    function decrement() {
        setCounter(counter - 1);
        if (counter == 0) {
            setCounter(0);
        }
    }
    return (
        <div>
            <div className='container border' style={{ marginTop: "200px" }}>
                <div className='text-center'>
                    <h1 className='text-primary'>Counter-Application</h1>
                    <h1 className='fw-bolder'>{counter}</h1>
                </div>
                <div className='text-center m-3 p-4'>
                    <Button variant="primary" className='m-2' onClick={increment}>Increment</Button>
                    <Button variant="secondary" className='m-2' onClick={reset}>Reset</Button>
                    <Button variant="success" className='m-2' onClick={decrement}>Decrement</Button>
                </div>
            </div>
        </div>
    )
}

export default Counter
