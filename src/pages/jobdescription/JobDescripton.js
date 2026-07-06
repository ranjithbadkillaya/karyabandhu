import React from "react";
import { Link, useParams } from "react-router-dom";
import "./jobdescription.css";

function JobDetails() {

  const { id } = useParams();

  const jobs =
    JSON.parse(localStorage.getItem("jobs")) || [];

 const nextJobs =
  JSON.parse(localStorage.getItem("nextJobs")) || [];

const allJobs = [
  ...jobs,
  ...nextJobs
];

const job = allJobs.find(
  (item) => String(item.id) === String(id)
);

  if (!job) {
    return (
      <div className="job_details_page">

        <h2>Job Not Found</h2>

        <Link
          to="/Workerdashboards"
          className="back_btn"
        >
          ← Back To Dashboard
        </Link>

      </div>
    );
  }

  return (
    <div className="job_details_page">

      <Link
        to="/Workerdashboards"
        className="back_link"
      >
        ← Back To Dashboard
      </Link>

      <div className="job_card">

        <div className="job_header">

          <div className="job_icon"></div>

          <div>
            <h1>{job.title}</h1>
            <p>{job.workType}</p>
            <p>{job.location}</p>
          </div>

        </div>

        <hr />

       <div className="job_info">

  <div>
    <h4>Salary</h4>
    <p>₹ {job.salary}</p>
  </div>

  <div>
    <h4>Experience</h4>
    <p>{job.experience}</p>
  </div>

</div>

<div className="job_schedule">

  <div>
    <h4>Work Date</h4>
    <p>{job.jobDate}</p>
  </div>

  <div>
    <h4>Entry Time</h4>
    <p>{job.entryTime}</p>
  </div>

  <div>
    <h4>Exit Time</h4>
    <p>{job.exitTime}</p>
  </div>

</div>

        <div className="description">

          <h3>Job Description</h3>

          <p>{job.description}</p>

        </div>

      </div>

      <div className="employer_card">

        <h2>About Employer</h2>

        <div className="employer_top">

          <div className="employer_logo">
            RK
          </div>

          <div>
            <h3>Ravi Constructions</h3>
            <p> 4.6 Rating</p>
          </div>

        </div>

        <div className="employer_details">
          <p>Bangalore</p>
          <p>15 Jobs Posted</p>
          <p>Verified Employer</p>
        </div>

      </div>

    </div>
  );
}

export default JobDetails;