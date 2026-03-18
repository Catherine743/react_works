import React from 'react'
import { FaCog, FaHome } from 'react-icons/fa'
import { FaBook, FaPowerOff, FaUser } from 'react-icons/fa6'

function Allbook() {
  const books = [
    {
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      author: "Dan Brown",
      title: "The Da Vinci Code",
      price: 20
    },
    {
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
      author: "Héctor García",
      title: "Ikigai",
      price: 15
    },
    {
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
      author: "Morgan Housel",
      title: "Psychology of Money",
      price: 23
    },
    {
      image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
      author: "Rhonda Byrne",
      title: "The Secret",
      price: 28
    }
  ]
  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-blue-200 p-6 hidden md:block">
        <h2 className="text-xl font-semibold mb-6">Ann</h2>

        <ul className="space-y-4">
          <li className="flex items-center gap-2 cursor-pointer">
            <FaHome /> Home
          </li>
          <li className="flex items-center gap-2 font-semibold">
            <FaBook /> All Books
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <FaUser /> Careers
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <FaCog /> Settings
          </li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* TOP NAVBAR */}
        <div className="flex justify-between items-center bg-white px-6 py-4 shadow">
          <div className="flex items-center gap-2">
            <img
              src="https://openclipart.org/image/800px/svg_to_png/275692/1489798288.png"
              className="w-10"
            />
            <h1 className="text-xl font-bold">BOOK STORE</h1>
          </div>

          <button className="flex items-center gap-2 border px-4 py-1 rounded hover:bg-black hover:text-white">
            <FaPowerOff /> Logout
          </button>
        </div>

        {/* SUB HEADER */}
        <div className="bg-blue-900 text-white px-6 py-2 text-right">
          Welcome, Admin!
        </div>

        {/* CONTENT */}
        <div className="p-6">

          <h2 className="text-2xl font-semibold text-center mb-6">
            All Books
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-6">
            <button className="border px-4 py-1 rounded bg-gray-200">
              Book List
            </button>
            <button className="border px-4 py-1 rounded">
              Users
            </button>
          </div>

          {/* BOOK GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {/* CARD */}
            {books.map((book, index) => (
              <div key={index} className="bg-white shadow rounded p-3">
                <img
                  src={book.image}
                  className="w-full h-60 object-cover rounded"
                />
                <h3 className="text-blue-600 mt-2">{book.author}</h3>
                <p className="text-gray-500 text-sm">{book.title}</p>
                <p className="text-blue-500 font-semibold">${book.price}</p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Allbook
