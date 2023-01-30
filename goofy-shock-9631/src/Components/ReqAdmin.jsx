import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const ReqAdmin = ({children}) => {
    const isAuth=useSelector(store=>store.AuthReducer.isAuth)
    const isAdmin=useSelector(store=>store.AuthReducer.isAdmin)
    const location=useLocation()


  if(!isAuth && !isAdmin){
    alert("You are not authorized, Login as an admin first")
    return <Navigate to ="/login" replace={true} state={{data:location.pathname}}/>
  }
  return children;
 }

export default ReqAdmin
