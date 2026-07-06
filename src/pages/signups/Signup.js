import React, { useState } from 'react'
import './signup.css'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Signup({ changepage }) {
    const [namevalue, setnamevalue] = useState('')
    const [numbervalue, setnumbervalue] = useState('')
    const [emailvalue, setemailvalue] = useState('')
    const [passwordvalue, setpasswordvalue] = useState('')
    const [confpassvalue, setconfpassvalue] = useState('')
    const [selectrolevalue, setrolevalue] = useState('')

    function signupuavle(e) {
        e.preventDefault()
        console.log({ namevalue, numbervalue, emailvalue, passwordvalue, confpassvalue, selectrolevalue })

    }
    return (
        <div className='main'>
            <div className='signup_image'>
                <img src='login_signup_images/signupimage.png' alt='signupimage'/>
            </div>
            <div className='main2'>
                <div className='signuppage'>
                    <div className='signupdetails'>
                        <h2>Sign-Up</h2>
                        <h1>Create your Account</h1>
                        <p>Join <span>Karybandhu</span> and simplyfy your workflow <br></br> to get more done every day</p>
                    </div>

                    <div className='detail'>
                        <input onChange={(e) => setnamevalue(e.target.value)} type='text' placeholder='Full name' />
                        <input onChange={(e) => setnumbervalue(e.target.value)} type='text' placeholder='Phone number' maxLength={10} minLength={10} />
                        <input onChange={(e) => setemailvalue(e.target.value)} type='email' placeholder='Enter your email(optional)' />
                        <input onChange={(e) => setpasswordvalue(e.target.value)} type='password' placeholder='Password' />
                        <input onChange={(e) => setconfpassvalue(e.target.value)} type='password' placeholder='Confirm password' />
                        <p>Choose a Role</p>
                        <select className='roleselection' onChange={(e) => setrolevalue(e.target.value)} placeholder="Select Role" name='select role'>
                            <option>Labour/worker</option>
                            <option>Employer</option>
                        </select>
                        <div className='terms'>
                            <input type='checkbox' />
                            <p>I agree to the Terms & Conditions</p>
                        </div>

                        <button onClick={signupuavle}>Create Account</button>
                    </div>
                    <div className='otheroptions'>
                        <p className='or'>-----------OR-----------</p>
                        <div className='signup_icon'>
                            <FcGoogle />
                           <FaApple className="apple" />
                           <FaFacebook className="facebook" />   
                        </div>
                        <p className='register'>Already have account? <span className='registeration'> <Link to="/">Login</Link></span></p>
                    </div>

                </div>

            </div>


        </div>

    )
}

export default Signup
