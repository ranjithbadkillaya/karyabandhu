import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./postjob.css";

function PostJob() {

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [workType, setWorkType] = useState("Full Day");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");

  const [jobDate, setJobDate] = useState("");
  const [entryTime, setEntryTime] = useState("");
  const [exitTime, setExitTime] = useState("");

  useEffect(() => {

    if (!id) return;

    const jobs =
      JSON.parse(localStorage.getItem("jobs")) || [];

    const job = jobs.find(
      (j) => j.id === Number(id)
    );

    if (job) {

      setTitle(job.title);
      setLocation(job.location);
      setSalary(job.salary);
      setWorkType(job.workType);
      setExperience(job.experience);
      setDescription(job.description);

      setJobDate(job.jobDate || "");
      setEntryTime(job.entryTime || "");
      setExitTime(job.exitTime || "");
    }

  }, [id]);

  const handlePostJob = () => {

    const jobs =
      JSON.parse(localStorage.getItem("jobs")) || [];

    if (id) {

      const updatedJobs = jobs.map((job) =>
        job.id === Number(id)
          ? {
              ...job,
              title,
              location,
              salary,
              workType,
              experience,
              description,
              jobDate,
              entryTime,
              exitTime
            }
          : job
      );

      localStorage.setItem(
        "jobs",
        JSON.stringify(updatedJobs)
      );

      alert("Job Updated Successfully");

    } else {

      const newJob = {
        id: Date.now(),
        title,
        location,
        salary,
        workType,
        experience,
        description,
        jobDate,
        entryTime,
        exitTime,
        applications: 0
      };

      jobs.push(newJob);

      localStorage.setItem(
        "jobs",
        JSON.stringify(jobs)
      );

      alert("Job Posted Successfully");
    }

    setTitle("");
    setLocation("");
    setSalary("");
    setWorkType("Full Day");
    setExperience("");
    setDescription("");
    setJobDate("");
    setEntryTime("");
    setExitTime("");
  };

  return (
    <div className="postjob_container">

      <Link
        to="/Employerdashboard"
        className="back_btn"
      >
        ← Back To Dashboard
      </Link>

      <h1>
        {id ? "Edit Job" : "Post a New Job"}
      </h1>

      <p>
        Find the right worker for your work.
      </p>

      <div className="job_form">

        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) =>
            setSalary(e.target.value)
          }
        />

        <select
          value={workType}
          onChange={(e) =>
            setWorkType(e.target.value)
          }
        >
          <option>Full Day</option>
          <option>Half Day</option>
        </select>

        <input
          type="text"
          placeholder="Experience Required"
          value={experience}
          onChange={(e) =>
            setExperience(e.target.value)
          }
        />

        <input
          type="date"
          value={jobDate}
          onChange={(e) =>
            setJobDate(e.target.value)
          }
        />

        <input
          type="time"
          value={entryTime}
          onChange={(e) =>
            setEntryTime(e.target.value)
          }
        />

        <input
          type="time"
          value={exitTime}
          onChange={(e) =>
            setExitTime(e.target.value)
          }
        />

        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <button onClick={handlePostJob}>
          {id ? "Save Changes" : "Post Job"}
        </button>

      </div>

    </div>
  );
}

export default PostJob;