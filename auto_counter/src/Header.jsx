import React from 'react'
import { Container,Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home" className='text-light fw-bolder'>
            <img
              alt=""
              src="https://cdn.dribbble.com/userupload/41669677/file/original-ef0821e44688600fb1c0943be3ef53f0.gif"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Counter-Application
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
