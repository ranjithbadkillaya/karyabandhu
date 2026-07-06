import React from "react";
import "./help.css";
import { Link } from "react-router-dom";

function Help() {
  return (
    <div className="help_container">
        <Link to="/Workerdashboards" className="back_btn">
  ← Back To Dashboard
</Link>

      <h1>Karyabandhu Help</h1>

      <div className="help_card">
        <h2>What is Karyabandhu?</h2>

        <p>
          Karyabandhu is a platform that connects workers and employers.
          Workers can find nearby job opportunities and employers can
          easily find skilled workers for their work.
        </p>
      </div>

      <div className="help_card">
        <h2>Why the Name Karyabandhu?</h2>

        <p>
          The word "Karya" means work and "Bandhu" means friend.
          Karyabandhu means a friend who helps people find work and
          employment opportunities.
        </p>
      </div>

      <div className="help_card">
        <h2>How Does Karyabandhu Help?</h2>

        <p>
          Karyabandhu helps workers discover jobs nearby and helps
          employers quickly find workers when needed. It reduces the
          time spent searching for work or workers.
        </p>
      </div>

      <div className="help_card">
        <h2>Benefits of Karyabandhu</h2>

        <ul>
          <li>Easy job discovery for workers.</li>
          <li>Simple job posting for employers.</li>
          <li>Quick communication between workers and employers.</li>
          <li>Manage jobs and applications in one place.</li>
          <li>Simple and easy-to-use interface.</li>
        </ul>
      </div>

      <div className="help_card">
        <h2>How to Use Karyabandhu?</h2>

        <h4>For Workers</h4>
        <p>
          Login → View Job Notifications → Accept or Reject Jobs →
          View Accepted Jobs.
        </p>

        <h4>For Employers</h4>
        <p>
          Login → Post a Job → View Applications →
          Hire Workers.
        </p>
      </div>

    </div>
  );
}

export default Help;