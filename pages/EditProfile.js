
import React, { useState } from "react";
import "../styles/EditProfile.css"; 

const EditProfile = () => {
  const [profilePicture, setProfilePicture] = useState("./assets/images/Avatar.png");
  const [experiences, setExperiences] = useState([""]);
  const [certificates, setCertificates] = useState([""]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleAddField = (setter, fields) => {
    setter([...fields, ""]);
  };

  const handleInputChange = (e, index, setter, fields) => {
    const updatedFields = [...fields];
    updatedFields[index] = e.target.value;
    setter(updatedFields);
  };

  return (
    <div className="edit-profile-salah">
      <div className="profile-card-salah">
        <div className="left-section-salah">
          <div className="profile-picture-wrapper-salah">
            <label htmlFor="image-input">
              <img src={profilePicture} alt="Profile" className="profile-picture-salah" />
            </label>
            <input
  
              type="file"
              id="image-input"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
        </div>

        <div className="right-section-salah">
        <form className="profile-form-salah">
  <div className="form-group-salah">
    <label>Full Name</label>
    <input  value="khadidja chambarlain" type="text" placeholder="Full Name" className="input-field-salah" />
  </div>

  
  <div className="form-group-salah">
    <label>Age</label>
    <input value="28" type="number" placeholder="Age" className="input-field-salah" />
  </div>

  
  <div className="form-group-salah">
    <label>Gender</label>
    <select className="input-field-salah">
      <option value="Female">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      
    </select>
  </div>

  <div className="form-group-salah">
    <label>Location</label>
    <input value="New York, USA"  type="text" placeholder="Location" className="input-field-salah" />
  </div>

  <div className="form-group-salah">
    <label>Description</label>
    <textarea placeholder="Description" value="An experienced driving instructor dedicated to teaching safe and responsible driving techniques. Passionate about fostering confidence in new drivers and promoting road safety." className="textarea-field-salah"></textarea>
  </div>

  <div className="dynamic-section-salah">
    <label>Experiences</label>
    {experiences.map((exp, index) => (
      <input
        key={index}
        value="10 years of experience as a Certified Driving Instructor at SafeDrive Academy."
        type="text"
        placeholder="Experience"
        
        onChange={(e) => handleInputChange(e, index, setExperiences, experiences)}
        className="input-field-salah"
      />
    ))}
    <button type="button" onClick={() => handleAddField(setExperiences, experiences)} className="add-button-salah">
      Add Experience
    </button>
  </div>

  <div className="dynamic-section-salah">
    <label>Certificates</label>
    {certificates.map((cert, index) => (
      <input
        key={index}
        value="10 years of experience as a Certified Driving Instructor at SafeDrive Academy."
        type="text"
        placeholder="Certificate"
        
        onChange={(e) => handleInputChange(e, index, setCertificates, certificates)}
        className="input-field-salah"
      />
    ))}
    <button type="button" onClick={() => handleAddField(setCertificates, certificates)} className="add-button-salah">
      Add Certificate
    </button>
  </div>

  <button type="submit" className="submit-button-salah">Save Profile</button>
</form>

        </div>
      </div>
    </div>
  );
};

export default EditProfile;
