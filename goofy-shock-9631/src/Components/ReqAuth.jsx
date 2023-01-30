import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
const ReqAuth = ({children}) => {
    const isAuth=useSelector(store=>store.AuthReducer.isAuth)
    const location=useLocation()


    if(!isAuth){
        alert("Kindly Login First")
      return <Navigate to ="/login" replace={true} state={{data:location.pathname}}/>
    }
    return children;
}

export default ReqAuth
