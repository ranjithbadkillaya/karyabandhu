import React from 'react'
import { Navigate } from 'react-router-dom'



function ProtectedRoute({ children }) {

  const isLoggedIn = localStorage.getItem("loginToken")

  if (isLoggedIn) {
    return children
  }

  return <Navigate to="/" />
}

export default ProtectedRoute