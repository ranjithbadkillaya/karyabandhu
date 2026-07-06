import React, { useState, useEffect } from 'react'
import './workers.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Sidebar from '../../component/sidebar/Sidebar';
import Dashboardheader from '../../component/dashboardheader/Dashboardheader';
import Welcomebanner from '../../component/welcomebanner/Welcomebanner';

function Employerdashboard() {

    const [jobs, setJobs] = useState([]);
    const [acceptedWorkers, setAcceptedWorkers] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const storedJobs =
            JSON.parse(localStorage.getItem("jobs")) || [];

        setJobs(storedJobs);
        const workers =
            JSON.parse(localStorage.getItem("acceptedWorkers")) || [];

        setAcceptedWorkers(workers);
    }, []);

    const deleteJob = (id) => {

        const updatedJobs = jobs.filter(
            (job) => job.id !== id
        );

        setJobs(updatedJobs);

        localStorage.setItem(
            "jobs",
            JSON.stringify(updatedJobs)
        );
    };

    const handleAcceptApplicant = (worker) => {

        const hiredWorkers =
            JSON.parse(localStorage.getItem("hiredWorkers")) || [];

        hiredWorkers.push(worker);

        localStorage.setItem(
            "hiredWorkers",
            JSON.stringify(hiredWorkers)
        );

        const updatedWorkers =
            acceptedWorkers.filter(
                (w) => w !== worker
            );

        setAcceptedWorkers(updatedWorkers);

        localStorage.setItem(
            "acceptedWorkers",
            JSON.stringify(updatedWorkers)
        );
    };

    const handleRejectApplicant = (worker) => {

        const updatedWorkers =
            acceptedWorkers.filter(
                (w) => w !== worker
            );

        setAcceptedWorkers(updatedWorkers);

        localStorage.setItem(
            "acceptedWorkers",
            JSON.stringify(updatedWorkers)
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
                <div className='container8'>
                    <div className='card3'>
                        <div className='icon_picture'></div>
                        <div className='details'>
                            <p>Active Job</p>
                            <h3>{jobs.length}</h3>
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
                            <h3>{acceptedWorkers.length}</h3>

                            <Link to="/hiredworkers">
                                <button>
                                    View
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='container9'>
                    <div className='work_notification'>
                        <h4>Recent Job</h4>
                        {/* <div className='recent_job'> */}

                        <div className='recent_job'>

                            {jobs.length === 0 ? (
                                <p>No jobs posted yet</p>
                            ) : (
                                jobs.map((job) => (
                                    <Link
                                        to={`/editjob/${job.id}`}
                                        className="job_link"
                                        key={job.id}
                                    >
                                        <div className='work_post'>
                                            <div className='working_details'>
                                                <h4>{job.title}</h4>
                                                <p>{job.location}</p>
                                            </div>

                                            <div className='worker_application'>
                                                <h3>{job.applications}</h3>
                                                <p>application</p>
                                                <button
                                                    className='delete_btn'
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        deleteJob(job.id);
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            )}

                        </div>
                        {/* 
                        </div> */}
                    </div>
                    <div className='applicants_notification'>
                        <h4>Recent Application</h4>
                        <div className='recent_worker'>
                            <div className='user_profile'>
                                <div className='user_details'>
                                    <div className='user'>
                                        {acceptedWorkers.length === 0 ? (
                                            <p>No Accepted Workers Yet</p>
                                        ) : (
                                            acceptedWorkers.map((worker, index) => (
                                                <div
                                                    className='user_profile'
                                                    key={index}
                                                >
                                                    <div className='user_details'>

                                                        <div className='user_profile_picture'></div>

                                                        <div className='user'>
                                                            <h4>{worker.workerName}</h4>
                                                            <p>{worker.skill}</p>
                                                            <p>⭐ {worker.rating}</p>
                                                            <p>{worker.jobTitle}</p>
                                                            <div className="btn">
                                                                <button
                                                                    onClick={() =>
                                                                        handleAcceptApplicant(worker)
                                                                    }
                                                                >
                                                                    Accept
                                                                </button>

                                                                <button
                                                                    onClick={() =>
                                                                        handleRejectApplicant(worker)
                                                                    }
                                                                >
                                                                    Reject
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className='post_job_section'>
                    <h3>Need More Workers?</h3>
                    <p>Post your next job and find workers nearby.</p>

                    <Link to="/postjob">
                        <button className='post_job_btn'>
                            + Post New Job
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Employerdashboard
