import React from 'react'
import './home.css'

function Howitworks() {
    return (
        <div className='How_itworks_container'>
            <div className='description_box5'>
                <p>How KaryaBandhu Works</p>
            </div>
            <div className='description_box6'>
                <div className='description_card'>
                    <div className='serial_no'><p>1</p></div>
                    <div className='sub_heading2'><p>Create Account</p></div>
                    <div className='sub_text2'><p>Sign up as a Worker or Employer<br></br>
                        and complete your profile with <br></br>
                        basic details, skills, and location.</p>
                    </div>
                </div>
                <div className='description_card'>
                    <div className='serial_no'><p>1</p></div>
                    <div className='sub_heading2'> <p>Find/Post Jobs</p></div>
                    <div className='sub_text2'><p>Workers can browse nearby verified jobs, <br></br>
                        while employers can post job requirements <br></br>
                        and hire suitable workers.</p>
                    </div>
                </div>
                <div className='description_card'>
                    <div className='serial_no'><p>3</p></div>
                    <div className='sub_heading2'><p>Accept & Complete Work</p></div>
                    <div className='sub_text2'><p>Accept the job, complete <br></br>
                        the work at the agreed location, and receive <br></br>
                        payment after successful completion.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Howitworks
