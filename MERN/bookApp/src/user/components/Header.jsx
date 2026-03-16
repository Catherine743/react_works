import React from 'react'
import { CiTwitter, CiUser } from 'react-icons/ci'
import { FaBarsProgress, FaFacebookF, FaInstagram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='grid grid-cols-3 p-3'>
    {/* logo */}
     <div className='flex items-center'>
        <img width={"50px"} height={"50px"} src="https://openclipart.org/image/800px/svg_to_png/275692/1489798288.png" alt="logo" />
        <h1 className='text-2xl font-bold ms-2 md:hidden'>BOOKSTORE</h1>
     </div>

    {/* title */}
     <div className='md:flex justify-center items-center hidden'> 
        <h1 className='text-3xl font-bold'>BOOKSTORE</h1>
     </div>

     {/* login block */}
     <div className='md:flex justify-end items-center hidden'>
        <FaInstagram />
        <CiTwitter />
        <FaFacebookF />

        {/* login link */}
        <Link to={"/login"}>
            <button className='border border-black flex rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
               <CiUser />Login
            </button>
        </Link>
        
     </div>
    </div>
  )
}

export default Header
