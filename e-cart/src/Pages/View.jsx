import React from 'react'
import { Button } from 'react-bootstrap'
import Header from '../Components/Header'
function View() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "200px" }}>
        <div className='row w-100 container'>
          <div className='col-lg-4 mt-5'>
            <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="" />
          </div>
          <div className='col-lg-2'></div>
          <div className='col-lg-6 mt-5'>
            <p>Pid : 1</p>
            <h1>Title</h1>
            <p>Description</p>
            <h3>Price: <span className='text-danger'>525</span></h3>
            <div className='d-flex justify-content-between'>
              <Button className='btn btn-info rounded'>Wishlist<i className='fa-solid fa-heart text-danger'></i></Button>
              <Button className='btn btn-info rounded'>Cart<i className='fa-solid fa-cart-shopping text-success'></i></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
