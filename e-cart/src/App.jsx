import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import View from './Pages/View'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Header />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/*" element={<Navigate to={'/'} />} />
       </Routes>
      <Footer />
    </>
  )
}

export default App
