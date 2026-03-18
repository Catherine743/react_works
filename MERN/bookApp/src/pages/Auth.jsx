import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Auth({register}) {

  const [viewPasswordStatus, setViewPasswordStatus] = useState(false)
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(https://img.freepik.com/free-photo/open-book-more-books_23-2148213810.jpg?t=st=1721778194~exp=1721781794~hmac=ccb27007259d20e3b0ac7ba53bfb8abba03070caa5b56b85535d3cbc7e9a87f9&w=1060)] bg-cover bg-center'>
      <div className='p-10'>
        <h1 className='text-3xl font-bold text-center text-white'>Book Store</h1>
        <div style={{ width : "400px"}} className='bg-black text-white p-5 flex flex-col justify-center items-center my-5'>
          <div style={{ width : "100px", height : "100px", borderRadius : '50%'}} className='border mb-5 flex justify-center items-center'>
            <CiUser className='text-3xl' />
          </div>
          <h1 className='text-2xl'>{register? "Register" : "Login"}</h1>

          <form action="" className='my-5 w-full'>
            {
              register &&
              <input placeholder='Username' type='text' className='bg-white p-3 w-full rounded placeholder-gray-500 my-5 text-black' />
            }
            <input placeholder='Email ID' type='email' className='bg-white p-3 w-full rounded placeholder-gray-500 mb-5 text-black ' />
            <div className='flex items-center'>
              <input placeholder='Password' type={viewPasswordStatus? "text" : "password"} className='bg-white mb-5 p-3 w-full rounded placeholder-gray-500 text-black'/>
              {!viewPasswordStatus? 
               <FaEye onClick={() => setViewPasswordStatus(!viewPasswordStatus)} style={{marginLeft: '-30px' }} className='text-gray-500 cursor-pointer' />
               :
               <FaEyeSlash onClick={() => setViewPasswordStatus(!viewPasswordStatus)} style={{marginLeft : '-30px'}} className='text-gray-500 cursor-pointer' />
              }
            </div>
            <div className='flex justify-between mb-5'>
              <p className='text-xs text-orange-300'>*Never share your password with others</p>
              <button className='text-xs underline'>Forgot Password</button>
            </div>
            <div className='text-center'>
              {
                register?
                <button type='button' className='bg-green-700 p-2 w-full rounded'>Register</button>
                :
                <button type='button' className='bg-green-700 p-2 w-full rounded'>Login</button>
              }
            </div>
            <div className='my-5 text-center'>
              {
                register?
                <p className='text-blue-600'>Are you already a user?
                <Link to={'/login'} className='underline ms-5'>Login</Link>
                </p>
                :
                <p className='text-blue-600'>Are you a new user?
                <Link to={'/register'} className='underline ms-5'>Register</Link>
                </p>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
