import React, { useEffect } from 'react'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Redux/slice/productSlice'
import { addToWishlist } from '../Redux/slice/wishListSlice'

function Home() {

  const { allProducts, loading, error } = useSelector(state => state.productReducer)
  const { wishlist } = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  // console.log(allProducts);

  const handleWishlist = (product) => {
    const existingProduct = wishlist.find(item => item.id == product.id)
    if(existingProduct) {
      alert("Item already exist")
    }
    else{
      dispatch(addToWishlist(product))
      alert("Item added")
    }
  }

  return (
    <div>
      <Header insideHome />
      <div style={{ marginTop: "100px" }} className='container-fluid'>
        { loading? <div className='text-center mt-5'>
          <Spinner animation="border" variant="info" />
        </div> 
        : 
        <Row>
          {allProducts.length > 0? allProducts.map(product => (
            <Col className='m-3'>
              <Card style={{ width: '18rem' }} key={product.id}>
                <Link to={`/view/${product.id}`}>
                  <Card.Img variant="top" src={product.thumbnail} />
                </Link>
                <Card.Body>
                  <Card.Title className='text-warning'>{product.title}</Card.Title>
                  <Card.Text>
                    {product.description.slice(0,20)}...
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button className='btn btn-light' onClick={() => handleWishlist(product)}><i className='fa-solid fa-heart text-danger'></i></Button>
                    <Button className='btn btn-light'><i className='fa-solid fa-cart-shopping text-info'></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )):null}
        </Row>
        }
      </div>
    </div>
  )
}

export default Home
