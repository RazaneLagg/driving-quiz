import React, { useState, useEffect, useRef } from 'react';
import '../styles/MentorNavBar.css';
import { Link, useNavigate } from 'react-router-dom';

const MentorNavBar = ({ type }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

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
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/searchp`, { state: { query: searchQuery.trim() } });
    }
  };

  return (
    <nav className={type === 'settings' ? 'navbar-sticky-khadija' : 'navbar-khadija'}>
      <div className="navbar-container-khadija">
        <img className="se-logo-pic-khadija" src="./assets/images/logo.png" alt="Logo" />

        <form className="navbar-search-khadija" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            className="search-input-khadija"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link to="/MentorSearchPage">
          <button type="submit" className="search-button-navbar-khadija">
           <img src='./assets/icons/searchGlass.png'/> 
          </button>
          </Link>
          
        </form>

        <div className="hamburger-khadija" onClick={toggleMobileMenu}>
          <span className="bar-khadija"></span>
          <span className="bar-khadija"></span>
          <span className="bar-khadija"></span>
        </div>

        <div
          className={`navbar-elements-khadija ${
            isMobileMenuVisible ? 'mobile-visible-khadija' : ''
          }`}
        >
          <ul
            className={`ul-elements-khadija ${
              isMobileMenuVisible ? 'mobile-visible-khadija' : ''
            }`}
          >
            <img
              className={`se-logo-pic-2-khadija ${
                isMobileMenuVisible ? 'mobile-visible-khadija' : ''
              }`}
              src="./assets/images/logo.png"
              alt="Logo"
            />
            {['Home', 'Courses', 'Quizzes'].map((item, index) => (
              <li key={index}>
                {item === 'Home' ? (
                  <Link to="/MentorHomePage">{item}</Link>
                ) : item === 'Quizzes' ?  (
                  <Link to="/QuizesMentorView">{item}</Link>
                ) : item === 'Courses' ? (
                    <Link to="/MentorCourses">{item}</Link>
                  ) 
                : (
                  item
                )}
              </li>
            ))}
            <li
              className={`profile-menu-khadija ${
                isMobileMenuVisible ? 'mobile-visible-khadija' : ''
              }`}
            >
              <img
                src="./assets/images/Avatar.png"
                alt="profile"
                className="profile-pic-khadija"
              />
              <div className="custom-dropdown-khadija">
                <button
                  type="submit"
                  ref={buttonRef}
                  className="dropdown-toggle-khadija"
                  onClick={toggleDropdown}
                >
                  khadija
                </button>
                {isDropdownVisible && (
                  <ul ref={dropdownRef} className="dropdown-menu-khadija">
                    <li>
                   <Link to="/ProfilePage"> Profile</Link>
                    </li>
                    <li>
                      <Link to="/EditProfile">Settings</Link>
                    </li>
                    <li><Link to="/login">Log out</Link></li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MentorNavBar;
