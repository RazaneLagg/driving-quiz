import React, { useState } from 'react';
import '../styles/SettingsBar.css';

function SettingsBar({ selectedOption, onOptionSelect }) {
  const options = ['personal settings', 'change passwords', 'Delete Account', 'School Settings'];
  const optionsIcons = ['P', 'C', 'D', 'S']; // Icon placeholders, replace with actual icons if needed
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`test`}>
      <img src="./assets/icons/Car.png" alt="Logo" />
      <div className={`SettingsBarContainer`}>
        <ul className="options">
          {options.map((option, index) => (
            <li
              key={index}
              className={`option-item ${option.replace(/\s+/g, '-').toLowerCase()} ${
                option === selectedOption ? 'selected' : ''
              }`}
              onClick={() => onOptionSelect(option)}
            >
              <span className={`icon icon-${option.replace(/\s+/g, '-').toLowerCase()}`}>
                {optionsIcons[index]}
              </span>
              <span className={`text text-${option.replace(/\s+/g, '-').toLowerCase()}`}>
                {option}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SettingsBar;
