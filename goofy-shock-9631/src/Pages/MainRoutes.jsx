import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Kids } from './Kids'
import Mens from './Mens'

const MainRoutes = () => {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/kids' element={<Kids/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
