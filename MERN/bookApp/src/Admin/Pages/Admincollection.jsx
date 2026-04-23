import React, { useEffect, useState } from 'react'
import Adminheader from '../Components/Adminheader';
import Adminsidebar from '../Components/Adminsidebar';
import { getAllAdminBooksAPI, getAllAdminUsersAPI, getUpdateBookStatusAPI } from '../../services/allAPI';
import { server_url } from '../../services/server_url';
import { Bounce, toast, ToastContainer } from 'react-toastify';
function Admincollection() {
  const [bookListStatus, setBookListStatus] = useState(true);
  const [usersListStatus, setUsersListStatus] = useState(false);

  const [allBooks, setAllBooks] = useState([])
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    getAllBooks(token)
    getAllUsers(token)
  }, [])

  const getAllBooks = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getAllAdminBooksAPI(reqHeader)
    if (result.status == 200) {
      setAllBooks(result.data)
    }
    else {
      console.log(result);
    }
  }

  const getAllUsers = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getAllAdminUsersAPI(reqHeader)
    if (result.status == 200) {
      setAllUsers(result.data)
    }
    else {
      console.log(result);
    }
  }

  const getUpdateBooks = async (bookId) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await getUpdateBookStatusAPI(bookId, reqHeader)
      if (result.status == 200) {
        toast.success("Book Approved")
        getAllBooks(token)
      } else {
        console.log(result);
      }
    }
  }

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
              {allBooks?.length > 0 ? allBooks.map((book) => (
                <div key={book?._id} className='shadow rounded p-3 m-4'>
                  <img src={book?.imageUrl} alt="book" width={'100%'} height={'300px'} />
                  <div className='flex flex-col justify-center items-center mt-4'>
                    <p className='text-blue-700 font-bold text-lg'>{book?.author}</p>
                    <p>{book?.title}</p>
                    <p>$ {book?.price}</p>
                    { book?.status != "Approved"?
                    <button onClick={() => getUpdateBooks(book?._id)}
                      className='p-3 rounded border bg-green-700 w-full text-white hover:border-green-600 hover:bg-white 
                    hover:text-green-700'>
                      Approve
                    </button>
                    :
                    <div className='flex justify-end w-full'>
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/017/177/791/original/round-check-mark-symbol-with-transparent-background-free-png.png"
                        alt="tick mark" width={'40px'} height={'40px'} />
                    </div>}
                  </div>
                </div>
              )) : <p> Loading.....</p>}
            </div>
          }
          {
            usersListStatus &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate card */}
              {allUsers?.length > 0 ? allUsers.map(user => (
                <div key={user?._id} className='shadow rounded p-2 m-2 bg-gray-200'>
                  <p className='text-red-700 font-bold text-md'>ID: {user?._id}</p>
                  <div className='flex items-center mt-3'>
                    {user?.picture ?
                      <img style={{ borderRadius: '50%' }} width={'100px'} height={'100px'}
                        src={user?.picture.startsWith('https://lh3.googleusercontent.com/') ?
                          user?.picture : `${server_url}/uploads/${user?.picture}`} alt="user" />
                      :
                      <img width={'100px'} height={'100px'} style={{ borderRadius: '50%' }}
                        src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" alt="user" />}
                    <div className='flex flex-col ml-3 w-full'>
                      <p className='text-blue-800 font-bold text-lg'>{user?.username}</p>
                      <p>{user?.email}</p>
                    </div>
                  </div>
                </div>
              )) : <p> Loading...</p>}
            </div>
          }
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
        transition={Bounce}
      />
    </div>
  )
}

export default Admincollection
