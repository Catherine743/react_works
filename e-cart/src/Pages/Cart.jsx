import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

function Cart() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "100px" }}>
        <div className='container-fluid row w-100'>
          <div className='col-lg-1'></div>
          <div className='col-lg-6'>
            <div className='card rounded mt-3 p-3'>
              <table className='mt-2'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>index</td>
                    <td>title</td>
                    <td><img src="" alt="" /></td>
                    <td><button className='btn text-danger fw-bolder'> - </button>
                      <input className='text-center' readOnly type='text' style={{ width: "25%" }} />
                      <button className='btn text-success fw-bolder'> + </button>
                    </td>
                    <td className='text-danger'>totalPrice</td>
                    <td>
                      <button className='btn'>
                        <i className='fa-solid fa-trash text-danger'></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='d-flex justify-content-between mt-2'>
                <button className='btn btn-danger'>Empty Cart</button>
                <Link to={'/'} className='btn btn-warning'>Shop More</Link>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card shadow p-5'>
              <h1>Cart Summary</h1>
              <h2>Total Products: <span>.length</span></h2>
              <h3>Total Price: <span className='text-danger'>total</span></h3>
            </div>
            <div className='d-grid m-2'>
              <button className='btn btn-success rounded'>Checkout</button>
            </div>
          </div>
          <div className='col-lg-1'></div>
        </div>
      </div>
    </div>
  )
}

export default Cart
