import React, { useEffect, useState } from 'react'
import { CiTwitter, CiUser } from 'react-icons/ci'
import { FaBarsProgress, FaFacebookF, FaInstagram } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { server_url } from '../../services/server_url'

function Header() {

   const [listStatus, setListStatus] = useState(false);
   const [token, setToken] = useState("")
   const [dp, setDp] = useState("")
   const [dropDown, setDropDown] = useState(false)
   const navigate = useNavigate()

   useEffect(() => {
      if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
         const userToken = sessionStorage.getItem("token")
         setToken(userToken)
         const user = JSON.parse(sessionStorage.getItem("user"))
         setDp(user.picture)
      }
   }, [token])

   const logout = () => {
      sessionStorage.clear()
      setToken("")
      setDp("")
      setDropDown(false)
      navigate('/')
   }

   return (
      <div>
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
               <FaInstagram className='m-2' />
               <CiTwitter className='m-2' />
               <FaFacebookF className='m-2' />

               {/* login link */}
               {!token ? <Link to={"/login"}>
                  <button className='border border-black flex rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
                     <CiUser />Login
                  </button>
               </Link>
                  :
                  <div className="relative inline-block text-left">
                     <button onClick={() => setDropDown(!dropDown)} className="w-full bg-white px-3 py-2  shadow-xs hover:bg-gray-50">
                        <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} className="mx-2"
                           src={dp == "" ? "http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png" : dp.startsWith('https://lh3.googleusercontent.com/') ? dp : `${server_url}/uploads/${dp}`} alt="user" />
                     </button>
                     {dropDown && <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden">
                        <div className="py-1">
                           <Link className="block px-4 py-2 text-sm text-gray-700" to={'/profile'}>  Profile </Link>
                           <button className="block px-4 py-2 text-sm text-gray-700"> Logout</button>
                        </div>
                     </div>}
                  </div>}
            </div>
         </div>
         <nav className='w-full bg-black text-white md:flex justify-center items-center p-3'>
            {/* menubar & login */}
            <div className='flex justify-between items-center text-2xl md:hidden text-white'>
               <button onClick={() => setListStatus(true)}><FaBarsProgress className='text-white' /></button>
               {/* login link */}
               {!token ? <Link to={"/login"}>
                  <button className='border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
                     <CiUser />Login
                  </button>
               </Link>
                  :
                  <div className="relative inline-block text-left">
                     <button onClick={() => setDropDown(!dropDown)} className="w-full  px-3 py-2 bg-gray-500 shadow-xs hover:bg-gray-50 rounded">
                        <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} className="mx-2"
                           src={dp == "" ? "http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png" : dp.startsWith('https://lh3.googleusercontent.com/') ? dp : `${server_url}/uploads/${dp}`} alt="user" />
                     </button>
                     {dropDown && <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden">
                        <div className="py-1">
                           <Link className="block px-4 py-2 text-sm text-gray-700" to={'/profile'}> Profile </Link>
                           <button className="block px-4 py-2 text-sm text-gray-700"> Logout</button>
                        </div>
                     </div>}
                  </div>}
            </div>

            <ul className={listStatus ? 'flex flex-col' : 'md:flex justify-center items-center hidden'}>
               <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'}>HOME</Link></li>
               <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/all-books'}>BOOKS</Link></li>
               <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/careers'}>CAREERS</Link></li>
               <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'}>CONTACT</Link></li>
            </ul>
         </nav>
      </div>
   )
}

export default Header
