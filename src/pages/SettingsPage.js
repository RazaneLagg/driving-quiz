import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SettingsBar from '../components/SettingsBar';
import SettingDetail from '../components/SettingDetail';

import '../styles/SettingsPage.css';

function SettingsPage() {
  const [selectedOption, setSelectedOption] = useState('personal settings'); 

  return (
    <div className='settingsContainer'>
      
      <div className="SettingsPage">
        <SettingsBar selectedOption={selectedOption} onOptionSelect={setSelectedOption} />
        <SettingDetail selectedOption={selectedOption} />
      </div>
    </div>
  );
}

export default SettingsPage;
