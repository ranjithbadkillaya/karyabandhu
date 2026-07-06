// import React, { useState } from 'react'
import './login.css'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate} from 'react-router-dom'
import { useState } from 'react';



function Login({ changepage }) {
  const navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] =useState("")
  // const [value,setvalue]=useState('')

//   function loginvalue(e) {

//   e.preventDefault()

//   localStorage.setItem("loginToken", "true")

//   navigate("/dashboard")
// }


function loginvalue(e) {
  e.preventDefault();

  localStorage.setItem("loginToken", "true");

  if (phoneNumber === "9535062385") {
    navigate("/Workerdashboards");
  } else {
    navigate("/Employerdashboard");
  }
}

  return (
    <div className='main'>

      <div className='main2'>
        <div className='loginpage'>
          <div className='welcomemsg'>
            <h2>Login</h2>
            <div className='welcome-msg-content'>
              <h1>Welcome Back!</h1>
              <p>simplify your workflow and <br></br>
                boost your productivity with <span className='appname'>Karybandhu</span></p>
              <br></br>
            </div>

          </div>


          <div className='details'>
            <p>Phone number</p>
             <input className='phoneNumber'  type='text' placeholder='Enter mobile number' maxLength={10} minLength={10}  value={phoneNumber}
  onChange={(e) => setPhoneNumber(e.target.value)} /> 
            <button onClick={loginvalue}>Continue</button>
          </div>
          <div className='otheroption'>
            <div className='hr'><p className='or'><hr /></p></div>
            <div className='login_icons'>
              <FcGoogle />
              <FaApple className="apple" />
              <FaFacebook className="facebook" /> 
            </div >
            <p className='register'>Not a Member? <span className='registeration'> <Link to="/signup">Register Now</Link> </span></p>
          </div>


        </div>


      </div>
      <div className='login_image'>
        <img src="/login_signup_images/loginimage.png" alt="Login" />
      </div>

    </div>
  )
}

export default Login
