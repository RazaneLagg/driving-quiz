import React, { useEffect, useState } from 'react';
import AdminDashNavbar from '../../components/admindashnavbar';
import '../../styles/schoolsPage.css';
import { Link } from 'react-router-dom';

const SchoolsPage = () => {
  const [schools, setSchools] = useState([
    {
      id: 1,
      name: 'Road Doe',
      email: 'hbib@example.com',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Drive Smith',
      email: 'Drive@example.com',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 1,
      name: 'Road Doe',
      email: 'hbib@example.com',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Drive Smith',
      email: 'Drive@example.com',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 1,
      name: 'Road Doe',
      email: 'hbib@example.com',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Drive Smith',
      email: 'Drive@example.com',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 1,
      name: 'Road Doe',
      email: 'hbib@example.com',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Drive Smith',
      email: 'Drive@example.com',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 1,
      name: 'Road Doe',
      email: 'hbib@example.com',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Drive Smith',
      email: 'Drive@example.com',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
  }, []);

  const handleDeleteSchool = (id) => {
    setSchools(schools.filter(school => school.id !== id));
    console.log(`Deleted school with ID: ${id}`);
  };

  const handleAddSchool = () => {
    setShowPopup(true);
  };

  const handleCopyLink = () => {
    const link = 'https://example.com/school-invite'; 
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <AdminDashNavbar />
      <div className="schools-page">
        <h2>Schools</h2>
        <button className="add-school-btn" onClick={handleAddSchool}>Add School</button>

        <div className={`popup ${showPopup ? 'active' : ''}`}>
          <button className="close-btn" onClick={closePopup}>X</button>
          <div className="popup-content">
            <span>Invite a School</span>
            <button onClick={handleCopyLink}>Copy Link</button>
          </div>
        </div>

        <table className="school-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school) => (
              <tr key={school.id}>
                <td>
                <Link to="/SchoolProfileDash">
                    <button className='view-btn'>View Profile</button>
                  </Link>                   
                  <button className="delete-btn" onClick={() => handleDeleteSchool(school.id)}>Delete</button>
                </td>
                <td>
                  <img
                    src={school.profilePic}
                    alt={`${school.name}'s profile`}
                    className="profile-pic"
                  />
                </td>
                <td>{school.name}</td>
                <td>{school.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchoolsPage;
