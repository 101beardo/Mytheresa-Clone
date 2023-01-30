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
import Cart from './Cart'
import Add from './Add'
import SinglePage from './SinglePage';
import Checkout from './Checkout'
import Edit from '../Components/Edit'
import ReqAdmin from '../Components/ReqAdmin'
import ReqAuth from '../Components/ReqAuth'

const MainRoutes = () => {
  return (
    <div>
     <Navbar/>
     <Dropdown/>
      <Routes>
        <Route path='/' element={<WomenPage/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/womens' element={<WomenPage/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/life' element={<Life/>}/>
        <Route path='/arrival' element={<Arrival/>}/>
        
        <Route path="/product/:id" element={<SinglePage />} />
        <Route path='/login' element={<LoginRegister/>}/>
        
        
        <Route path='/admin' element={<ReqAdmin><Admin/></ReqAdmin>}/>
        <Route path='/add' element={<ReqAdmin><Add/></ReqAdmin>}/>
        <Route path='/edit/:id' element={<ReqAdmin><Edit/></ReqAdmin>}/>
        
        <Route path='/wishlist' element={<ReqAuth><Wishlist/></ReqAuth>}/>
        <Route path='/cart' element={<ReqAuth><Cart/></ReqAuth>}/>
        <Route path='/checkout' element={<ReqAuth><Checkout/></ReqAuth>}/>
        
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default MainRoutes
