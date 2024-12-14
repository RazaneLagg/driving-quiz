import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import Modal from '../components/Window.jsx'; 

const NavBar = ({ type, hasJoinedSchool }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  
  const navigate = useNavigate();  

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/searchp`, { state: { query: searchQuery.trim() } });
    }
  };

  const handleLinkClick = (e, path) => {
    if (!hasJoinedSchool) {
      e.preventDefault(); // Prevent navigation if not joined school
      setIsModalVisible(true); // Show modal
    } else {
      navigate(path); // Allow navigation if school is joined
    }
  };

  const closeModal = () => {
    setIsModalVisible(false); // Close the modal
  };

  return (
    <>
      {isModalVisible && (
        <Modal message="You need to join a school to access this feature." onClose={closeModal} />
      )}
      <nav className={type === 'settings' ? 'navbar-sticky' : 'navbar'}>
        <div className="navbar-container">
          <img className="se-logo-pic" src="./assets/images/logo.png" alt="Logo" />

          <form className="navbar-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button-navbar">
              <img src='./assets/icons/searchGlass.png' />
            </button>
          </form>

          <div className="hamburger" onClick={toggleMobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <div className={`navbar-elements ${isMobileMenuVisible ? 'mobile-visible' : ''}`}>
            <ul className={`ul-elements ${isMobileMenuVisible ? 'mobile-visible' : ''}`}>
              <img
                className={`se-logo-pic-2 ${isMobileMenuVisible ? 'mobile-visible' : ''}`}
                src="./assets/images/logo.png"
                alt="Logo"
              />
              {['Home', 'Lessons', 'Quizzes', 'Progress'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item === 'Home' ? '/StudentHome' :
                        item === 'Lessons' ? '/lessonspage' :
                        item === 'Progress' ? '/progresspage' : '/mainpage'}
                    onClick={(e) => handleLinkClick(e, item === 'Home' ? '/StudentHome' :
                                                   item === 'Lessons' ? '/lessonspage' :
                                                   item === 'Progress' ? '/progresspage' : '/mainpage')}
                    style={{ pointerEvents: 'auto' }} // Always allow click
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li className={`profile-menu ${isMobileMenuVisible ? 'mobile-visible' : ''}`}>
                <img src="./assets/images/ning.png" alt="profile" className="profile-pic" />
                <div className="custom-dropdown">
                  <button
                    type="submit"
                    ref={buttonRef}
                    className="dropdown-toggle"
                    onClick={toggleDropdown}
                  >
                    imadeddig
                  </button>
                  {isDropdownVisible && (
                    <ul ref={dropdownRef} className="dropdown-menu">
                      <li>
                        <Link to="/settings">Profile</Link>
                      </li>
                      <li>
                        <Link to="/settings">Settings</Link>
                      </li>
                      <li>
                        <Link to="/login">Log out</Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
