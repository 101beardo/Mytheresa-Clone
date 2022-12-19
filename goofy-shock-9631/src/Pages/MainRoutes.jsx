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

const MainRoutes = () => {
  return (
    <div>
     <Navbar/>
     <Dropdown/>
      <Routes>
     <Route path='/arrival' element={<Arrival/>}/>
      <Route path='/mens' element={<Mens/>}/>
      <Route path='/admin' element={<Admin/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/womens' element={<WomenPage/>}/>
        <Route path='/life' element={<Life/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default MainRoutes
