import React from 'react'
import Adminheader from '../Components/Adminheader'
import Adminsidebar from '../Components/Adminsidebar'
import { PiBookOpenTextBold } from 'react-icons/pi'
import { CiUser } from 'react-icons/ci'

function Adminhome() {
  return (
    <div>
      <Adminheader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <Adminsidebar />
        </div>
        <div className='col-span-4 p-10'>
          <div className='md:grid grid-cols-3'>
            <div className='md:px-5 my-5 md:my-0'>
              <div className='bg-blue-900 p-4 flex items-center text-5xl rounded text-white'>
                <PiBookOpenTextBold />
                <div className='text-center ms-10 md:ms-0'>
                  <h3 className='text-xl'>Total Number of Books</h3>
                  <h3 className='text-4xl'>100+</h3>
                </div>
              </div>
            </div>
            <div className='md:px-5 my-5 md:my-0'>
              <div className='bg-green-900 p-4 flex items-center text-5xl rounded text-white'>
                <CiUser />
                <div className='text-center ms-10 md:ms-0'>
                  <h3 className='text-xl'>Total Number of Users</h3>
                  <h3 className='text-4xl'>100+</h3>
                </div>
              </div>
            </div>
            <div className='md:px-5 my-5 md:my-0'>
              <div className='bg-yellow-600 p-4 flex items-center text-5xl rounded text-white'>
                <CiUser />
                <div className='text-center ms-10 md:ms-0'>
                  <h3 className='text-xl'>Total Number of Employees</h3>
                  <h3 className='text-4xl'>100+</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='md:grid grid-cols-2 p-5 mt-10'>
            <div className='my-5 md:my-10'>
              Bar Chart
            </div>
            <div className='my-5 md:my-10 md:ms-10 w-100 h-80'>
              Pie Chart
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminhome
