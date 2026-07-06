// import React, { useState } from 'react'
import { Routes, Route, } from 'react-router-dom'
import Signup from './pages/signups/Signup'
import Login from './pages/logins/Login'
//  import ProtectedRoute from './ProtectedRoute'
import Workerdashboards from './pages/dashboards/Workerdashboards'
import Employerdashboard from './pages/dashboards/Employerdashboard'
import EmployerProfile from './pages/profile/Employerprofile'
import WorkerProfile from './pages/profile/Workerprofile'
import PostJob from './pages/postjob/Postjob'
import JobDetails from "./pages/jobdescription/JobDescripton";
import Help from './pages/helppage/Help'
import Hired from './pages/hiredworkers/Hired'
import Emphelppage from './pages/helppage/Emphelppage'
import Home from './pages/Home'





function App() {
  // const [IsSignin,setIsSignin]=useState(false)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route
          path="/Workerdashboards"
          element={<Workerdashboards />}
        />
        <Route
          path="/Employerdashboard"
          element={<Employerdashboard />}
        />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path='employerprofile' element={<EmployerProfile />} />
        <Route path='workerprofile' element={<WorkerProfile />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/editjob/:id" element={<PostJob />} />
        <Route path="/jobdetails/:id" element={<JobDetails />} />
        <Route path="/hiredworkers" element={<Hired />}
/>
        <Route path="/help" element={<Help/>} />
        <Route path="/emphelp" element={<Emphelppage/>} />



      </Routes>

    </div>
  )
}

export default App
