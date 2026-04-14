import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { getHomeBooksAPI } from '../../services/allAPI'
import { searchContext } from '../../ContextAPI/ShareContext'
function Home() {

  // const [searchKey, setSearchKey] = useState("")
  const {searchKey, setSearchKey} = useContext(searchContext)
  const navigate = useNavigate()
  const [homeBooks, setHomeBooks] = useState([])

  useEffect(() => {
    getHomeBooks()
  }, [])

  const handleSearch = () => {
    if (!searchKey) {
      toast.warning("Please input Book title here!!")
    }
    else if (!sessionStorage.getItem("token")) {
      toast.warning("Please Login!!")
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    }
    else if (sessionStorage.getItem("token") && searchKey) {
      navigate('/all-books')
    }
    else {
      toast.error("Something went wrong!!!")
    }
  }

  const getHomeBooks = async () => {
    const result = await getHomeBooksAPI()
    if (result.status == 200) {
      setHomeBooks(result.data)
    }
    else {
      console.log(result);
    }
  }

  console.log(homeBooks);

  return (
    <div>
      <Header />
      <section className="bg-gray-500 h-[420px] flex flex-col items-center justify-center text-center text-white">

        <h1 className="text-5xl font-semibold mb-3">
          Wonderful Gifts
        </h1>

        <p className="text-lg mb-6">
          Give your family and friends a book
        </p>

        <div className="flex bg-white rounded-full overflow-hidden w-[420px]">
          <input
            type="text"
            placeholder="Search Books"
            className="px-4 py-2 w-full outline-none text-gray-700"
            onChange={e => setSearchKey(e.target.value)}
          />

          <button onClick={handleSearch} className="bg-blue-600 text-white px-6">
            Search
          </button>
        </div>

      </section>


      {/* New Arrivals */}
      <section className="py-16 bg-gray-100 text-center">

        <h3 className="text-sm tracking-widest text-gray-500">
          NEW ARRIVALS
        </h3>

        <h2 className="text-3xl font-semibold mb-10">
          Explore Our Latest Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {homeBooks.map((book, index) => (
            <div key={index} className="bg-white shadow-sm p-3 text-center">
              <img
                src={book.imageUrl}
                className="w-full h-64 object-cover mb-3"
              />
              <h4 className="text-blue-600 text-sm">{book.author}...</h4>
              <p className="text-gray-500 text-sm">{book.title}...</p>
              <p className="text-blue-500 text-sm">${book.price}</p>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
          <Link to={'/all-books'}>Explore More</Link>
        </button>

      </section>


      {/* Featured Author */}
      <section className="py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        <div>
          <h4 className="text-sm tracking-widest text-gray-500 mb-2">
            FEATURED AUTHORS
          </h4>

          <h2 className="text-3xl font-semibold mb-4">
            Captivates with every word
          </h2>

          <p className="text-gray-600 mb-4">
            Books have the power to inspire, educate and entertain readers.
            Great authors bring stories to life and help readers explore new worlds.
          </p>

          <p className="text-gray-600">
            Discover amazing authors and explore their masterpieces that leave a lasting impact.
          </p>

        </div>

        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
          className="rounded shadow-lg w-full h-[400px]"
        />

      </section>


      {/* Testimonials */}
      <section className="py-16 bg-gray-100 text-center">

        <h4 className="text-sm tracking-widest text-gray-500">
          TESTIMONIALS
        </h4>

        <h2 className="text-3xl font-semibold mb-8">
          See What Others Are Saying
        </h2>

        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
        />

        <h3 className="font-semibold text-lg">
          Treesa Joseph
        </h3>

        <p className="max-w-3xl mx-auto text-gray-600 mt-4">
          "This bookstore has an amazing collection of books. The website is easy to use
          and I always find something interesting to read."
        </p>

      </section>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
        transition={Bounce}
      />
    </div>
  )
}

export default Home
