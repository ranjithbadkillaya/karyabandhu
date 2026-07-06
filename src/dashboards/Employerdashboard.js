import React from 'react'
import './workers.css'

function Employerdashboard() {
    return (
        <div className='main_container'>
            <div className='main_container2'>
                <div className='logo'>Karybandhu</div>
                <div className='menu'>
                    <p>Dashboard</p>
                    <p>Profile</p>
                    <p>Settings</p>
                    <hr></hr>
                    <p>Logout</p>
                </div>
            </div>
            <div className='main_container3'>
                <div className='container6'>
                    <div className='location'>
                        <p>HSR Layout, Bangalore</p>
                    </div>
                    <div className='profile'>Ravi</div>
                </div>
                <div className='container7'>
                    <h1>Namste Ravi</h1>
                    <p>Find work, earn and support your family</p>
                </div>
                <div className='container8'>
                    <div className='card3'>
                        <div className='icon_picture'></div>
                        <div className='details'>
                            <p>Active Job</p>
                            <h3>8</h3>
                        </div>
                    </div>

                    <div className='card4'>
                        <div className='icon_picture'></div>
                        <div className='details'>
                            <p>Application</p>
                            <h3>18</h3>
                        </div>
                    </div>

                    <div className='card5'>
                        <div className='icon_picture'></div>
                        <div className='details'>
                            <p>Hired Workers</p>
                            <h3>8</h3>
                        </div>
                    </div>
                </div>
                <div className='container9'>
                  <div className='work_notification'>
                      <h4>Recent Job</h4>
                   <div className='recent_job'>
                    <div className='work_post'> 
                       <div className='working_details'>
                        <h4>Painter needed</h4>
                        <p>Kormangala, Bangalore</p>
                       </div>
                       <div className='worker_application'>
                        <h3>6</h3>
                        <p>application</p>
                       </div>
                    </div>
                    </div> 
                  </div>
                  <div className='applicants_notification'>
                    <h4>Recent Application</h4>
                    <div className='recent_worker'>
                    <div className='user_profile'> 
                    <div className='user_details'>
                    <div className='user_profile_picture'></div>
                       <div className='user'>
                        <h4>Ramesh</h4>
                        <p>painter</p>
                        <p>*4.5</p>
                       </div>
                        
                         </div>
                        <div className='btn'>
                            <button>Accept</button>
                            <button>Reject</button>
                        </div>
                   
                  </div>
                  </div>
                  </div>
                </div>

            </div>

        </div>
    )
}

export default Employerdashboard
