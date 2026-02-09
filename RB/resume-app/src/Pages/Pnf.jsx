import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Pnf() {
  return (
    <div className='text-center'>
      <img src="https://img.websitedesigningcompany.co.in/public/images/page_not_found/404.gif" height={'300px'} alt="" />
      <h1 className='mb-5'>Page Not Found</h1>
      <h4 className='mb-5'>Sorry, we couldn't find the page.</h4>
      <Link to={'/'}>
        <Button variant="contained" className='mb-5'>
          Back to Home
        </Button>
      </Link>
    </div>
  )
}

export default Pnf
