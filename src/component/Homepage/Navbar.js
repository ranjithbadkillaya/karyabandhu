import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav_container'>
        <div className='Logo'>
          <img src='logo/Websitelogo.svg'alt='websitelog'/>
        </div>
        <div className='nav_menu'>
            <p>Home</p>
            <p>About Us</p>
            </div>
        <div className='nav_login'>
           <Link to="/login">
        <button className='nav_btn1'>Login</button>
      </Link>
             <Link to="/signup">
        <button className='nav_btn2'>Sign Up</button>
      </Link>
        </div>
      
    </div> 
  )
}

export default Navbar
