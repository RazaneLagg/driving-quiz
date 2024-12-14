import React from 'react';
import '../styles/Window.css'; 

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay-billel">
      <div className="modal-content-billel">
        <p>{message}</p>
        <button onClick={onClose} className="modal-close-btn-billel">OK</button>
      </div>
    </div>
  );
};

export default Modal;
