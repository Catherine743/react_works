import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
function Header() {
  return (
    <div>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home" className='text-light fw-bolder'>
            <i className="fa-solid fa-cart-arrow-down fs-2"></i>
            E-Cart
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
