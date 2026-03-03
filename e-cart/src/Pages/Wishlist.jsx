import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

function Wishlist() {
  return (
    <div style={{ marginTop: "100px" }} className='container-fluid'>
      <Row>
        <Col className='m-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" />
            <Card.Body>
              <Card.Title className='text-warning'>Title</Card.Title>
              <Card.Text>
              </Card.Text>
              <div className='d-flex justify-content-between'>
                <Button className='btn btn-light'><i className='fa-solid fa-trash text-danger'></i></Button>
                <Button className='btn btn-light'><i className='fa-solid fa-cart-shopping text-info'></i></Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Wishlist
