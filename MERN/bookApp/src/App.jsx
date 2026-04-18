
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './user/pages/Home'
import Allbook from './user/pages/Allbook'
import Contact from './user/pages/Contact'
import Auth from './pages/Auth'
import Viewbook from './user/pages/Viewbook'
import Adminhome from './Admin/Pages/Adminhome'
import Preloader from './components/Preloader'
import { useState } from 'react'
import Admincollection from './Admin/Pages/Admincollection'
import Adminprofile from './Admin/Pages/Adminprofile'
import Profile from './user/pages/Profile'

function App() {
  
  const[loader, setLoader] = useState(true)

  setTimeout(() => {
    setLoader(false)
  }, 5000)

  return (
    <>
      <Routes>
        <Route path='/' element={loader? <Preloader /> : <Home />} />
        <Route path='/all-books' element={<Allbook />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register/>} />

        {/* user */}
        <Route path='/profile' element={<Profile />} />
        <Route path='/view/:id' element={<Viewbook />} />

        {/* admin */}
        <Route path='/admin/home' element={<Adminhome />} />
        <Route path='/admin/collection' element={<Admincollection />} />
        <Route path='/admin/profile' element={<Adminprofile />} />
      </Routes>
    </>
  )
}

export default App
