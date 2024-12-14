// PersonalSettings.js
import React, { useState } from 'react';
import '../styles/DeleteAccount.css';

function DeleteAccount() {
  const [confirmation, setConfirmation] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteAccount = (e) => {
    e.preventDefault();
    if (confirmation.toLowerCase() !== 'delete') {
      setMessage('Please type "DELETE" to confirm account deletion.');
      return;
    }
    setMessage('Your account has been deleted.');
    // Additional logic for account deletion can be added here.
  };

  return (
    <div className="delete-account-container">
      <h1 className="title">Delete Account</h1>
      <p className="warning">Warning: Deleting your account is irreversible. All your data will be permanently removed.</p>
      <form className="delete-form" onSubmit={handleDeleteAccount}>
        <div className="form-group">
          <label htmlFor="confirmation">Type "DELETE" to confirm</label>
          <input
            type="text"
            id="confirmation"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="delete-button">Delete Account</button>
      </form>
      {message && <p className={`message ${message.includes('deleted') ? 'success' : 'error'}`}>{message}</p>}
    </div>
  );
}

export default DeleteAccount;
