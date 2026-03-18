import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { FaArrowLeft, FaCamera, FaEye } from 'react-icons/fa6'

function Viewbook() {
  const [showModal, setShowModal] = useState(false);
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
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          className="w-64 h-80 object-cover"
        />

        {/* RIGHT CONTENT */}
        <div className="flex-1">

          <h2 className="text-2xl font-serif text-center mb-1">
            Becoming
          </h2>
          <p className="text-center text-blue-500 mb-4">
            - Michelle Obama
          </p>

          {/* DETAILS GRID */}
          <div className="grid grid-cols-3 gap-y-2 text-sm mb-4">
            <p>Publisher : Crown (North America)</p>
            <p>Language : English</p>
            <p>No. of pages : 448</p>

            <p>Seller Mail : neel@gmail.com</p>
            <p>Real Price : $ 25</p>
            <p>ISBN : 978-1-5247-6313-8</p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Becoming is a deeply personal memoir by Michelle Obama,
            chronicling her journey from childhood to becoming the First Lady.
            It explores identity, challenges, and life experiences, offering
            readers a powerful and inspiring story.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3">
            <button className="bg-blue-700 text-white px-4 py-2 rounded">
              <FaArrowLeft /> Back
            </button>
            <button className="bg-green-700 text-white px-4 py-2 rounded">
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

                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                  className="w-60 h-40 object-cover rounded"
                />

                <img
                  src="https://images.unsplash.com/photo-1519682337058-a94d519337bc"
                  className="w-60 h-40 object-cover rounded"
                />

              </div>

            </div>

          </div>

        </div>
      )}
    </div>
  )
}

export default Viewbook
