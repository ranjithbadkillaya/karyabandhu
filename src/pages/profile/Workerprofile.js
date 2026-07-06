import React, { useState } from "react";
import "./workerprofile.css";
import { Link } from "react-router-dom";

function WorkerProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("Ramesh B");
  const [email, setEmail] = useState("ramesh@gmail.com");
  const [phone, setPhone] = useState("9876543210");
  const [skill, setSkill] = useState("Electrician");
  const [experience, setExperience] = useState("5 Years");
  const [location, setLocation] = useState("HSR Layout, Bangalore");

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile Updated");
  };

  return (
    <div className="profile_container">

      <div className="profile_header">
        <Link to="/Workerdashboards" className="back_link">
      ← Back to Dashboard
    </Link>
        <h1>My Profile</h1>
        <p>Manage your personal information.</p>
      </div>

      <div className="profile_card">
        <div className="profile_image"></div>

        <div className="profile_details">
          <h2>{name}</h2>
          <p> Verified</p>
          <p> {location}</p>
          <p> {phone}</p>
        </div>

        <button
          className="edit_btn"
          onClick={() =>
            isEditing ? handleSave() : setIsEditing(true)
          }
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      <div className="info_card">
        <h3>Personal Information</h3>

        <div className="info_row">
          <span>Full Name</span>

          {isEditing ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <span>{name}</span>
          )}
        </div>

        <div className="info_row">
          <span>Email</span>

          {isEditing ? (
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <span>{email}</span>
          )}
        </div>

        <div className="info_row">
          <span>Phone</span>

          {isEditing ? (
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          ) : (
            <span>{phone}</span>
          )}
        </div>

        <div className="info_row">
          <span>Location</span>

          {isEditing ? (
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          ) : (
            <span>{location}</span>
          )}
        </div>
      </div>

      <div className="info_card">
        <h3>Work Information</h3>

        <div className="info_row">
          <span>Primary Skill</span>

          {isEditing ? (
            <input
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
          ) : (
            <span>{skill}</span>
          )}
        </div>

        <div className="info_row">
          <span>Experience</span>

          {isEditing ? (
            <input
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          ) : (
            <span>{experience}</span>
          )}
        </div>

        <div className="info_row">
          <span>Availability</span>
          <span>Available For Work</span>
        </div>
      </div>

    </div>
  );
}

export default WorkerProfile;