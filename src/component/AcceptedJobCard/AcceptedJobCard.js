import React from 'react'
import { Link } from 'react-router-dom'
import './acceptedjobcard.css'

function AcceptedJobCard({job}) {
  return (
    <div>
      

                <div
                  className='accepted_job'
                  key={job.id}
                >
                  <div className='work_details'>

                    <div className='icon_symbol'></div>

                    <div className='details'>
                      <h5>{job.title}</h5>
                      <p>{job.location}</p>
                    </div>

                  </div>

                  <div className='payment'>
                    <h4>{job.salary}</h4>
                    <p>{job.workType}</p>
                  </div>

                  <Link
                    to={`/jobdetails/${job.id}`}
                  >
                    <button className='job_detail'>
                      Job Details
                    </button>
                  </Link>

                </div>

             
    </div>
  )
}

export default AcceptedJobCard
