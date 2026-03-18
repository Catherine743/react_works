import React from 'react'
import { FaCog, FaHome } from 'react-icons/fa'
import { FaBook, FaBriefcase, FaPowerOff } from 'react-icons/fa6'

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
    title: "The Psychology of Money",
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
    <div className="h-screen flex flex-col bg-gray-100">

      {/* TOP HEADER */}
      <div className="flex justify-between items-center px-6 py-3 bg-gray-100 border-b">

        <div className="flex items-center gap-3">
          <img
            src="https://openclipart.org/image/800px/svg_to_png/275692/1489798288.png"
            className="w-10"
          />
          <h1 className="text-xl font-serif">BOOK STORE</h1>
        </div>

        <button className="flex items-center gap-2 border px-4 py-1 rounded hover:bg-black hover:text-white">
          <FaPowerOff /> logout
        </button>

      </div>

      {/* BLUE BAR */}
      <div className="bg-blue-950 text-white px-6 py-2 text-right text-sm">
        Welcome, Admin!
      </div>

      {/* MAIN SECTION */}
      <div className="flex flex-1">

        {/* SIDEBAR */}
        <div className="w-64 bg-blue-200 p-6">

          <p className="mb-6">Ann</p>

          <ul className="space-y-4 text-gray-800">

            <li className="flex items-center gap-3">
              <input type="radio" name="menu" />
              <FaHome />
              <span>Home</span>
            </li>

            <li className="flex items-center gap-3 font-semibold">
              <input type="radio" name="menu" defaultChecked />
              <FaBook />
              <span>All Books</span>
            </li>

            <li className="flex items-center gap-3">
              <input type="radio" name="menu" />
              <FaBriefcase />
              <span>Careers</span>
            </li>

            <li className="flex items-center gap-3">
              <input type="radio" name="menu" />
              <FaCog />
              <span>Settings</span>
            </li>

          </ul>

        </div>

        {/* CONTENT */}
        <div className="flex-1 p-10">

          {/* TITLE */}
          <h2 className="text-2xl font-serif text-center mb-6">
            All Books
          </h2>

          {/* TABS */}
          <div className="flex justify-center gap-3 mb-10">
            <button className="px-4 py-1 border rounded bg-gray-200">
              Book List
            </button>
            <button className="px-4 py-1 border rounded">
              Users
            </button>
          </div>

          {/* BOOK GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

            {books.map((book, index) => (
              <div key={index} className="bg-white shadow-sm p-3 text-center">

                <img
                  src={book.image}
                  className="w-full h-64 object-cover mb-3"
                />

                <h4 className="text-blue-600 text-sm">{book.author}...</h4>
                <p className="text-gray-500 text-sm">{book.title}...</p>
                <p className="text-blue-500 text-sm">${book.price}</p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Allbook
