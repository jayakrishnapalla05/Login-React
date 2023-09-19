import React from "react";
import pic from "./pic.png";

import "./style.css";

function Profile() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div>
      {userData ? (
        <div className="profile">
          <div className="profile-title">
            <h3>Account Settings</h3>
          </div>
          <div className="profile-content">
            <div className="img">
              <img src={pic} />
              <div className="details">
                <div> {userData.fullname}</div>
                <div> {userData.email}</div>
              </div>
            </div>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </div>
  );
}

export default Profile;
