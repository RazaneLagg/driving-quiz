import React, { useState } from 'react';
import PersonalSettings from '../components/PersonalSettings';
import ChangePassword from '../components/ChangePassword';
import DeleteAccount from '../components/DeleteAccount';
import SchoolEnrolledSettings from '../components/SchoolEnrolledSettings';
import '../styles/SettingDetail.css';


function SettingDetail({ selectedOption }) {
  // You can also manage some internal state, for example, to handle form input or feedback
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');

  // Function to handle form submissions (e.g., password change or feedback submission)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to process the form data
    alert(`${selectedOption} form submitted!`);
  };

  return (
    <div className='SettingDetail'>
   

      {selectedOption === 'personal settings' && (
                <div>
                <PersonalSettings/>
              </div>
      )}

      {selectedOption === 'change passwords' && (
        <div>
                       
                <ChangePassword/>
            
          
        </div>
      )}

      {selectedOption === 'Delete Account' && (
        <div>
        <DeleteAccount/> 
        </div>
      )}

      {selectedOption === 'School Settings' && (
        <div>
        <SchoolEnrolledSettings/> 
        </div>
      )}
    </div>
  );
}

export default SettingDetail;
