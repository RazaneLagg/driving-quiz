import React, { useEffect, useState } from 'react';
import DashNavbar from '../../components/schooldashnavbar';
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
  ]);

  useEffect(() => {
  }, []);

  return (
    <div>
      <DashNavbar />
      <div className="students-page">
        <h2>Students</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr >
                <td>
                <Link to="/StudentProfileOv">
                    <button>View Profile</button>
                  </Link>
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
