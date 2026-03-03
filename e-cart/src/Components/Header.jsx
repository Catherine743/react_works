import React from 'react'
import { Link } from 'react-router-dom';
import { Badge, Container, Form, Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-primary fixed-top">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{ textDecoration: "none", fontSize: "30px", color: "yellow" }}>
              <i className='fa-solid fa-truck-fast fa-bounce'></i>E-Cart
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form.Control
            type="search"
            placeholder="Search"
            className="ms-5 w-25"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='btn btn-outline-light'>
                <Link to={'/wishlist'} style={{ color: "black", fontWeight: "bold", textDecoration: "none" }}>
                  <i className='fa-solid fa-heart text-danger'></i>Wishlist
                  <Badge bg="success rounded ms-2">0</Badge>
                </Link>
              </Nav.Link>
              <Nav.Link className='btn btn-outline-light ms-2'>
                <Link to={'/cart'} style={{ color: "black", fontWeight: "bold", textDecoration: "none" }}>
                  <i className='fa-solid fa-cart-shopping text-warning'></i>Cart
                  <Badge bg="success rounded ms-2">0</Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
