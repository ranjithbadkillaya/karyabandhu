import React, { useState, useEffect } from 'react'
import './workers.css'
import { useNavigate } from "react-router-dom";
import Sidebar from '../../component/sidebar/Sidebar';
import Dashboardheader from '../../component/dashboardheader/Dashboardheader';
import Welcomebanner from '../../component/welcomebanner/Welcomebanner';
import Profilecard from '../../component/profilecard/Profilecard';
import AcceptedJobCard from '../../component/AcceptedJobCard/AcceptedJobCard';
import Acceptedstatcard from '../../component/Acceptedstatcard/Acceptedstatcard';

function Workerdashboards() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const [nextJobs, setNextJobs] = useState(
    JSON.parse(localStorage.getItem("nextJobs")) || []
  );

  useEffect(() => {
    const storedJobs =
      JSON.parse(localStorage.getItem("jobs")) || [];

    setJobs(storedJobs);
  }, []);

  const handleAccept = (job) => {

    const updatedNextJobs = [
      ...nextJobs,
      job
    ];

    setNextJobs(updatedNextJobs);

    localStorage.setItem(
      "nextJobs",
      JSON.stringify(updatedNextJobs)
    );

    // ADD THIS PART
    const acceptedWorkers =
      JSON.parse(localStorage.getItem("acceptedWorkers")) || [];

    acceptedWorkers.push({
      workerName: "Ravi",
      skill: "Electrician",
      rating: "4.5",
      jobTitle: job.title
    });

    localStorage.setItem(
      "acceptedWorkers",
      JSON.stringify(acceptedWorkers)
    );

    const updatedJobs = jobs.map((j) =>
      j.id === job.id
        ? {
          ...j,
          applications: (j.applications || 0) + 1
        }
        : j
    );

    setJobs(updatedJobs);

    localStorage.setItem(
      "jobs",
      JSON.stringify(updatedJobs)
    );
  };


  const handleReject = (id) => {

    const updatedJobs = jobs.filter(
      (job) => job.id !== id
    );

    setJobs(updatedJobs);

    localStorage.setItem(
      "jobs",
      JSON.stringify(updatedJobs)
    );
  };
  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    navigate("/login");
  };
  return (
    <div className='main_container'>
    <Sidebar onlogout={handleLogout}/>
      <div className='main_container3'>
        <Dashboardheader/>
        <Welcomebanner/>
        <div className='container3'>
          <Profilecard/>
          <Acceptedstatcard count={nextJobs.length}/>
         
        </div>
        <div className='container4'>
          <h4>Next Job</h4>

          <div className='job_details'>

            {nextJobs.length === 0 ? (

              <p>No Job Accepted</p>

            ) : (
              nextJobs.map((job) => (
                <AcceptedJobCard
                key={job.id}
        job={job}/>
                 
               ))

          

            )}

          </div>
        </div>
        <div className='container5'>
          <h4>Job Notification</h4>
          {jobs.length === 0 ? (
            <p>No Jobs Available</p>
          ) : (
            jobs.map((job) => (
              <div className='job_notify' key={job.id}>

                <div className='work_details'>
                  <div className='icon_symbol'></div>

                  <div className='details'>
                    <h5>{job.title}</h5>
                    <p>{job.location}</p>
                    <p>New Job Available</p>
                  </div>
                </div>

                <div className='payment'>
                  <h4>{job.salary}</h4>
                  <p>{job.workType}</p>
                </div>

                <div className='btn'>
                  <button
                    onClick={() => handleAccept(job)}
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => handleReject(job.id)}
                  >
                    Reject
                  </button>
                </div>

              </div>
            ))
          )}

        </div>
      </div>

    </div>
  )
}

export default Workerdashboards
