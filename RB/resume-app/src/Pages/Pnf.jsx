import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Pnf() {
  return (
    <div className='text-center my-5'>
      <h1>Page Not Found</h1>
      <h4>Sorry, we couldn't find the page.</h4>
      <Link to={'/'}>
        <Button variant="contained">
          Back to Home
        </Button>
      </Link>
    </div>
  )
}

export default Pnf
