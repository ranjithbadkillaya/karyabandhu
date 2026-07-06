import React, { useState } from "react";
import "./employerprofile.css";
import { Link } from "react-router-dom";

function EmployerProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("Ravi Kumar");
  const [phone, setPhone] = useState("9876543210");
  const [email, setEmail] = useState("ravi@gmail.com");
  const [location, setLocation] = useState("HSR Layout, Bangalore");

  return (
    <div className="profile_container">
         <div className="profile_header">
    <Link to="/employerdashboard" className="back_link">
      ← Back to Dashboard
    </Link>
  </div>

      <h1>My Profile</h1>
      <p>Manage your personal information.</p>

      <div className="profile_card">
        <div className="profile_image"></div>

        <div className="profile_details">
          <h2>{name}</h2>
          <p> Verified Employer</p>
          <p>{location}</p>
          <p> {phone}</p>
        </div>

        <button
          className="edit_btn"
          onClick={() => {
            if (isEditing) {
              alert("Profile Updated Successfully");
            }
            setIsEditing(!isEditing);
          }}
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
          <span>Phone Number</span>

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
    </div>
  );
}

export default EmployerProfile;