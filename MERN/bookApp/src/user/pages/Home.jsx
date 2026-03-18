import React from 'react'
import Header from '../components/Header'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

function Home() {
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
          />

          <button className="bg-blue-600 text-white px-6">
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


          {/* Card 1 */}
          <div className="bg-white shadow rounded">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <h4 className="text-blue-600">Inspirational Book</h4>
              <p className="text-gray-500">Motivation & Life</p>
              <p className="mt-2 font-semibold">$ 200</p>
            </div>
          </div>


          {/* Card 2 */}
          <div className="bg-white shadow rounded">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c"
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <h4 className="text-blue-600">Knowledge Book</h4>
              <p className="text-gray-500">Education</p>
              <p className="mt-2 font-semibold">$ 90</p>
            </div>
          </div>


          {/* Card 3 */}
          <div className="bg-white shadow rounded">
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <h4 className="text-blue-600">Long Walk to Freedom</h4>
              <p className="text-gray-500">Biography</p>
              <p className="mt-2 font-semibold">$ 200</p>
            </div>
          </div>


          {/* Card 4 */}
          <div className="bg-white shadow rounded">
            <img
              src="https://images.unsplash.com/photo-1519682337058-a94d519337bc"
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <h4 className="text-blue-600">Story Book</h4>
              <p className="text-gray-500">Fiction</p>
              <p className="mt-2 font-semibold">$ 123</p>
            </div>
          </div>


        </div>

        <button className="mt-10 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
          Explore More
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


      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          <div>
            <h3 className="font-semibold mb-4">ABOUT US</h3>
            <p className="text-gray-300">
              Our bookstore offers a wide range of books from fiction, education,
              biographies and more. Discover your next favorite book today.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">NEWSLETTER</h3>
            <p className="text-gray-300 mb-3">
              Stay updated with our latest trends
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email ID"
                className="px-3 py-2 w-full text-black"
              />

              <button className="bg-yellow-400 px-4">
                Subscribe
              </button>
            </div>

          </div>

          <div>
            <h3 className="font-semibold mb-4">FOLLOW US</h3>
            <p className="text-gray-300 mb-3">Let us be social</p>

            <div className="flex space-x-4 text-xl">
              <FaInstagram />
              <FaTwitter />
              <FaFacebookF />
              <FaLinkedin />
            </div>

          </div>

        </div>

        <p className="text-center text-gray-400 mt-10 text-sm">
          Copyright © 2023 All rights reserved | This website is made by ❤️ Amiya Kiran
        </p>

      </footer>

    </div>
  )
}

export default Home
