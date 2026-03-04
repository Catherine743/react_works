import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

function Home() {
  return (
    <div>
      <Header insideHome />
      <div style={{ marginTop: "100px" }} className='container-fluid'>
        <Row>
          <Col className='m-3'>
            <Card style={{ width: '18rem' }}>
              <Link to={`/view/:id`}>
                <Card.Img variant="top" src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" />
              </Link>
              <Card.Body>
                <Card.Title className='text-warning'>Title</Card.Title>
                <Card.Text>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button className='btn btn-light'><i className='fa-solid fa-heart text-danger'></i></Button>
                  <Button className='btn btn-light'><i className='fa-solid fa-cart-shopping text-info'></i></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home
