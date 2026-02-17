import React from 'react'
import logo from './images/movie_bg.png'

function Header() {
  return (
    <div className='ps-5 d-flex align-items-center bg-dark gap-3'>
      <img src={logo} width="80" alt="logo" />
      <h1 className='text-white fs-2'>Movie Search App</h1>
    </div>
  )
}

export default Header
