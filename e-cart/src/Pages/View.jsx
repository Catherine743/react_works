import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../Redux/slice/wishListSlice';

function View() {

  const {id} = useParams(); // used to get path related informations from url
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const { wishlist } = useSelector(state => state.wishlistReducer)

  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem("allProducts"));
    setProduct(allProducts.find(item => item.id == id))
  },[])
  
  // console.log(product);

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
      <Header />
      <div style={{ marginTop: "200px" }}>
        <div className='row w-100 container'>
          <div className='col-lg-4 mt-5'>
            <img src={product.thumbnail} alt="" />
          </div>
          <div className='col-lg-2'></div>
          <div className='col-lg-6 mt-5'>
            <p>Pid : {product.id}</p>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>Price: <span className='text-danger'>{product.price}</span></h3>
            <div className='d-flex justify-content-between'>
              <Button className='btn btn-info rounded' onClick={() => handleWishlist(product)}>Wishlist<i className='fa-solid fa-heart text-danger'></i></Button>
              <Button className='btn btn-info rounded'>Cart<i className='fa-solid fa-cart-shopping text-success'></i></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
