import React from 'react'
import { BsCollection } from 'react-icons/bs'
import { CiHome, CiSettings } from 'react-icons/ci'
import { Link } from 'react-router-dom'

function Adminsidebar() {
  return (
    <div>
      <div className='bg-blue-100 md:min-h-screen h-fit md:flex text-center flex-col py-10'>
        <div className='flex justify-center'>
          <img style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" alt="admin profile" />

        </div>
        <h1 className='text-xl font-bold my-5'>adminName</h1>
        <div className='md:text-left mx-auto mt-10'>
          <div className='mt-3'>
            <Link to={'/admin/home'}><CiHome />Home</Link>
          </div>
          <div className='mt-3'>
            <Link to={'/admin/collection'}><BsCollection />Collections</Link>
          </div>
          <div className='mt-3'>
            <Link to={'/admin/profile'}><CiSettings />Profile</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminsidebar
