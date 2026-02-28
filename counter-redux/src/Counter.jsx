import React from 'react'
import { Button } from 'react-bootstrap'

function Counter() {
    return (
        <div>
            <div>
                <h1 className='text-center fw-bolder mt-5 text-warning'>Counter-Application</h1>
                <div className='container border border-dark mt-2 p-5 rounded w-50'>
                    <h2 className='text-center mt-5'>0</h2>
                    <div className='d-flex justify-content-around mt-5'>
                        <Button variant="primary" >Increment</Button>
                        <Button variant="secondary" >Reset</Button>
                        <Button variant="success" >Decrement</Button>
                    </div>
                    <div className='d-flex mt-5 p-3'>
                        <input type="text" className='form-control' placeholder='Enter amount' />
                        <Button className='btn btn-primary m-2'>Increment By Amount</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter
