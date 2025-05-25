import React from 'react';

const ProfileCard = ({ profile, onSummaryClick, onTagClick }) => {
  return (
    <div style={styles.card}>
      <img src={profile.photo} alt={profile.name} style={styles.image} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>

      {/* Skill Tags */}
      <div style={styles.tagContainer}>
        {profile.skills.map((skill, index) => (
          <span
            key={index}
            style={styles.tag}
            onClick={() => onTagClick && onTagClick(skill)}
          >
            {skill}
          </span>
        ))}
      </div>

      <button onClick={() => onSummaryClick(profile)}>Summary</button>
    </div>
  );
};

const styles = {
  card: {
  backgroundColor: '#ffffff',
  border: '1px solid #e0e0e0',
  padding: '1.5rem',
  borderRadius: '15px',
  marginBottom: '1.5rem',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  maxWidth: '350px',
  margin: '1rem auto'
  },
  image: {
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    marginBottom: '1rem',
    border: '3px solid #1976d2',
  },
  tagContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    margin: '0.8rem 0',
  },
  tag: {
  backgroundColor: '#1976d2',
  color: 'white',
  padding: '0.4rem 0.8rem',
  borderRadius: '20px',
  fontSize: '0.8rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  },
};


export default ProfileCard;
