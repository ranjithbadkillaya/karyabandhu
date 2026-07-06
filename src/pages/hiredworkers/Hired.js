import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./hired.css";

function Hired() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const hired =
      JSON.parse(localStorage.getItem("hiredWorkers")) || [];

    setWorkers(hired);
  }, []);

  return (
    <div className="hired_workers_container">
      <Link to="/Employerdashboard" className="back_btn">
        ← Back to Dashboard
      </Link>

      <h1>Hired Workers</h1>

      {workers.length === 0 ? (
        <div className="no_workers">
          <h3>No Hired Workers</h3>
          <p>Workers you hire will appear here.</p>
        </div>
      ) : (
        <div className="hired_workers_list">
          {workers.map((worker, index) => (
            <div className="worker_card" key={index}>
              <div className="worker_info">
                <div className="worker_image"></div>

                <div className="worker_details">
                  <h3>{worker.workerName}</h3>
                  <p><strong>Skill:</strong> {worker.skill}</p>
                  <p><strong>Job:</strong> {worker.jobTitle}</p>
                  <p><strong>⭐ Rating:</strong> {worker.rating}</p>
                </div>
              </div>

              <button className="view_btn">
                View Profile
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Hired;