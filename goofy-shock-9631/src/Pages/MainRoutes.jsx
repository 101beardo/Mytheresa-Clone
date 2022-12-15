import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Kids } from './Kids'
import Life from './Life'
import Mens from './Mens'
import WomenPage from './WomenPage'
const MainRoutes = () => {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/womens' element={<WomenPage/>}/>
        <Route path='/life' element={<Life />}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
