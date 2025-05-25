import React from 'react';

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '400px',
    textAlign: 'center',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
  },
  image: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
  close: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#eee',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

const ProfileModal = ({ profile, onClose }) => {
  return (
    <div style={modalStyle.overlay}>
      <div style={modalStyle.modal}>
        <img src={profile.photo} alt={profile.name} style={modalStyle.image} />
        <h2>{profile.name}</h2>
        <p>{profile.description}</p>
        <p><strong>Address:</strong> {profile.address}</p>

        {/* Optional: Add more details here */}
        <button style={modalStyle.close} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProfileModal;
