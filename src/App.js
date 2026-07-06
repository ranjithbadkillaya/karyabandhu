// import React, { useState } from 'react'
import { Routes, Route, } from 'react-router-dom'
import Signup from './signups/Signup'
import Login from './logins/Login'
//  import ProtectedRoute from './ProtectedRoute'
import Workerdashboards from './dashboards/Workerdashboards'
import Employerdashboard from './dashboards/Employerdashboard'





function App() {
  // const [IsSignin,setIsSignin]=useState(false)
  return (
    <div>
      <Routes>
        {/* <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/Workerdashboards"
          element={<Workerdashboards />}
        />
        <Route
          path="/Employerdashboard"
          element={<Employerdashboard />}
        />

        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />



      </Routes>

    </div>
  )
}

export default App
