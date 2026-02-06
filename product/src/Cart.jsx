import React from 'react'
import useFetch from './useFetch'
import { Button, Card } from 'react-bootstrap';
function Cart() {
  const data = useFetch('https://dummyjson.com/products');
  console.log(data);

  return (
    <div>
      <div className='container d-flex row justify-content-between ms-5'>
        {data?.map(item => (
          <Card style={{ width: '18rem' }} className = 'm-2'>
            <Card.Img variant="top" src={item.thumbnail}/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description.slice(0,50)}...
              </Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        ))
        }
      </div>
    </div>
  )
}

export default Cart
