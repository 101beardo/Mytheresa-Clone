import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dropdown from '../Components/Dropdown'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Admin from './Admin'
import { Kids } from './Kids'
import Life from './Life'
import Mens from './Mens'
import Wishlist from './Wishlist'
import WomenPage from './WomenPage';
import Arrival from '../Components/Arrival'
import LoginRegister from '../Components/Login_Register'
//import Login from '../Components/Login'
import Cart from './Cart'
import Add from './Add'
import SinglePage from './SinglePage';

const MainRoutes = () => {
  return (
    <div>
     <Navbar/>
     <Dropdown/>
      <Routes>
      <Route path='/' element={<WomenPage/>}/>
        <Route path='/arrival' element={<Arrival/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/product/:id" element={<SinglePage />} />
        <Route path='/login' element={<LoginRegister/>}/>
        {/* <Route path='/logini' element={<Login/>}/> */}
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/womens' element={<WomenPage/>}/>
        <Route path='/life' element={<Life/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default MainRoutes
