import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { FaArrowLeft, FaCamera, FaEye } from 'react-icons/fa6'
import { makePaymentAPI, viewBookAPI } from '../../services/allAPI';
import { useParams } from 'react-router-dom';
import { server_url } from '../../services/server_url';
import { loadStripe } from '@stripe/stripe-js';

function Viewbook() {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams()
  const [book, setBook] = useState({})

  useEffect(() => {
    viewBooks()
  }, [])

  const viewBooks = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await viewBookAPI(id, reqHeader)
      if (result.status == 200) {
        setBook(result.data)
      }
      else {
        console.log(result);
      }
    }
    else {
      console.log("Error");
    }
  }

  // console.log(book);

  const makePayment = async () => {
    const stripe = await loadStripe('pk_test_51TPFp61IQU7P5QOkkLogktAvp83pq9Q4LVem03maV8xaSfCZk24gO29ov8yR1lMtyEo3NBEfudyrBchheV3uFGhv00iPHGw7b0')
    // console.log(stripe);
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await makePaymentAPI(id, reqHeader)
      console.log(result.data);
      const {checkOutURL} = result.data
      window.location.href = checkOutURL
    }
    else {
      console.log("Error");
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen p-10">

      {/* BOOK CARD */}
      <div className="bg-white shadow p-8 flex gap-10 relative">

        {/* Eye Icon */}
        <FaEye
          className="absolute right-5 top-5 text-gray-500 cursor-pointer"
          onClick={() => setShowModal(true)}
        />

        {/* LEFT IMAGE */}
        <img
          src={book?.imageUrl}
          className="w-64 h-80 object-cover"
        />

        {/* RIGHT CONTENT */}
        <div className="flex-1">

          <h2 className="text-2xl font-serif text-center mb-1">
            {book?.title}
          </h2>
          <p className="text-center text-blue-500 mb-4">
            {book?.author}
          </p>

          {/* DETAILS GRID */}
          <div className="grid grid-cols-3 gap-y-2 text-sm mb-4">
            <p className='font-bold'>Publisher : {book?.publisher}</p>
            <p className='font-bold'>Language : {book?.language}</p>
            <p className='font-bold'>No. of pages : {book?.pages}</p>
            <p className='font-bold'>Seller Mail : {book?.sellerMail}</p>
            <p className='font-bold'>Real Price : $ {book?.price}</p>
            <p className='font-bold'>ISBN : {book?.isbn}</p>
            <p className='font-bold'>Category : {book?.category}</p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {book?.abstract}
          </p>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3">
            <button className="bg-blue-700 text-white px-4 py-2 rounded">
              <FaArrowLeft /> Back
            </button>
            <button onClick={makePayment} className="bg-green-700 text-white px-4 py-2 rounded">
              Buy $ 23
            </button>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-[rgba(0,0,0,0.25)]">

          <div className="bg-white w-[720px] rounded-lg shadow-2xl overflow-hidden">

            {/* HEADER */}
            <div className="bg-blue-950 text-white px-4 py-2 flex justify-between items-center rounded-t">
              <h3>Book Photos</h3>
              <FaTimes
                className="cursor-pointer"
                onClick={() => setShowModal(false)}
              />
            </div>

            {/* BODY */}
            <div className="p-6">

              <p className="text-blue-500 mb-4 flex items-center gap-2">
                <FaCamera />Camera click of the book in the hand of seller
              </p>

              <div className="flex gap-6 justify-center">

                {
                  book?.uploadImg?.length > 0 ? book.uploadImg.map((filename, index) => (
                    <img key={index} width={'250px'} height={'250px'} className='mx-2 md:mb-0 mb-2' src={`${server_url}/uploads/${filename}`} alt="book images" />
                  )) :
                    <p>Nothing to display</p>
                }

              </div>

            </div>

          </div>

        </div>
      )}
    </div>
  )
}

export default Viewbook
