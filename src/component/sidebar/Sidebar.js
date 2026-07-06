import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

function Sidebar({onlogout}) {
  return (
          <div className='main_container2'>
        <div className='logo'>Karybandhu</div>
        <div className='menu'>
          <p>Dashboard</p>
          <Link to="/WorkerProfile"> <p>Profile</p></Link>
          <Link to="/help" className="menu_link">
            <p>Help</p>
          </Link>
          <hr></hr>
          <p
            onClick={onlogout}
            style={{ cursor: "pointer" }}
          >
            Logout
          </p>
        </div>
      </div>
  )
}

export default Sidebar
