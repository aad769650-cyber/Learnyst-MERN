import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({children}) => {


    const isAuth=localStorage.getItem("isAuthenticate")
const navigate=useNavigate()
    console.log("isAuth",isAuth);



useEffect(()=>{
        if(!isAuth){
        return navigate("/adminLogin")
    }
    
})
  return (children )
}
