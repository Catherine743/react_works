import React, { useContext, useEffect, useState } from 'react'
import { FaCog, FaHome } from 'react-icons/fa'
import { FaBook, FaBriefcase, FaPowerOff } from 'react-icons/fa6'
import { getAllBooksAPI } from '../../services/allAPI'
import { Link } from 'react-router-dom'
import { searchContext } from '../../ContextAPI/ShareContext'

function Allbook() {

  const { searchKey, setSearchKey } = useContext(searchContext)
  const [token, setToken] = useState("")
  const [allBooks, setAllBooks] = useState([])

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getallBooks(userToken)
    }
  }, [searchKey])

  const getallBooks = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getAllBooksAPI(reqHeader, searchKey)
    if (result.status == 200) {
      setAllBooks(result.data)
    }
    else {
      console.log(result);

    }
  }

  console.log(allBooks);

  return (
    <div className="flex flex-col bg-gray-100">
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
      {token ? <div>
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
            <div className='flex justify-center items-center flex-col my-5'>
              <h1 className='text-3xl font-bold my-5'>Collections</h1>
              <div className='flex my-5'>
                <input type="text" value={searchKey}
                  className='p-2 border border-gray-200 text-black w-100 placeholder-gray-600'
                  placeholder='Search By Title'
                  onChange={e => setSearchKey(e.target.value)}
                />
                <button className='bg-blue-900 text-white p-2'>Search</button>
              </div>
            </div>
            {/* BOOK GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

              {allBooks?.length > 0 ? allBooks?.map(book => (
                <div className="shadow rounded p-3 mx-4 my-3">
                  <img
                    src={book?.imageUrl}
                    width={'100%'}
                    height={'300px'}
                    alt='book'
                  />
                  <div className="flex flex-col justify-center items-center mt-4">
                    <h4 className="text-blue-700 font-bold text-lg">{book?.author}</h4>
                    <p className="text-gray-500">{book?.title}</p>
                    <Link to={'/view/:id'} className='bg-blue-800 p-2 text-white'>View</Link>
                  </div>
                </div>)) : <p className='font-bold'>Loading...</p>}
            </div>
          </div>
        </div>
      </div>
        :
        <div className='w-full h-screen flex items-center justify-center flex-col'>
          <img className='w-50' src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="lock screen" />
          <p className='text-lg font-bold my-15'>Please <Link to={'/login'} className='text-blue-600 underline'>Login</Link> to explore more...</p>
        </div>
      }
    </div>
  )
}

export default Allbook
