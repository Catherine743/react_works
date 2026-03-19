import React, { useState } from 'react'
import Adminheader from '../Components/Adminheader';
import Adminsidebar from '../Components/Adminsidebar';

function Admincollection() {
  const [bookListStatus, setBookListStatus] = useState(true);
  const [usersListStatus, setUsersListStatus] = useState(false);
  return (
    <div>
      <Adminheader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <Adminsidebar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl text-center font-bold'>All Collections</h1>
          {/* tabs */}
          <div className='flex justify-center items-center my-8 font-medium text-lg'>
            <p onClick={() => { setBookListStatus(true); setUsersListStatus(false); }} className={bookListStatus ?
              'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' :
              'p-4 border-b border-gray-200 cursor-pointer'}>Books</p>
            <p onClick={() => { setUsersListStatus(true); setBookListStatus(false); }} className={usersListStatus ?
              'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' :
              'p-4 border-b border-gray-200 cursor-pointer'}>Users</p>
          </div>
          {/* contents */}
          {
            bookListStatus &&
            <div className='md:grid grid-cols-4 w-full my-5'>
              {/* duplicate card */}
              <div className='shadow rounded p-3 m-4'>
                <img src="" alt="book" width={'100%'} height={'300px'} />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <p className='text-blue-700 font-bold text-lg'>Author</p>
                  <p>Title</p>
                  <p>$ 444</p>
                  <button
                    className='p-3 rounded border bg-green-700 w-full text-white hover:border-green-600 hover:bg-white 
                    hover:text-green-700'>
                    Approve
                  </button>
                  <div className='flex justify-end w-full'>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/017/177/791/original/round-check-mark-symbol-with-transparent-background-free-png.png"
                      alt="tick mark" width={'40px'} height={'40px'} />
                  </div>
                </div>
              </div>
            </div>
          }
          {
            usersListStatus &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate card */}
              <div className='shadow rounded p-2 m-2 bg-gray-200'>
                <p className='text-red-700 font-bold text-md'>ID: </p>
                <div className='flex items-center mt-3'>
                  <img style={{ borderRadius: '50%' }} width={'100px'} height={'100px'}
                    src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" alt="user" />
                  <div className='flex flex-col ml-3 w-full'>
                    <p className='text-blue-800 font-bold text-lg'>Username</p>
                    <p>Email</p>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Admincollection
