import React, { useEffect, useState } from 'react';
import AdminDashNavbar from '../../components/admindashnavbar';
import '../../styles/mentorsPage.css';
import { Link } from 'react-router-dom';

const MentorsPage = () => {
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: 'Hbib Doe',
      email: 'hbib@example.com',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Habiba Smith',
      email: 'Habiba@example.com',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 1,
      name: 'Hbib Doe',
      email: 'hbib@example.com',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Habiba Smith',
      email: 'Habiba@example.com',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 1,
      name: 'Hbib Doe',
      email: 'hbib@example.com',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Habiba Smith',
      email: 'Habiba@example.com',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 1,
      name: 'Hbib Doe',
      email: 'hbib@example.com',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Habiba Smith',
      email: 'Habiba@example.com',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
  }, []);



  const handleDeleteMentor = (id) => {
    setMentors(mentors.filter(mentor => mentor.id !== id));
    console.log(`Deleted mentor with ID: ${id}`);
  };

  const handleAddMentor = () => {
    setShowPopup(true);
  };

  const handleCopyLink = () => {
    const link = 'https://example.com/mentor-invite';
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <AdminDashNavbar />
      <div className="mentors-page">
        <h2>Mentors</h2>
        <button className="add-mentor-btn" onClick={handleAddMentor}>Add Mentor</button>

        <div className={`popup ${showPopup ? 'active' : ''}`}>
          <button className="close-btn" onClick={closePopup}>X</button>
          <div className="popup-content">
            <span>Invite a Mentor</span>
            <button onClick={handleCopyLink}>Copy Link</button>
          </div>
        </div>

        <table className="mentor-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {mentors.map((mentor) => (
              <tr key={mentor.id}>
                <td>
                  <Link to="/MentorProfileDash">
                    <button className='view-btn'>View Profile</button>
                  </Link>                 
                    <button className="delete-btn" onClick={() => handleDeleteMentor(mentor.id)}>Delete</button>
                </td>
                <td>
                  <img
                    src={mentor.profilePic}
                    alt={`${mentor.name}'s profile`}
                    className="profile-pic"
                  />
                </td>
                <td>{mentor.name}</td>
                <td>{mentor.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MentorsPage;
