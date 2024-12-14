import React, { useState } from "react";
import "../../styles/schoolProfileSettings.css";
import { useNavigate } from "react-router-dom";

const ProfileSettingsPage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    oldPassword: "",
    profilePicture: "",
  });
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  const handleLogout = () => {
    alert("You have logged out.");
    navigate("/login");
  };
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile({ ...profile, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    alert("Profile updated successfully!");
  };



  const handleDeleteAccount = () => {
    alert("Your account has been deleted.");
  };

  return (
    <div className="profile-settings">
      <h2>Profile Settings</h2>
      <div className="img-container">
        <img
          src={profile.profilePicture || "https://via.placeholder.com/100?text=Profile"}
          alt="Profile"
        />
        <label className="edit-icon">
          ✏️
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            style={{ display: "none" }}
          />
        </label>
      </div>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={profile.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Old Password:</label>
          <input
            type="password"
            name="oldPassword"
            value={profile.oldPassword}
            onChange={handleInputChange}
          />
        </div>
        {/* Fixed class name */}
        <div className="button-container">

        <button
          type="button"
          className="profile-save-changes-btn"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
        </div>
      </form>
      
      {/* Divider line */}
      <div className="divider"></div>

      <div className="button-container">
        <button
          type="button"
          className="profile-log-out-btn"
          onClick={handleLogout}
        >
          Log Out
        </button>
        <button
          type="button"
          className="profile-delete-account-btn"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
