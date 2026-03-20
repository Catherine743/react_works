import React from 'react'
import Adminheader from '../Components/Adminheader'
import Adminsidebar from '../Components/Adminsidebar'

function Adminprofile() {
  return (
    <div>
      <Adminheader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <Adminsidebar />
        </div>
        <div className='col-span-4'>
          <h1 className='text-3xl font-bold text-center my-5'>Settings</h1>
          <div className='md:grid grid-cols-2 gap-5 mx-5 items-center'>
            <div>
              <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nihil neque exercitationem possimus aut. Blanditiis illo magni quas, quae ipsa modi commodi quaerat eum sed
                nesciunt iure provident, autem in temporibus?</p>
              <p className='text-justify mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident blanditiis tempora perferendis quis voluptatibus earum necessitatibus.
                Illum quia illo tempora sed vel, debitis possimus rem ullam corrupti reiciendis numquam id.</p>
            </div>
            <div className='rounded bg-blue-100 p-10 flex justify-center items-center flex-col mt-10 md:mt-0'>
              <label htmlFor="adminPic" className='mb-3'>
                <img src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" style={{ width: '200px', height: '200px', borderRadius: '50%' }} alt="admin profile" />
                <input type="file" name='' id='adminPic' className='hidden' />
              </label>
              <div className='mb-3 w-full mt-20'>
                <input type="text" className='p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600' placeholder='Username'/>
              </div>
              <div className='mb-3 w-full'>
                <input type="text" className='p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600' placeholder='Password'/>
              </div>
              <div className='mb-3 w-full '>
                <input type="text" className='p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600' placeholder='Confirm Password'/>
              </div>
              <div className='my-3 w-full flex justify-evenly'>
                <button className='bg-orange-600 text-white px-4 py-2 rounded'>RESET</button>
                <button className='bg-green-900 text-white px-4 py-2 rounded'>UPDATE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminprofile
