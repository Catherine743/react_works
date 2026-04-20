import React, { useContext, useEffect, useState } from 'react'
import { FaCog, FaHome } from 'react-icons/fa'
import { FaBarsProgress, FaBook, FaBriefcase, FaPowerOff } from 'react-icons/fa6'
import { getAllBooksAPI } from '../../services/allAPI'
import { Link } from 'react-router-dom'
import { searchContext } from '../../ContextAPI/ShareContext'
import Header from '../components/Header'

function Allbook() {

  const { searchKey, setSearchKey } = useContext(searchContext)
  const [token, setToken] = useState("")
  const [allBooks, setAllBooks] = useState([])
  const [categories, setCategories] = useState([])
  const [tempBooks, setTempBooks] = useState([])

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
      setTempBooks(result.data)
      // add categories
      const tempCategory = result.data.map(item => item.category)
      setCategories([...new Set(tempCategory)])
    }
    else {
      console.log(result);

    }
  }

  const filterBook = (category) => {
    if (category != "no filter") {
      setAllBooks(tempBooks.filter(item => item.category == category))
    }
    else {
      setAllBooks(tempBooks)
    }
  }

  return (
    <div className="flex flex-col bg-gray-100">
      <Header />
      {token ?
        <div>
          {/* MAIN SECTION */}
          <div className="flex flex-1">
            {/* SIDEBAR */}
            <div className="w-64 bg-blue-200 p-6">
              <div className="col-span-1">
                <div className="flex justify-between">
                  <h1 className="text-2xl font-semibold">Filter</h1>
                  <button className="text-2xl md:hidden"><FaBarsProgress /></button>
                </div>
                <div className='md:block hidden'>
                  {categories?.map((item, index) => (
                    <div key={index} className="mt-3">
                      <input name='filter' type="radio" id={item} onClick={() => filterBook(item)} />
                      <label className="ms-3" htmlFor={item}>
                        {item}
                      </label>
                    </div>
                  ))}
                  <div className="mt-3">
                    <input type="radio" id="noFilter" name="filter" onClick={() => filterBook("no filter")} />
                    <label className="ms-3">
                      No-Filter
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* CONTENT */}
            <div className="flex-1 p-10">
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
                  <div className="shadow rounded p-3 mx-4 my-3" hidden={book.status == 'pending' || book.status == 'sold'}>
                    <img
                      src={book?.imageUrl}
                      width={'100%'}
                      height={'300px'}
                      alt='book'
                    />
                    <div className="flex flex-col justify-center items-center mt-4">
                      <h4 className="text-blue-700 font-bold text-lg">{book?.author}</h4>
                      <p className="text-gray-500">{book?.title}</p>
                      <Link to={`/view/${book?._id}`} className='bg-blue-800 p-2 text-white'>View Book</Link>
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
    </div >
  )
}

export default Allbook
