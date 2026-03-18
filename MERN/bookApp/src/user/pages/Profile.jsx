import React, { useState } from 'react'
import Header from '../components/Header'
import { FaUserCircle } from 'react-icons/fa'
import Edit from '../components/Edit'

function Profile() {
  const [sellBookStatus, setSellBookStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);

  return (
    <div>
      <Header />
      <div style={{ height: '200px' }} className='bg-black'></div>
      <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }} className='bg-white p-3'>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
      </div>
      <div className='md:flex justify-between px-20 mt-5'>
        <div className='flex items-center'>
          <h1 className='font-bold md:text-3xl text-2xl'>Username</h1>
          <FaUserCircle className='text-blue-400 ms-3' />
        </div>
        <Edit />
      </div>
      {/* paragraph */}
      <p className='md:px-20 px-5 my-5 text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate quibusdam aliquid doloremque quae a temporibus
        assumenda dolorum, fuga nostrum officiis, iure ut mollitia. Tempore a eligendi et cupiditate provident.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptas, ut dicta explicabo labore in suscipit animi
        commodi magni assumenda accusamus. Debitis, fugiat. Dolorum quas asperiores laboriosam perferendis sunt aliquid.
      </p>
      {/* tabs */}
      <div className='md:px-40'>
        <div className='flex justify-center items-center my-8 font-medium text-lg m-3'>
          <p onClick={() => { setSellBookStatus(true); setBookStatus(false); setPurchaseStatus(false) }} className={sellBookStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' :
            'p-4 border-b border-gray-200 cursor-pointer'}>Sell Book</p>
          <p onClick={() => { setBookStatus(true); setSellBookStatus(false); setPurchaseStatus(false) }} className={bookStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' :
            'p-4 border-b border-gray-200 cursor-pointer'}>Book Status</p>
          <p onClick={() => { setPurchaseStatus(true); setSellBookStatus(false); setBookStatus(false) }} className={purchaseStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' :
            'p-4 border-b border-gray-200 cursor-pointer'}>Purchase Book History</p>
        </div>
      </div>

      {/* sell book status */}

      {
        sellBookStatus &&
        <div>
          <div className='p-10 my-20 mx-5 bg-gray-200'>
            <div className='text-center text-3xl font-medium'>Book Details</div>
            <div className='md:grid grid-cols-2 mt-10 w-full'>
              <div className='px-3'>
                <div className='mb-3'>
                  <input type="text" placeholder='Title' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder='Author' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder='No. of Pages' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder='Image URL' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder='Price' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder='Discount Price' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <textarea placeholder='Abstract' name="" id="" rows={'5'} className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' >
                  </textarea>
                </div>
              </div>
              <div className='px-3'>
                <div className='mb-3'>
                  <input type="text" placeholder='Publisher' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder='Language' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder='ISBN' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder='Category' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3 flex justify-center items-center mt-10'>
                  <label htmlFor="bookImage">
                    <input type="file" name='' id='bookImage' className='hidden' />
                    <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" width={'200px'} height={'200px'} alt="book" />
                  </label>
                </div>
              </div>
            </div>
            {/* footer */}
            <div className='p-3 w-full flex md:justify-end justify-center mt-8'>
              <button className='py-2 px-3 rounded bg-gray-600 text-white hover:bg-white hover:border hover:text-black'>Reset</button>
              <button className='py-2 px-3 rounded bg-blue-900 text-white ms-3 hover:bg-white hover:border hover:text-blue-600 hover:border-blue-600'>Submit</button>
            </div>
          </div>
        </div>
      }

      {/* book status */}

      {
        bookStatus &&
        <div className='p-10 my-20 shadow rounded'>
          {/* duplicate div according to book */}
          <div className='p-5 rounded mt-4 bg-gray-100'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
              <div className='px-4'>
                <h1 className='text-2xl'>Title</h1>
                <h2 className='text-xl'>Author</h2>
                <h3 className='text-lg text-blue-500'>$ Discount Price</h3>
                <p className='text-justify'>Abstract</p>
                <div className='flex mt-3'>
                  <img width={'80px'} height={'80px'} src="https://pngimg.com/uploads/approved/approved_PNG1.png" alt="approved icon" /> :
                  <img width={'120px'} height={'120px'} src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="sold icon" />
                </div>
              </div>
              <div className='px-4 mt-4 md:mt-0'>
                <img src="gg" alt="book" className='w-full' />
                <div className='mt-4 flex justify-end'>
                  <button className='py-2 px-3 rounded bg-red-600 text-white ms-3 hover:bg-white hover:border hover:text-red-600 hover:border-red-600'>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {/* purchase history */}
      {
        purchaseStatus &&
        <div className='p-10 my-20 shadow rounded'>
          {/* duplicate div according to book */}
          <div className='p-5 rounded mt-4 bg-gray-100'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
              <div className='px-4'>
                <h1 className='text-2xl'>Title</h1>
                <h2 className='text-xl'>Author</h2>
                <h3 className='text-lg text-blue-500'>$ Discount Price</h3>
                <p className='text-justify'>Abstract</p>
                <div className='flex mt-3'>
                  <img width={'80px'} height={'80px'} src="https://pngimg.com/uploads/approved/approved_PNG1.png" alt="approved icon" /> :
                  <img width={'120px'} height={'120px'} src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="sold icon" />
                </div>
              </div>
              <div className='px-4 mt-4 md:mt-0'>
                <img src="" alt="book" className='w-full' />
              </div>
            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default Profile
