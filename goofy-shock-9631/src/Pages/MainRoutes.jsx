import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Mens from './Mens'

const MainRoutes = () => {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Mens/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
