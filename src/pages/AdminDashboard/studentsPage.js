import React, { useEffect, useState } from 'react';
import AdminDashNavbar from '../../components/admindashnavbar';
import '../../styles/studentsPage.css';
import { Link } from 'react-router-dom';

const StudentsPage = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Said Hamouz',
      email: 'said@example.com',
      level: 'Beginner',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Ahmed Smith',
      email: 'ahmed@example.com',
      level: 'Intermediate',
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 1,
      name: 'Said Hamouz',
      email: 'said@example.com',
      level: 'Beginner',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Ahmed Smith',
      email: 'ahmed@example.com',
      level: 'Intermediate',
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 1,
      name: 'Said Hamouz',
      email: 'said@example.com',
      level: 'Beginner',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Ahmed Smith',
      email: 'ahmed@example.com',
      level: 'Intermediate',
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 1,
      name: 'Said Hamouz',
      email: 'said@example.com',
      level: 'Beginner',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Ahmed Smith',
      email: 'ahmed@example.com',
      level: 'Intermediate',
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 1,
      name: 'Said Hamouz',
      email: 'said@example.com',
      level: 'Beginner',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Ahmed Smith',
      email: 'ahmed@example.com',
      level: 'Intermediate',
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 1,
      name: 'Said Hamouz',
      email: 'said@example.com',
      level: 'Beginner',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Ahmed Smith',
      email: 'ahmed@example.com',
      level: 'Intermediate',
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  ]);

  useEffect(() => {
    // Fetch students data if needed
  }, []);



  const handleDelete = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    alert(`Student with ID: ${id} has been deleted.`);
  };

  return (
    <div>
      <AdminDashNavbar />
      <div className="students-page">
        <h2>Students</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>Actions</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>
 <Link to="/StudentProfileOv">
                    <button>View Profile</button>
                  </Link>                  
                  <button 
                    className="delete-btn" 
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <img
                    src={student.profilePic}
                    alt={`${student.name}'s profile`}
                    className="profile-pic"
                  />
                </td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsPage;
