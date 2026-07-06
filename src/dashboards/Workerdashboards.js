import React from 'react'
import './workers.css'

function Workerdashboards() {
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
        <div className='container1'>
          <div className='location'>
            <p>HSR Layout, Bangalore</p>
          </div>
          <div className='profile'>Ravi</div>
        </div>
        <div className='container2'>
          <h1>Namste Ravi</h1>
          <p>Find work, earn and support your family</p>
        </div>
        <div className='container3'>
          <div className='card1'>
            <div className='profile_picture'></div>
            <div className='details'>
              <p>Proile</p>
              <h3>Ravi</h3>
              <p>Electrician</p>
              <p>*4.5</p>
              <p>View profile</p>
            </div>
          </div>
          <div className='Card2'>
            <div className='icon_symbol'></div>
            <div className='details'>
              <p>Earnings</p>
               <p>This Month</p>
              <h3>8,600</h3>
              <p>View earnigns</p>
            </div>
          </div>
        </div>
        <div className='container4'>
          <h4>Next Job</h4>
          <div className='job_details'>
            <div className='work_details'>
              <div className='icon_symbol'></div>
              <div className='details'>
                <h5>House painting</h5>
                <p>Kormangala,Bangalore</p>
                <p>Tomorrow,10:00 AM</p>
              </div>
            </div>
            <div className='payment'>
              <h4>1200</h4>
              <p>Full Day</p>
            </div>
            
            <button>Job Details</button>
          </div>
        </div>
        <div className='container5'>
          <h4>Job Notification</h4>
          <div className='job_notify'>
            <div className='work_details'>
              <div className='icon_symbol'></div>
              <div className='details'>
                <h5>House painting</h5>
                <p>Kormangala,Bangalore</p>
                <p>Tomorrow,10:00 AM</p>
              </div>
            </div>
            <div className='payment'>
              <h4>1200</h4>
              <p>Full Day</p>
            </div>
            <div className='btn'>
              <button>Accept</button>
              <button>Reject</button>
            </div>
            
          </div>
          <div className='job_notify'>
            <div className='work_details'>
              <div className='icon_symbol'></div>
              <div className='details'>
                <h5>PG Paintings</h5>
                <p>Bommasandra,Bangalore</p>
                <p>Sunday,09:00 AM</p>
              </div>
            </div>
            <div className='payment'>
              <h4>1650</h4>
              <p>Full Day</p>
            </div>
            <div className='btn'>
              <button className='accept'>Accept</button>
              <button className='reject'>Reject</button>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Workerdashboards
